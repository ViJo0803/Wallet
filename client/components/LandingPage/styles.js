import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#B5E48C",
    // backgroundImage: 'linear-gradient(to bottom, rgb(103, 224, 167), rgb(95, 217, 172), rgb(87, 210, 176), rgb(80, 202, 181), rgb(72, 195, 186), rgb(64, 188, 191), rgb(56, 181, 195), rgb(48, 174, 200), rgb(40, 167, 205), rgb(33, 159, 210), rgb(25, 152, 214), rgb(17, 145, 219))',
    // backgroundImage: 'linear-gradient(to top, rgb(103, 224, 167), rgb(95, 217, 172), rgb(87, 210, 176), rgb(80, 202, 181), rgb(72, 195, 186), rgb(64, 188, 191), rgb(56, 181, 195), rgb(48, 174, 200), rgb(40, 167, 205), rgb(33, 159, 210), rgb(25, 152, 214), rgb(17, 145, 219))',
    // backgroundImage: 'linear-gradient(to bottom, rgb(103, 224, 167), rgb(95, 212, 169), rgb(88, 201, 170), rgb(80, 189, 172), rgb(73, 178, 173), rgb(65, 166, 175), rgb(58, 155, 176), rgb(50, 143, 178), rgb(43, 132, 179), rgb(35, 120, 181), rgb(28, 109, 182), rgb(20, 97, 184))',
    backgroundImage: 'linear-gradient(180deg, rgba(153,217,140,1) 0%, rgba(26,117,159,1) 100%)',
    // backgroundImage: 'radial-gradient(circle, rgba(153,217,140,1) 0%, rgba(26,117,159,1) 100%)',
    
  },
  containerText: {
    marginTop: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    alignSelf: "center",    
    color: '#5C5C5C',
  },
  button: {
    width: "100%",
    margin: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  },
  plainText:{
    fontSize: 15,    
    fontWeight: "bold",
    padding: '1%',
    color: '#5C5C5C',
  },
  buttonContainer: {
    width: "80%",
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: "#80c590",
    marginTop: 5,
  },
  buttonText: {
    padding:'0 15px',
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "center",
    color: "#fff",
  },
});
