import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/actions/userActions";
import { styles } from "./styles";

export default function Loading({ navigation }) {
  const dispatch = useDispatch();
  let token = useSelector((state) => state.user.jwtToken);
  let json = token.payload;
  const mail =
    json.sub.split("|")[0] === "google-oauth2"
      ? json.nickname + "@gmail.com"
      : json.name;

  useEffect(() => {
    dispatch(getUser(mail));
  }, []);

  const state = useSelector((state) => state.user.user);
  Object.keys(state).length !== 0
    ? navigation.navigate("Drawer" , {data: state})
    : navigation.navigate("RegisterExtended");

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
