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
    marginTop: "15%",
    fontSize: 30,
    height: 50,
    alignSelf: "center",
    textTransform: "uppercase",
    fontWeight: "700",
    marginRight: "5%",
  },
  contact_box: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    marginRight: 10,
    marginLeft: 7,
  },
  icon: {
    color: colors.lightGray,
  },
  contact: {
    width: "80%",
    marginLeft: 5,
    fontSize: 30,
    color: colors.brand,
  },
  button_container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.brand,
    width: "90%",
    borderRadius: 5,
    marginLeft: "5%",
    marginBottom: "5%",
    shadowColor: colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 8.0,
    elevation: 10,
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
    marginLeft: 10,
    color: colors.primary,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  addIcon: {
    color: colors.primary,
  },
});
