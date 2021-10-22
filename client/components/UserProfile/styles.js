import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors.js";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  form: {
    marginTop: 30,
    marginLeft: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  image: {
    alignSelf: "center",
    marginTop: 20,
  },
  adress: {
    flexDirection: "row",
  },
  text: {
    marginTop: 3,
    alignSelf: "flex-start",
    fontSize: 18,
    marginLeft: 13,
    color: colors.lightGray,
  },
  cvu: {
    fontSize: 15,
    color: colors.primary,
    alignSelf: "center",
    marginRight: "25%",
    fontWeight: "700",
  },
  title: {
    fontSize: 20,
    color: colors.brand,
    marginLeft: 15,
    fontWeight: "700",
  },
  caption: {
    marginTop: 3,
    padding: 2,
    fontSize: 15,
    lineHeight: 15,
    color: colors.lightGray,
    marginRight: "10%",
  },
  buttonText: {
    marginTop: 2,
    fontSize: 15,
    color: colors.primary,
    marginRight: 35,
  },
  icon: {
    marginLeft: 15,
  },
  wrapperbox: {
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.brand,
    width: "95%",
    alignSelf: "center",
    borderRadius: 5,
    shadowColor: colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 18,
  },
  infobox: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  menuItem: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 2,
  },
  menuItemText: {
    color: colors.tertiary,
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  qrContainer: {
    marginVertical: 25,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  qr: {
    marginTop: 20,
    paddingVertical: 8,
  },
  qrText: {
    fontSize: 18,
    color: colors.lightGray,
    marginBottom: 10,
  },
});
