import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import { styles } from './styles';

export default function RegisterInit({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

      <TouchableOpacity style={styles.buttonlogin} onPress={handleSubmit(() => navigation.navigate("Drawer"))}>
        <Text style={styles.textlogin} >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
