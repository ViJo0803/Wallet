import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";




export const styles = StyleSheet.create({

  question: {
    marginTop: "2%",
    alignSelf: "center",
    color:colors.brand,
  },
  answer: {
    textAlign: 'justify',
    margin: "2%"
  },
  fullContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  button: {
    marginVertical: "5%",
    padding: 15,
    backgroundColor: colors.brand,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
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
