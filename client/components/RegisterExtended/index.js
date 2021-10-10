import React from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {createUser} from "../../store/actions/userActions"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";

export default function RegisterExtended({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    
  } = useForm();
 

  const dispatch = useDispatch();
  const MY_STORAGE_KEY = "token";

  let token = useSelector((state) => state.users.jwtToken);
  console.log(" here is the token: ", token);

  let json = token.payload;
  console.log("this is the json ", json);
  const nick= json.nickname;
  const foto= json.picture;

  const mail =
    json.sub.split("|")[0] === "google-oauth2"
      ? json.nickname + "@gmail.com"
      : json.name;

  console.log("this is the mail ", mail);

  const registerData =  (data) => {
    console.log("in register data", data);
    console.log("json :", json);

    const dataFiltered = {
      nombre: data.nombre,
      apellidos: data.apellidos,
      mail:mail,        
      direccion: data.direccion,
      nickname: nick,
      dni: data.dni,
      telefono: data.telefono,
      foto: foto,
      codigo_postal: data.codigo_postal,
    };

    post(dataFiltered)

    //var res = await axios.post('http://localhost:3001/usuario', dataFiltered )
    //console.log("respuesta del post",res)
    //navigation.navigate("Drawer")
  };

  function post(data){
    console.log("in handle submit",data)
    dispatch(createUser(data))
    navigation.navigate("Drawer")
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
        defaultValue=""
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
        defaultValue=""
      />

      {errors.apellidos && <Text>This is required.</Text>}

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
        defaultValue=""
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
        defaultValue=""
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
        defaultValue=""
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
        defaultValue=""
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
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
