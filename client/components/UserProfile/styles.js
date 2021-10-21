import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  form: {
    marginTop: 30,
    marginLeft: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  image: {
    alignSelf: "center",
    marginTop: 15,
  },
  adress: {
    flexDirection: "row",
  },
  text: {
    marginTop: 3,
    alignSelf: "flex-start",
    fontFamily: "sans-serif",
    fontSize: 18,
    marginLeft:15,
  },
  containerButtons: {
    display: "flex",
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "25%",
    backgroundColor: "#8fd18e",
  },
  title: {
    fontSize: 24,
    color: "#5271FF",
    marginLeft: 15,
  },
  caption: {
    marginTop: 3,
    padding: 3,
    fontSize: 15,
    lineHeight: 14,
    color: "#9CA3AF",
    marginLeft: 8,
  },
  icon: {
    marginLeft: 15,
  },
  wrapperbox: {
    borderTopColor: "#9CA3AF",
    borderTopWidth: 1,
    borderBottomColor: "#9CA3AF",
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infobox: {
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "#9CA3AF",
    borderRightWidth: 1,
    width: "50%",
  },
  menuItem: {
    alignItems: "center",
    
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#232020",
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
