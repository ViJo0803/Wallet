import React from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/actions/userActions";

export default function Register({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.user);

  const registerData = (data) => {
    const dataFiltered = {
      idusuario: state.idusuario,
      nombre: data.nombre,
      apellidos: data.apellidos,
      mail: data.mail,
      direccion: data.direccion,
      nickname: data.nickname,
      dni: data.dni,
      telefono: data.telefono,
      foto: state.foto,
      codigo_postal: data.codigo_postal,
    };

    post(dataFiltered);
  };

  function post(data) {
    dispatch(updateUser(data));
    navigation.navigate("Home");
  }

  return (
    <View>
      <Text>Nombre:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="nombre"
        defaultValue={state.nombre}
      />

      {errors.nombre && <Text>This is required.</Text>}

      <Text>Apellido:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="apellidos"
        defaultValue={state.apellidos}
      />

      {errors.apellidos && <Text>This is required.</Text>}

      <Text>mail:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="mail"
        defaultValue={state.mail}
      />
      {errors.mail && <Text>This is required.</Text>}

      <Text>nick:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="nickname"
        defaultValue={state.nickname}
      />
      {errors.mail && <Text>This is required.</Text>}

      <Text>DNI:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="dni"
        defaultValue={state.dni}
      />

      {errors.dni && <Text>This is required.</Text>}

      <Text>Telefono:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="telefono"
        defaultValue={state.telefono}
      />

      {errors.telefono && <Text>This is required.</Text>}

      <Text>Direccion:</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="direccion"
        defaultValue={state.direccion}
      />

      {errors.direccion && <Text>This is required.</Text>}

      <Text>Codigo Postal:</Text>
      <Controller
        control={control}
        rules={{ maxLength: 100 }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="codigo_postal"
        defaultValue={state.codigo_postal}
      />
      {errors.codigo_postal && <Text>This is required.</Text>}

      <Button title="Register" onPress={handleSubmit(registerData)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
});
