import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "column"
  },
  cuentas: {
    height: "15%",
    justifyContent: "space-around",
    padding: 20,
    flexDirection: "row"
  },

  titleCuenta: {
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonIngresar: {
    borderRadius: 60,
    margin: "5%"
  },
  titleTransfer: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  scrollTransfer: {
    paddingHorizontal: 10,
    width: "100%"
  },
  inputView: {
    width: "100%",
    backgroundColor: "#99d98c",
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: "flex",
    paddingVertical: 10
  },
  textTransf: {
    backgroundColor: "#2f3542",
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  userCard: {
    width: "100%",
    backgroundColor: "#2f3542",
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100
  },
  userCardRight: {
    paddingHorizontal: 10
  },
  textname: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff"
  },
  textdate: {
    fontSize: 12,
    alignContent: "flex-end",
    color: "#fff"
  },
  image: {
    width: '30%',
    height: '30%',
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
},
});
