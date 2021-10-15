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
    fontWeight: "bold",
    alignSelf: "center",
    color: "#5C5C5C"
  },
  button: {
    width: "100%",
    margin: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  plainText: {
    fontWeight: "bold",
    padding: "1%",
    color: "#5C5C5C"
  },
  buttonContainer: {
    width: "80%",
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: "#80c590",
    marginTop: 5
  },
  buttonText: {
    padding: "0 15px",
    fontWeight: "500",
    alignSelf: "center",
    color: "#fff"
  },
  logo: {
    width: 300,
    height: 200
  }
});
