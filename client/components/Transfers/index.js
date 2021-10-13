import  React, {useState} from 'react'
import { View, Button, Text, Image } from 'react-native';
import {styles} from './styles'
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from 'react-native-gesture-handler';


function Transfers({ navigation }) {

//1) traer conctacos a partir de la cuenta id
//2) mapear los contactos en cards
//3) rederizar para hacer transferencia a un nuevo usuario(form)
//4) renderizar las cards
//5) al apretar la card salga y nos deje ingresar el momento a pasar

const dispatch= useDispatch();
const contacts= useSelector((state)=>state.contacts.fav )

console.log("aca estan los contactos", contacts)


    return (
        <FlatList        
        data={contacts.map(user=>{
           key:user.nickname
        })
        }
        
        renderItem={({item})=>
        <>
        <Text>{item.key}</Text>
        
        </>
        
        }

        />
) 
    }  

            

export default Transfers

