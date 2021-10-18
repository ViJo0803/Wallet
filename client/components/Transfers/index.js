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
import { getAllContacts } from "../../store/actions/contactsActions";

function Transfers({ navigation }) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, []);

  return (
    
    
    <View style={styles.container}>

      

      <ScrollView>
      
        <View>
          {contacts?.map((el, i) => (
            <TouchableOpacity
              key={el.alias}
              onPress={() => {navigation.navigate("CardContact", {sortBy: 'el.alias'} )}}
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
          title="Add"
          
          onPress={() => navigation.navigate("AddContact")}
        />
      </View>

    </View>
  );
}

export default Transfers;

