import React from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { makeTransfer } from "../../store/actions/transferActions";

function CardContact({ navigation, route }) {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)
  const userAccount = useSelector((state) => state.account.accounts);

  const { el } = route.params

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
    }
    dispatch(makeTransfer(dataFiltered, user.idusuario))
  }
  function post(data) {

  }

  return (
    <View >
      <Text >Contact Details</Text>
      <Text >Name: {el.name} {el.lastname}</Text>
      <Text >Alias: {el.alias} </Text>
      <Text >Tipo: {el.tipo} </Text>
      <Text>Monto: </Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput

            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="monto"

      />

      {errors.monto && <Text>This is required.</Text>}

      <View>

        <Button title="Transfer" onPress={() => {

          Alert.alert(
            "Make Transfer",
            "Are you sure?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: handleSubmit(dataTransfer) }
            ]
          );

        }} />
      </View>

    </View>

  )

}

export default CardContact