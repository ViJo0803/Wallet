import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(180deg, rgba(248,249,250,1) 0%, rgba(173,181,189,1) 100%)',
        flexDirection: "column",
    },
    cuentas: {
        height: '15%',
        justifyContent: "space-around",
        padding: 20,
        flexDirection: "row",
    },

    titleCuenta: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonIngresar: {
        borderRadius: 60,
        margin: '5%'
    },
    titleTransfer: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    scrollTransfer: {
        height: '65%',
    },
    textTransf:{
        height: '15%',
        justifyContent: "space-around",
        padding: 20,
            
    }
});
