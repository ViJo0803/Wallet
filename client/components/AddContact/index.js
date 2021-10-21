import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateContacts } from "../../store/actions/contactsActions"




export default function AddContact({ route }) {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts)
    const user = useSelector((state) => state.user.user);


    const registerData = (data) => {

        dispatch(updateContacts({ alias: data.alias, idusuario: user.idusuario }, user.idusuario))
    }

    return (
        <View>
            <Text>Alias:</Text>
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
                name="alias"
                defaultValue={`${route.params?.data}`}
            />

            {errors.alias && <Text>This is required.</Text>}

            <Button title="Add" onPress={handleSubmit(registerData)} />
        </View>
    );
}

