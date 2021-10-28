import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateContacts } from "../../store/actions/contactsActions";
import { Title, TouchableRipple } from "react-native-paper";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function AddContact({ route }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const user = useSelector((state) => state.user.user);

  const registerData = (data) => {
    dispatch(
      updateContacts(
        { alias: data.alias, idusuario: user.idusuario },
        user.idusuario
      )
    );
  };

  return (
    <View style={styles.allContainer}>
      <Title style={styles.title}>Alias</Title>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="alias"
          defaultValue={route.params?.data === undefined ? " " : route.params?.data}
        />
      </View>

      {errors.alias && <Text>This Alias does not exist.</Text>}

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleSubmit(registerData)}>
          <Text style={styles.buttonText}> Add Contact </Text>
        </Pressable>
      </View>
    </View>
  );
}