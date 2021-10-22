import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
  },
  buttonGrid: {
    height: "68%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  buttonCard: {
    marginVertical: "10%",
    marginHorizontal: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cuentas: {
    height: "15%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  welcome: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.primary,
  },
  title: {
    fontWeight: "700",
    fontSize: 25,
    textTransform: "uppercase",
    color: colors.primary,
  },
  buttonIngresar: {
    margin: "5%",
  },
  titleTransfer: {
    fontWeight: "bold",
  },
  scrollTransfer: {
    width: "100%",
  },
  inputView: {
    width: "100%",
    backgroundColor: colors.brand,
    display: "flex",
    height: "27%",
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textTransf: {
    backgroundColor: "#2f3542",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userCard: {
    width: "100%",
    backgroundColor: "#2f3542",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textname: {
    fontWeight: "500",
    color: "#fff",
  },
  textdate: {
    alignContent: "flex-end",
    color: "#fff",
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 10, width: 6 }, // IOS
    shadowOpacity: 6, // IOS
    shadowRadius: 6, //IOS
    backgroundColor: '#fff',
    elevation: 8, // Android
    height:100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius:8  
},
});
