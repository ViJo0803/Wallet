import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: colors.brand,
    display: "flex",
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  buttonCardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginRight: "7%",
    marginLeft: "7%",
    paddingBottom: 70,
    alignContent: "center",
    justifyContent: "space-between",
  },
  shortcuts: {
    fontWeight: "700",
    fontSize: 13,
    textTransform: "uppercase",
    color: colors.tertiary,
    marginLeft: 18,
    marginTop: "10%",
    marginBottom: 10,
    marginLeft: "7%",
  },
  buttonCard: {
    width: "45%",
    padding: "5%",
    shadowColor: colors.tertiary, // IOS
    shadowOffset: { height: 10, width: 6 }, // IOS
    shadowOpacity: 6, // IOS
    shadowRadius: 6, //IOS
    backgroundColor: colors.secondary,
    elevation: 8, // Android
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "space-around",
    borderRadius: 5,
    margin: 5,
  },
  welcome: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.primary,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.green,
    marginTop: 10,
  },
  balance: {
    fontWeight: "700",
    fontSize: 35,
    textTransform: "uppercase",
    color: colors.green,
  },

  shortcutsTitle: {
    fontWeight: "400",
    fontSize: 12,
    textTransform: "uppercase",
    color: colors.tertiary,
    textAlign: "center",
  },
});
