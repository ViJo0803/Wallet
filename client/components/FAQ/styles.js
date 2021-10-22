import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";



  
  export const styles = StyleSheet.create({

    button: {
      padding: 15,
      backgroundColor: colors.brand,
      justifyContent: "center",
      alignSelf:"center",
      alignItems:"center",
      borderRadius: 5,
      height: 60,
      width: "90%",
    },
    buttonText: {
      color: colors.primary,
      textTransform: "uppercase",
      fontSize: 18,
      fontWeight: "700",
      letterSpacing: 1.5,
    },
    
  })
