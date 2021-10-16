import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    image: {
        width: '30%',
        height: '30%',
        borderColor: "#20232a",
    },
    textBox: {
        alignItems: 'flex-start'
    },
    text: {
        alignSelf: 'flex-start',
        fontFamily: 'sans-serif',
    },
    containerButtons: {
        display: 'flex',
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: '25%',
        backgroundColor: '#8fd18e'
    },
});