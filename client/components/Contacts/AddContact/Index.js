import React, { useState } from 'react'
import { View, TextInput, Text, ScrollView, Alert, TouchableOpacity, Button } from 'react-native'
import { styles } from './styles'

export default function AddContact() {

    const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useState([{ name: 'uno', phone: 'telefono' }, { name: 'dos', phone: 'telefono' }]);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Search for contacts...'
                textContentType="name"
                style={styles.input}
                onChange={() => {
                    setSearchText({ name: 'uno', phone: 'telefono' });
                }}
            />
            <Button
                title='Search'
                onPress={() => { setUsers(searchText), console.log(users) }}
            />

            {users ? (
                <View>
                    {(users?.map((e) => (
                        <View>
                            <Text>{e.name}</Text>,
                            <TouchableOpacity
                                key={e.name}
                                style={styles.userCard}
                                title='Add'
                                onPress={() => {
                                    Alert.alert(
                                        `${e.name} is now your contact`
                                    );
                                }} />
                        </View>
                    )))}
                </View>) : <View>
                <Text>No user found</Text>
            </View>}
        </View>
    )
}

