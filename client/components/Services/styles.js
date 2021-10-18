import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7F1E5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  inputView: {
    width: "100%",
    flex: 1,
    height: "40%",
    backgroundColor: "#dfe4ea",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  userCard: {
    backgroundColor: "#fafafa",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: "40%",
    height: "40%",
  },
  messageBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  messageBoxText: {
    fontWeight: "500",
  },
});
