import React, {useContext} from "react";

//colors
import { Colors } from "../loginComponents/styles";
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


// screens
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import RegisterExntended from "../screens/RegisterExntended";
import CredentialsNav  from "../loginComponents/CredentialsNav";

// components
import LandingPage from "../components/LandingPage/index";
import DrawerBar from "../components/Drawer/index";


const Stack = createStackNavigator();


// credentials context
import { CredentialsContext } from "../loginComponents/CredentialsContext";

// <--------------- ROOT Stack (contiene a LoginStack y MainStack ) --------------->
function RootStack() {
  
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: "red" }}>
          <Stack.Navigator
            initialRouteName={'LoginStack' || "LandingPage"}>
            {!storedCredentials ? (
              <Stack.Screen
                name="LoginStack"
                component={LoginStack}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen
                name="CredentialsNav"
                component={CredentialsNav}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
}



function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterExtended"
        component={RegisterExntended}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
