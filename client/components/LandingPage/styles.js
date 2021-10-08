import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    marginTop: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#5C5C5C"
  },
  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  plainText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#5C5C5C"
  },
  buttonContainer: {
    width: "80%",
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: "#80c590",
  },
  buttonText: {
    padding: "0 15px",
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "center",
    color: "#fff"
  },
  logo: {
    width: '60%',
    height: '30%'
  }
});
