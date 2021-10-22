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

function Transfers({ navigation }) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getContacts(user.idusuario));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>List of favourites</Text>
      <ScrollView>
        <Text>in ScrollView</Text>
        <View>
          {contacts?.map((el) => (
            <TouchableOpacity
              key={el.id}
              onPress={() => {
                navigation.navigate("Card Contact", { el });
              }}
            >
              <View>
                <Text style={styles.textdate}>
                  {el.name} {el.lastname}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View>
        <Pressable
          onPress={() => navigation.navigate("Add Contact")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add contact</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Transfers;
