import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Alert,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
// import { styles } from "./styles";
import { makeTransfer } from "../../store/actions/transferActions";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-native-elements";
import axios from "axios";
import { getContacts } from "../../store/actions/contactsActions";

function Transfers({ route }) {
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  console.log("routes", route);

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const origen = useSelector((state) => state.account.accounts[0].idcuentas);

  console.log("origen", origen);

  const onSubmit = (data) => {
    const dataFiltered = {
      destino: data.Destino,
      origen: origen,
      monto: parseInt(data.Monto),
      fecha: "2021-10-13 14:58:21.706-03",
    };

    dispatch(makeTransfer(dataFiltered));
  };

  useEffect(() => {
    StatusBar.setBarStyle("dark-content", false);
    // // dispatch(getContacts(route.params.user.idusuario))

    axios.get("https://randomuser.me/api/?results=150").then(({ data }) => {
      //aca va la accion que se trae los contactos
      setUsers(data.results); //aca me los guardo en el estado.
    });
  }, []);

  const lista = useSelector((state) => state.contacts.contacts);
  console.log("lista de amigos", lista);

  return (
    <View style={styles.container}>
      <View>
        <Text>Destino:</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="Destino"
          defaultValue=""
        />

        {errors.Destino && <Text>This is required.</Text>}

        <Text>Monto:</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="Monto"
          defaultValue=""
        />
        {errors.Monto && <Text>This is required.</Text>}

        <Button title="Transferir" onPress={handleSubmit(onSubmit)} />
      </View>

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
  );
}

export default Transfers;
