import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./styles";
import { makeTransfer } from "../../store/actions/transferActions";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../store/actions/contactsActions";
import { Title, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Transfers({ navigation }) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getContacts(user.idusuario));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Title style={styles.title}> Your Contacts </Title>

      <ScrollView>
        <View style={styles.list}>
          {contacts?.map((el) => (
            <TouchableOpacity
              key={el.id}
              onPress={() => {
                navigation.navigate("Card Contact", { el });
              }}
            >
              <View style={styles.contact_box}>
                <Icon style={styles.icon} name="account" size={40} />
                <Text style={styles.contact}>
                  {el.name} {el.lastname}
                </Text>
                <Icon
                  name="arrow-right-bold-circle-outline"
                  style={styles.icon}
                  size={40}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View>
        <TouchableRipple onPress={() => navigation.navigate("Add Contact")}>
          <View style={styles.button_container}>
            <Icon
              name="account-multiple-plus"
              size={40}
              style={styles.addIcon}
            />
            <Title style={styles.buttonText}>Add Contact</Title>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
}

export default Transfers;
