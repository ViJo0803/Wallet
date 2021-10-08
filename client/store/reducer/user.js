import {CREATE_USER, GET_USER} from "../actions/types"


let initialState={
    User:{}
}

const userReducer= (state= initialState, {type, payload})=>{
    
    switch(type){

        case CREATE_USER:
            return {...state, User:payload};
        

        case GET_USER:
            
            return {...state,User:payload}





        default: return state;
    }
}


export default userReducer;    