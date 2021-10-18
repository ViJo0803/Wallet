import React, { useEffect,  } from "react";
import {
  View,
  Button,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
// import { styles } from "./styles";
import { makeTransfer } from "../../store/actions/transferActions";
import { useSelector, useDispatch } from "react-redux";



function Transfers({ navigation }) {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const origen = useSelector((state) => state.account.accounts[0].idcuentas);

  console.log("origen", origen)

  const onSubmit = (data) => {
    const dataFiltered = {
      destino: data.Destino,
      origen: origen,
      monto: parseInt(data.Monto),
      fecha: "2021-10-13 14:58:21.706-03",
    };

    dispatch(makeTransfer(dataFiltered))
  
  }

  return (
    <View style={styles.container}>
      <Text>Destino:</Text>

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
        name="Destino"
        defaultValue=""
      />

      {errors.Destino && <Text>This is required.</Text>}

      <Text>Monto:</Text>
      <Controller
        control={control}
        rules={{
          required: true,
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
        name="Monto"
        defaultValue=""
      />
      {errors.Monto && <Text>This is required.</Text>}

      <Button title="Transferir" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default Transfers;