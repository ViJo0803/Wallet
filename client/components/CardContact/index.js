import React, { useEffect } from 'react'
import { View, Text, TextInput, Button, } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { getContacts } from "../../store/actions/contactsActions";
import { makeTransfer } from "../../store/actions/transferActions";

function CardContact({navigation, route}) {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)
  const contacts = useSelector((state) => state.contacts.contacts);
  const transfer = useSelector((state) => state.history);
  const userAccount = useSelector((state) => state.account.accounts);
 
  const{el}= route.params

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
  function post(data){

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
        <Button title="Make a trasnfer" onPress={handleSubmit(dataTransfer)} />
      </View>

    </View>

  )

}

export default CardContact