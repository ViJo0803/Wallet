import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const styles = StyleSheet.create({

header:{
marginTop:30,
paddingTop:15,
justifyContent:"center",
alignSelf:"center",
fontSize:45,
color:"#5271FF",

},
contactCard:{
backgroundColor:"#FFFFFF",
marginLeft:15,
borderRadius: 10

},

fields:{
    borderBottomColor:"#E7F1E5",
    borderBottomWidth:1,
    marginLeft:15,
    marginTop:10,
    fontSize:18,
    color:"#232020"
  
},
buton:{
    padding: 15,
    backgroundColor: "#5271FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 20,
    height: 90,
    
},
inputContainer:{
    flexDirection:"row",
    alignItems:"center",
   
   

   
},
butonContainer:{
marginTop:30,
},
buttonText: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
input:{
    marginTop:11,
    fontSize:30
}


})