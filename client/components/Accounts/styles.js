import { StyleSheet } from 'react-native';

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
      flexDirection: "row"
    },
  
    titleCuenta: {
      fontWeight: "bold"
    },
    buttonIngresar: {
      margin: "5%"
    },
    titleTransfer: {
      fontWeight: "bold",
    },
    scrollTransfer: {
      width: "100%"
    },
    inputView: {
      width: "100%",
      backgroundColor: "#99d98c",
      display: "flex",
    },
    textTransf: {
      backgroundColor: "#2f3542",
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    userCard: {
      width: "100%",
      backgroundColor: "#2f3542",
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    textname: {
      fontWeight: "500",
      color: "#fff"
    },
    textdate: {
      alignContent: "flex-end",
      color: "#fff"
    }
  });