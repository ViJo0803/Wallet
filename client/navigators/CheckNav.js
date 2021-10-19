import React, { useEffect, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerBar from "../components/Drawer";
import NewRegisterExt from "../loginComponents/NewRegisterExt";
import { useSelector, useDispatch } from "react-redux";
import { CredentialsContext } from "../loginComponents/CredentialsContext";
import { getUser } from "../store/actions/userActions";

const Stack = createStackNavigator();

export default function CheckNav() {
  const dispatch = useDispatch();

  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { email } = storedCredentials;

  useEffect(() => {
    dispatch(getUser(email));
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="Drawer"
          component={DrawerBar}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="NewRegisterExt"
          component={NewRegisterExt}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
