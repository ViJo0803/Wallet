import React, { useEffect} from 'react'
import { View,Text} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import {getContacts } from "../../store/actions/contactsActions";


function CardContact(alias) {
    const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  useEffect(() => {
    dispatch(getContacts(alias));
  }, []);
    
    return (
        <View >
            <Text >Contact Details</Text>
            <Text >Alias:{contacts.alias} </Text>
            <Text >Name:{contacts.name} </Text>
            <Text >Lastname:{contacts.lastname} </Text>
            <Text >Tipo:{contacts.tipo} </Text>
            
            
        </View>
    )

}

export default CardContact