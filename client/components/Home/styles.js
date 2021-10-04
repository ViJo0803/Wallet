import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "linear-gradient(180deg, rgba(248,249,250,1) 0%, rgba(173,181,189,1) 100%)",
    flexDirection: "column",
  },
  cuentas: {
    height: "15%",
    justifyContent: "space-around",
    padding: 20,
    flexDirection: "row",
  },

  titleCuenta: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonIngresar: {
    borderRadius: 60,
    margin: "5%",
  },
  titleTransfer: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollTransfer: {
    paddingHorizontal: 10,
  },
  inputView: {
    width: "100%",
    flex: 1,
    height: 40,
    backgroundColor: "#dfe4ea",
    paddingHorizontal: 10,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textTransf: {
    backgroundColor: "#2f3542",
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userCard: {
    backgroundColor: "#2f3542",
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
  textname: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  textdate: {
    fontSize: 12,
    alignContent: "flex-end",
    color: "#fff",
  },
});
