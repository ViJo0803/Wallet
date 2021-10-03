import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',        
        backgroundImage: 'linear-gradient(180deg, rgba(248,249,250,1) 0%, rgba(173,181,189,1) 100%)',
    },
    image: {
        width: '30%',
        height: '30%',
        
    },
    text: {
    },
    containerButtons:{
        display: 'flex',
        width: '50%',
        flexDirection: 'column'
    },
    button:{
        width: '25%',
    },
});