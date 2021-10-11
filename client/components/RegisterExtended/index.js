import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, Image, Platform} from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';


function ImagePickerUser() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Seleccione una imagen" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}


export default function RegisterExtended({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const MY_STORAGE_KEY = 'token'

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(MY_STORAGE_KEY);
      if (value !== null) {
        var stringToJson = JSON.parse(value)
        return stringToJson
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const registerData = async (data) => {
    console.log(data)
    await AsyncStorage.mergeItem(MY_STORAGE_KEY, JSON.stringify(data))
    let json = await retrieveData()
    console.log("json", json)

    const dataFiltered = {
      nombre: json.nombre,
      apellidos: json.apellidos,
      mail: json.sub.split("|")[0] === "google-oauth2" ? json.nickname + "@gmail.com" : json.name,
      hash: json.direccion,
      nickname: json.nickname,
      dni: json.dni,
      telefono: json.telefono,
      foto: json.picture,
      codigo_postal: json.codigo_postal,
    }
    console.log('datafiltered: ', dataFiltered)
    var res = await axios.post('http://localhost:3001/user', dataFiltered)
    console.log("respuesta del post", res)
    navigation.navigate("Drawer")
  }


  return (
    <View>

      <Text>
        Nombre:
      </Text>
      <Controller control={control} rules={{ required: true, }} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />)}
        name="nombre"
        defaultValue=""
      />

      {errors.nombre && <Text>This is required.</Text>}

      <Text>
        Apellido:
      </Text>
      <Controller control={control} rules={{ required: true, }} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />)}
        name="apellidos"
        defaultValue=""
      />

      {errors.apellidos && <Text>This is required.</Text>}

      <Text>
        DNI:
      </Text>
      <Controller control={control} rules={{ required: true, }} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />)}
        name="dni"
        defaultValue=""
      />

      {errors.dni && <Text>This is required.</Text>}

      <Text>
        Telefono:
      </Text>
      <Controller control={control} rules={{ required: true, }} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />)}
        name="telefono"
        defaultValue=""
      />

      {errors.telefono && <Text>This is required.</Text>}

      <Text>
        Direccion:
      </Text>
      <Controller control={control} rules={{ required: true, }} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />)}
        name="direccion"
        defaultValue=""
      />

      {errors.direccion && <Text>This is required.</Text>}

      <Text>
        Codigo Postal:
      </Text>
      <Controller control={control} rules={{ maxLength: 100, }} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />)}
        name="codigo_postal"
        defaultValue=""
      />
      {errors.codigo_postal && <Text>This is required.</Text>}

      <Text>
        Foto Perfil:
      </Text>
      
      <ImagePickerUser />

      {/* <Image 
        style={styles.imgStyle}
        source={ require('')}
      />
      <Controller control={control} rules={{ required: true, }} render={({ field: { onChange, onBlur, value } }) => (
        <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />)}
        name="foto"
        defaultValue=""
      /> */}

      
      <Button title="Register" onPress={handleSubmit(registerData)} />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40
  },
  imgStyle: {
    width: 200,
    height: 200,
    marginTop: 30,
  }
});
