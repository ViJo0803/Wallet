import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import jwtDecode from "jwt-decode";
import * as React from "react";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

// You need to swap out the Auth0 client id and domain with the one from your Auth0 client.
// In your Auth0 client, you need to also add a url to your authorized redirect urls.
//
// For this application, I added https://auth.expo.io/@arielweinberger/with-auth0 because I am
// signed in as the 'arielweinberger' account on Expo and the name/slug for this app is 'with-auth0'.
//
// You can open this app in the Expo client and check your logs to find out your redirect URL.

const auth0ClientId = "vdCjaxfukPDOLrGpcwP080wD54xZxAjT";
const authorizationEndpoint = "https://dev-dp2bcbco.us.auth0.com/authorize"; //dev-zt1p-cha.us.auth0.com

const useProxy = Platform.select({ web: false, default: true });

const MY_STORAGE_KEY = 'token'


const redirectUri = AuthSession.makeRedirectUri({
  useProxy
});

/* console.log('aaa',redirectUri) */

export default function Login({ navigation }) {
  const discovery = AuthSession.useAutoDiscovery(
    "https://dev-dp2bcbco.us.auth0.com/authorize"
  );

  const [name, setName] = React.useState(null);
  // Agregar async antes del await
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      responseType: AuthSession.ResponseType.IdToken,
      // retrieve the user's profile
      scopes: ["openid", "profile"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce"
      }, 
      prompt: "login",
    },
    discovery
  );

  WebBrowser.maybeCompleteAuthSession();


  const storeData = async () => {
    const decoded1 = jwtDecode(response.params.id_token);
    /* console.log('deco1', decoded1) */
    try {
      await AsyncStorage.setItem(MY_STORAGE_KEY, JSON.stringify(decoded1));

    } catch (error) {
        // Error saving data
        console.log(error.message)
    }
  }
  
  const retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem(MY_STORAGE_KEY);
        if (value !== null) {
          const stringToJson = JSON.parse(value)
          /* console.log('datos parseados',stringToJson) */
            // Our data is fetched successfully
        }
    } catch (error) {
        // Error retrieving data
        console.log(error.message)
    }
  }

  React.useEffect(() => {
    if (response) {
      if (response.error) {
        Alert.alert(
          "Authentication error",
          response.params.error_description || "something went wrong"
        );
        return;
      }
      if (response.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = response.params.id_token;
        const decoded = jwtDecode(jwtToken);

        storeData()
        const { name } = decoded;
        setName(name);
        retrieveData()
      }
    }
  }, [response]);

  return (
    <View style={styles.container}>
      {name ? (
        (navigation.navigate("Loading"),
        (<Button title="Log out" onPress={() => setName(null)} />))
      ) : (
        <Button
          disabled={!request}
          title="Log in with Auth0"
          onPress={() => {
            promptAsync({ useProxy });
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40
  }
});
