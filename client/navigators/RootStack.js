import React from "react";

//colors
import { colors } from "../utils/colors";
const { lightGray, brand, primary, tertiary, secondary } = colors;

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// screens
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import RegisterExntended from "../screens/RegisterExntended";
import CheckNav from "./CheckNav";
import ServiceDetail from "../components/ServiceDetail/index.js";
// components
import FAQ from "../components/FAQ";

// credentials context
import { CredentialsContext } from "../loginComponents/CredentialsContext";

// <--------------- ROOT Stack (contiene a LoginStack y MainStack ) --------------->
function RootStack() {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: "red" }}>
          <Stack.Navigator initialRouteName={"LoginStack" || "LandingPage"}>
            {!storedCredentials ? (
              <Stack.Screen
                name="LoginStack"
                component={LoginStack}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen
                name="CheckNav"
                component={CheckNav}
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
    <Stack.Navigator>
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
      <Stack.Screen name="F.A.Q." component={FAQ} options={{}} />
    </Stack.Navigator>
  );
}

export default RootStack;
