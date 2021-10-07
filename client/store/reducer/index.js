import {CREATE_USER, LOG_IN} from '../actions/types'

const initialState= {
    user:{}, // Guardar datos del usuario?
    userToken:[] // Guardar el id_token
}

export default function reducer (state= initialState, {type, payload}) {
    switch (type) {
        case CREATE_USER:
            return{
                ...state,  
                user: state.user.push(payload)
            };
            
        case LOG_IN:
    console.log("payload",payload)
            
            return{
                ...state,  
                userToken:payload,
            };

        default: return state;
    }
}