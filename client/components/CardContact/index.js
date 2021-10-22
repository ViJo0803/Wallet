import React, { useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { getContacts } from "../../store/actions/contactsActions";
import { makeTransfer } from "../../store/actions/transferActions";
import { Title, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";

function CardContact({ navigation, route }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const contacts = useSelector((state) => state.contacts.contacts);
  const transfer = useSelector((state) => state.history);
  const userAccount = useSelector((state) => state.account.accounts);

  const { el } = route.params;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dataTransfer = (data) => {
    const dataFiltered = {
      monto: data.monto,
      destino: el.favorite_account_id,
      origen: userAccount[0].idcuentas,
      alias: el.alias,
      fecha: "2021-10-13 14:58:21.706-03",
    };
    dispatch(makeTransfer(dataFiltered, user.idusuario));
  };
  function post(data) {}

  return (
    <View>
      <View>
        <Title style={styles.header}> Contact Details </Title>
        <View style={styles.contactCard}>
          <View>
            <Text style={styles.fields}>
              Name: {el.name} {el.lastname}
            </Text>
          </View>
          <View>
            <Text style={styles.fields}>Alias: {el.alias} </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.fields}>Monto: </Text>
            <View>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                  />
                )}
                name="monto"
              />
              {errors.monto && <Text>This is required.</Text>}
            </View>
          </View>
        </View>
      </View>

      <View>
        <Button
          title="Transfer"
          style={styles.buton}
          onPress={() => {
            Alert.alert("Make Transfer", "Are you sure?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: handleSubmit(dataTransfer) },
            ]);
          }}
        />
      </View>
    </View>
  );
}

export default CardContact;
