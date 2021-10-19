import React, { useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { getContacts } from "../../store/actions/contactsActions";
import { makeTransfer } from "../../store/actions/contactsActions";

function CardContact(userId) {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user)
  const contacts = useSelector((state) => state.contacts.contacts);
  const transfer = useSelector((state) => state.history);

  const {
    control,
    handleSubmit,
    formState: { errors },

  } = useForm();

  useEffect(() => {
    dispatch(getContacts(userId));

  }, []);
  
  const dataTransfer = (data) => {
    const dataFiltered = {
      monto: data.value,
      destino: contacts.alias,
      origen: users.userId
    }
    post(dataFiltered)
  }
  function post(data){
       
    dispatch(makeTransfer(data))
   
  }

    
  return (
    <View >
      <Text >Contact Details</Text>
      <Text >Alias:{contacts.alias} </Text>
      <Text >Name:{contacts.name} </Text>
      <Text >Lastname:{contacts.lastname} </Text>
      <Text >Tipo:{contacts.tipo} </Text>
      <Text>Monto:</Text>
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