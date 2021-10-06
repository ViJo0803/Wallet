import React from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function RegisterExtended() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View>
      <Text>
        DNI:
      </Text>
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
          />
        )}
        name="DNI"
        defaultValue=""
      />

      {errors.DNI && <Text>This is required.</Text>}

      <Text>
        Email:
      </Text>
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
          />
        )}
        name="email"
        defaultValue=""
      />

      {errors.email && <Text>This is required.</Text>}

      <Text>
        Contraseña:
      </Text>
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
          />
        )}
        name="Contraseña"
        defaultValue=""
      />

      {errors.Contraseña && <Text>This is required.</Text>}

      <Text>
        Confirmar Contraseña:
      </Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
        defaultValue=""
      />

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
