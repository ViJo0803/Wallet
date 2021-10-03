import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import jwtDecode from 'jwt-decode';
import * as React from 'react';
import { Alert, Button, Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { useForm, Controller } from "react-hook-form";

// You need to swap out the Auth0 client id and domain with the one from your Auth0 client.
// In your Auth0 client, you need to also add a url to your authorized redirect urls.
//
// For this application, I added https://auth.expo.io/@arielweinberger/with-auth0 because I am
// signed in as the 'arielweinberger' account on Expo and the name/slug for this app is 'with-auth0'.
//
// You can open this app in the Expo client and check your logs to find out your redirect URL.

const auth0ClientId = "vdCjaxfukPDOLrGpcwP080wD54xZxAjT";
const authorizationEndpoint = "https://dev-dp2bcbco.us.auth0.com/authorize";//dev-zt1p-cha.us.auth0.com
const clientSecret = 'wjmFZIMZAOdEm0VNU-fvKeJZcnWweY8WINQJnUeZ76LSmr2vPK_4bMUvk2ZAswHx'


const useProxy = Platform.select({ web: false, default: true });

WebBrowser.maybeCompleteAuthSession();

const redirectUri = AuthSession.makeRedirectUri({
  useProxy
});

/* console.log('aaa',redirectUri) */

export default function Login({navigation}) {
  const discovery = AuthSession.useAutoDiscovery('https://dev-dp2bcbco.us.auth0.com/authorize');
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [name, setName] = React.useState(null);

  // const [request,response, promptAsync] = AuthSession.useAuthRequest(
  //   {
  //     redirectUri,
  //     clientSecret,
  //     clientId: auth0ClientId,
  //     // id_token will return a JWT token
  //     responseType: AuthSession.ResponseType.IdToken,
  //     // retrieve the user's profile
  //     scopes: ['openid', 'profile'],
  //     extraParams: {
  //       // ideally, this will be a random value
  //       nonce: 'nonce',
  //     },
  //   },
  //   discovery
  // );
  
  //   console.log("request",request)
  //   console.log('response',response)
  // // Retrieve the redirect URL, add this to the callback URL list
  // // of your Auth0 application.
  // /* console.log(`Redirect URL: ${redirectUri}`); */
  // /* setTimeout(function(){ alert("Hello"); }, 6000); */
  

  // React.useEffect(() => {
  //   if (response) {
  //     if (response.error) {
  //       Alert.alert(
  //         'Authentication error',
  //         response.params.error_description || 'something went wrong'
  //       );
  //       return;
  //     }
  //     if (response.type === 'success') {
  //       // Retrieve the JWT token and decode it
  //       const jwtToken = response.params.id_token;
  //       const decoded = jwtDecode(jwtToken);

  //       const { name } = decoded;
  //       console.log('name adentro de usefect:', decoded)
  //       setName(name);
        
  //     }
  //   }
  // }, [response]);

  const onSubmit = data => console.log(data);

  return (
    <View>
        <Text>
        Email:
        </Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
             <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="Email"
        defaultValue=""
      />

      {errors.Email && <Text>This is required.</Text>}
      <Text>
        Contraseña:
        </Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="Contraseña"
        defaultValue=""
      />
      {errors.Contraseña && <Text>This is required.</Text>}

      <Button title="Log in" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
});
