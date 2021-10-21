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
  },
  userImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    padding: 1,
    borderRadius: 50,
    marginTop: 100,
  },
  messageBoxText: {
    fontWeight: "700",
    textTransform: "uppercase",
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
    marginVertical: 60,
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
    display: "flex",
    alignItems: "center",
  },
  subtitle: {
    textTransform: "capitalize",
  },
  subtitleII: {
    textTransform: "capitalize",
    marginVertical: 5,
    marginLeft: 20,
  },
});
