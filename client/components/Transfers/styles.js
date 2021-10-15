import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '30%',
        margin: '10px',
    },

    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        flex: 1,
        height: 40,
        fontSize: 18,
      },
      container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 10,
        // backgroundImage: 'linear-gradient(180deg, rgba(248,249,250,1) 0%, rgba(173,181,189,1) 100%)',
        backgroundColor: '#B5FFE1',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    text: { 
        fontSize: 18,
        marginTop: 12,
        marginBottom: 12,
    },
    searchView: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
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
   
    userCard: {
        backgroundColor: "#fafafa",
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
    messageBox: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    messageBoxText: {
        fontSize: 20,
        fontWeight: "500",
    },
})