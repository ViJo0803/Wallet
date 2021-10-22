import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  cuentas: {
    marginTop: 30,
    padding: 10,
    backgroundColor: colors.brand,
    height: "20%",
    justifyContent: "space-around",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: "90%",
    shadowColor: colors.tertiary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  saldo: {
    fontSize: 80,
    color: colors.primary,
  },
  titleCuenta: {
    fontWeight: "700",
    color: colors.primary,
    fontSize: 20,
    marginTop: 5,
    textTransform: "uppercase",
  },
  buttonIngresar: {
    margin: "5%",
  },
  titleTransfer: {
    fontWeight: "700",
  },
  scrollTransfer: {
    width: "100%",
    marginTop: 60,
  },
  inputView: {
    width: "100%",
    backgroundColor: colors.secondary,
    display: "flex",
  },
  titles: {
    marginTop: 20,
    width: "90%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: colors.brand,
  },

  userCard: {
    width: "100%",
    backgroundColor: colors.primary,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    alignContent: "space-between",
    justifyContent: "space-between",
    padding: 10,
  },
  textname: {
    fontSize: 25,
    color: colors.brand,
    padding: 5,
  },
  textdate: {
    alignContent: "flex-end",
    color: colors.tertiary,
    fontSize: 20,
    padding: 5,
  },
  box: {
    paddingTop: 8,
    flexDirection: "row",
    alignContent: "center",
  },
});
