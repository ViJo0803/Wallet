import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "30%",
  },
  button: {
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
    color: colors.primary,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
});
