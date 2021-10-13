import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
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
})