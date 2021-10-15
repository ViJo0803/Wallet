// import * as AuthSession from "expo-auth-session";
// import * as WebBrowser from "expo-web-browser";
// import jwtDecode from "jwt-decode";
// import * as React from "react";
// import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
// import { useDispatch } from "react-redux";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getToken } from "../../store/actions/userActions.js";


// const auth0ClientId = "EAfKmiG5AKNeoFyCt9lpMSgtn76gjYW1";
// const authorizationEndpoint = "https://dev-xfog4lys.us.auth0.com/authorize";

// const useProxy = Platform.select({ web: false, default: true });

// const MY_STORAGE_KEY = "token";

// const redirectUri = AuthSession.makeRedirectUri({
//   useProxy,
// });


// export default function Login({ navigation }) {
//   const dispatch = useDispatch();
//   const discovery = AuthSession.useAutoDiscovery(authorizationEndpoint);

//   const [name, setName] = React.useState(null);
//   const [request, response, promptAsync] = AuthSession.useAuthRequest(
//     {
//       redirectUri,
//       clientId: auth0ClientId,
//       responseType: AuthSession.ResponseType.IdToken,
//       scopes: ["openid", "profile"],
//       extraParams: {
//         nonce: "nonce",
//       },
//       prompt: "login"
//     },
//     discovery
//   );

//   WebBrowser.maybeCompleteAuthSession();

//   React.useEffect(() => {
//     if (response) {
//       if (response.error) {
//         Alert.alert(
//           "Authentication error",
//           response.params.error_description || "something went wrong"
//         );
//         return;
//       }

//       if (response.type === "success") {
//         const jwtToken = response.params.id_token;
//         const decoded = jwtDecode(jwtToken);
//         dispatch(getToken(decoded));
//         const { name } = decoded;
//         setName(name);
//       }
//     }
//   }, [response]);

//   return (
//     <View style={styles.container}>
//       {name ? (
//         (navigation.navigate("Loading"),
//         (<Button title="Log out" onPress={() => setName(null)} />))
//       ) : (
//         <Button
//           disabled={!request}
//           title="Log in with Auth0"
//           onPress={() => {
//             promptAsync({ useProxy });
//           }}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     textAlign: "center",
//     marginTop: 40,
//   },
// });
