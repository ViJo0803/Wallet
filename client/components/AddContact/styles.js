import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  allContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: 48,
    color: colors.brand,
    marginTop: 40,
    paddingTop: 30,
    alignSelf: "center",
  },
  button: {
    padding: 15,
    backgroundColor: colors.brand,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 60,
    width: "90%",
  },
  buttonContainer: {
    alignItems: "center",
    alignContent: "center",
    marginVertical: 60,
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
  input: {
    padding: 15,
    height: 60,
    width: "90%",
    borderWidth: 2,
    borderColor: colors.brand,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    fontSize: 18,
  },
  inputContainer: {
    width: "100%",
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
});
