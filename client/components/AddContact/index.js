import React from 'react'
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateContacts } from "../../store/actions/contactsActions"




export default function AddContact() {

    const {
        control,
        handleSubmit,
        formState: { errors },

    } = useForm();


    const dispatch = useDispatch();
    const state = useSelector(state => state.contacts.contacts)
    console.log(" here is the id: ", state.idusuario);

    const registerData = (data) => {
        console.log("in register data", data);


        const dataFiltered = {
            alias,
            tipo,
            name: contacts.name,
            lastname: contacts.apellidos,
            favorite_account_id,
            usuarioIdusuario,
        };

        post(dataFiltered)
    }


    function post(data) {

        console.log("in handle submit", data)
        dispatch(updateContacts(data))
        // navigation.navigate("TransferIndex")
    }

    return (
        <View>
            <Text>Name:</Text>
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
                name="name"
                defaultValue={state.name}
            />

            {errors.name && <Text>This is required.</Text>}

            <Text>Lastname:</Text>
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
                name="lastname"
                defaultValue={state.lastname}
            />

            {errors.lastname && <Text>This is required.</Text>}

            <Button title="Add" onPress={handleSubmit(registerData)} />
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     title: {
//         textAlign: "center",
//     },
// });