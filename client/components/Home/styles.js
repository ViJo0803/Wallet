import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CEE5F1',
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
    }
});
