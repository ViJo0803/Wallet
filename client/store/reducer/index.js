import {CREATE_USER, LOG_IN} from '../actions/types'

const initialState= {
    users:[],
    userDetail:[]
}


const reducer = (state= initialState, {type, payload})=>{
    switch (type) {
        case CREATE_USER:
            return{...state,  users:state.users.push(payload)};

        default: return state;
}
}