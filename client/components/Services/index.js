import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import axios from "axios";
import { styles } from './styles'

function Services() {

    const [searchText, setSearchText] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        StatusBar.setBarStyle("dark-content", false);
        axios.get("https://randomuser.me/api/?results=150").then(({ data }) => {
            setUsers(data.results);
        });
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.text}>Services component currently on building stage</Text>
                <View style={styles.searchView}>
                    <View style={styles.inputView}>
                        <TextInput
                            defaultValue={searchText}
                            style={styles.input}
                            placeholder="Search"
                            textContentType="name"
                            onChangeText={(text) => {
                                setSearchText(text);
                                if (text === "") {
                                    return setFilteredUsers([]);
                                }
                                const filtered_users = users.filter((user) =>
                                    user.name.first.toLowerCase().startsWith(text.toLowerCase())
                                );
                                setFilteredUsers(filtered_users);
                            }}
                            returnKeyType="search"
                        />
                        {searchText.length === 0 ? (
                            <TouchableOpacity>
                                <Icon name="search" size={24} color="#333" />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                onPress={() => {
                                    setSearchText("");
                                    setFilteredUsers([]);
                                }}
                            >
                                <Icon name="cancel" size={24} color="#333" />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                {filteredUsers ? (
                    <ScrollView>
                        {filteredUsers?.map((user) => (
                            <TouchableOpacity
                                key={user.name.first + user.phone}
                                style={styles.userCard}
                                onPress={() => {
                                    Alert.alert(
                                        `${user.name.first} ${user.name.last}`,
                                        `You can call me at ${user.phone}`
                                    );
                                }}
                            >
                                <Image
                                    style={styles.userImage}
                                    source={{ uri: user.picture?.large }}
                                />
                                <View style={styles.userCardRight}>
                                    <Text
                                        style={{ fontSize: 18, fontWeight: "500" }}
                                    >{`${user.name.first} ${user.name.last}`}</Text>
                                    <Text>{`${user?.phone}`}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                        <View style={{ height: 50 }}></View>
                    </ScrollView>
                ) : searchText.length > 0 ? (
                    <View style={styles.messageBox}>
                        <Text style={styles.messageBoxText}>No user found</Text>
                    </View>
                ) : (
                    <View style={styles.messageBox}>
                        <Text style={styles.messageBoxText}>Search for users</Text>
                    </View>
                )}
            </View>
        </View>
    );
}



export default Services