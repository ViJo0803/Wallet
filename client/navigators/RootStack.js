import React from "react";

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
import Inicio from "../screens/Inicio";

// components
import TabNav from "../components/TabNav";
import LandingPage from "../components/LandingPage";
import Home from "../components/Home/index";
import UserProfile from "../components/UserProfile/index";
import Accounts from "../components/Accounts/index";
import Statistics from "../components/Statistics/index";

const Stack = createStackNavigator();


// credentials context
import { CredentialsContext } from "../loginComponents/CredentialsContext";

// <--------------- ROOT Stack (contiene a LoginStack y MainStack ) --------------->
function RootStack() {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: "red" }}>
          <Stack.Navigator>
            {!storedCredentials ? (
              <Stack.Screen
                name="LoginStack"
                component={LoginStack}
                options={{ headerShown: false }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Main"
                  component={MainStack}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
}
// <--------------- ROOT Stack (contiene a LoginStack y MainStack ) --------------->

// <--------------------- LOGIN Stack --------------------->
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
        name="RegisterExntended"
        component={RegisterExntended}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
// <--------------------- LOGIN Stack --------------------->


// <--------------------- MAIN Stack --------------------->

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "indigo",
          shadowColor: "indigo",
          elevation: 0,
        },
        headerTitleStyle: { color: "white", fontSize: 16 },
        // headerRight: () => <Ionicons name='ios-log-out' color='white' size={30} style={{ marginHorizontal: 15 }}></Ionicons>,
        // headerLeft: () => <Ionicons name='ios-menu' color='white' size={30} style={{ marginHorizontal: 15 }} onPress={() => props.navigation.openDrawer()}></Ionicons>,
      }}
    >
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User Profile" component={UserProfile} />
      <Stack.Screen name="Accounts" component={Accounts} />
      
      
    </Stack.Navigator>
  );
}

export default RootStack;
