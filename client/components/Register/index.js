import React from 'react'
import { View, Text } from 'react-native'




function Register() {

    const [state, setState] = {
        id: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    }

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);


    return (
        <View>
            <Text>Crear cuenta</Text>

        </View>
    )
}

export default Register
