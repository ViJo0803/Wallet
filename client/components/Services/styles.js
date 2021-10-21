import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingBottom: 50,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  searchInput: {
    backgroundColor: colors.primary,
    borderColor: colors.tertiary,
    padding: 12,
    fontSize: 20,
    margin: 10,
    borderRadius: 10,
  },
  searchView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  input: {
    flex: 1,
  },
  userCard: {
    display: "flex",
    alignItems: "center",
    margin: 25,
    width: 80,
    height: 80,
  },
  userCardText: {
    marginTop: 5,
    fontWeight: "700",
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
  },
  userImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    padding: 1,
    borderRadius: 50,
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
