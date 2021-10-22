import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";



  
  export const styles = StyleSheet.create({
  
    container: {
      height: "100%",
      width: "100%",
  
    },
    list: {
      marginTop: 30,
    },
    title: {
      marginTop: 15,
      fontSize: 30,
      marginLeft: 15,
      paddingTop: 3,
      height: 50,
      alignSelf:"center"
    },
    contact_box:{
      alignItems: "center",
      flexDirection: "row",
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderBottomColor: "#9CA3AF",
      borderBottomWidth: 1,
    },
    icon:{
        color:"#9CA3AF", 
    },
    contact: {
      width:"80%",
      marginLeft: 4,
      fontSize: 30,
      color: "#5271FF",
    },
  button_container:{
      alignItems: "center",
      flexDirection: "row",
      justifyContent:"center",
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: colors.brand,
  },
  button:{
      padding: 15,
      backgroundColor: colors.brand,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginVertical: 5,
      marginHorizontal: 20,
      height: 60,
   
  },
  buttonText: {
    marginLeft:10,
    color: colors.primary,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  addIcon:{
    color:colors.primary
  }
  
  
 
});
