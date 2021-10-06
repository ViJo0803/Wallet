import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(180deg, rgba(248,249,250,1) 0%, rgba(173,181,189,1) 100%)',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
    },
    input: {
        height: 50,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#efefefef',
        borderColor: '#000000',
        fontSize: 20,
    },
    card: {
        backgroundColor: '#efefefef'
    },
    cardContainer: {
        height: 50,
        marginVertical: 30,
    }

});



