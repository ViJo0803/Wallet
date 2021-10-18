import React, { useEffect} from 'react'
import { View,Text} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import {getContacts } from "../../store/actions/contactsActions";


function CardContact(alias) {
  console.log("props de cardcontact; " + alias)
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  console.log('state contacts: ' + contacts[0].alias)

  useEffect(() => {
    dispatch(getContacts(alias));
    console.log("este es la prop de getcontacts: " + alias)
  }, [alias, dispatch]);
    
    return (
        <View >
            {contacts?.map((el)=> (
               <View>
               <Text >Contact Details</Text>
               <Text >Alias:{el.alias} </Text>
               <Text >Name:{el.name} </Text>
               <Text >Lastname:{el.lastname} </Text>
               <Text >Tipo:{el.tipo} </Text>
               </View>
            ))}
            
            
            
        </View>
        
    )

}

export default CardContact