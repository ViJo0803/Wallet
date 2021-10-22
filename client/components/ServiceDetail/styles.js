import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userCard: {
    display: "flex",
    alignItems: "center",
    height: "45%",
    justifyContent: "space-evenly",
  },
  userImage: {
    width: "35%",
    height: "45%",
    resizeMode: "cover",
    borderRadius: 700,
    marginTop: "8%",
  },
  messageBoxText: {
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 25,
  },
  button: {
    padding: 15,
    backgroundColor: colors.brand,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 60,
    width: "90%",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    marginVertical: "8%",
  },
  buttonText: {
    color: colors.primary,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  input: {
    padding: 15,
    width: "90%",
    borderWidth: 2,
    borderColor: colors.brand,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    fontSize: 18,
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
  },
  subtitle: {
    textTransform: "capitalize",
    fontSize: 15,
  },
  subtitleII: {
    textTransform: "capitalize",
    marginLeft: "4.7%",
    fontSize: 20,
  },

  titlescontainer: {
    alignItems: "center",
  },
});
