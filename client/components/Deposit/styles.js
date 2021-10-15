import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundImage: 'linear-gradient(180deg, rgba(248,249,250,1) 0%, rgba(173,181,189,1) 100%)',
    },
    image: {
        width: '100%',
        height: '30%',
        margin: '10px',
    },

    transferDinero: {
        height: '15%',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        margin: 20,
    },
    titleTransfer: {
        height: '15%',
        alignSelf: "center",
        fontWeight: 'bold',
    },
});



