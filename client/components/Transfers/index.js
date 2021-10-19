import React, { useEffect} from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../store/actions/contactsActions";

function Transfers({ navigation }) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const user = useSelector((state)=> state.user.user)
  console.log("contactos @@@@")
  console.log("contactos ", contacts)
  console.log("contactos &&&&&& ", contacts)
  console.log("contactos &&&&&& ", user)
  

  useEffect(() => {
    dispatch(getContacts(user.idusuario));
  }, [dispatch]);

  return (
    
    
    <View style={styles.container}>

      <Text>List of favourites</Text>

      <ScrollView>
      
      <Text>in ScrollView</Text>
        <View>
          {contacts?.map((el) => (
            <TouchableOpacity
              key={el.id}
              onPress={() => {navigation.navigate("Card Contact", {el})}}
              >
              
              <View>
                <Text style={styles.textdate}>{el.name} {el.lastname}</Text>
                
                
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View>
        
        <Button
          title="Add Contact"
          
          onPress={() => navigation.navigate("Add Contact")}
        />
      </View>

    </View>
  );
}

export default Transfers;

