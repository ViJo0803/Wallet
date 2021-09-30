import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function RegisterInit() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Usuario"
          />
        )}
        name="firstName"
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry={true}
            placeholder="Contraseña"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
        defaultValue=""
      />

      <TouchableOpacity style={styles.buttonlogin}>
        <Text style={styles.textlogin} onPress={handleSubmit(onSubmit)}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    color: "#808e9b",
  },
  buttonlogin: {
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: "#3395FF",
    marginTop: 20,
  },
  textlogin: {
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "center",
    color: "#fff",
  },
});
