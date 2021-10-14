import {GET_ACCOUNT, CREATE_ACCOUNT} from "../actions/types"


const initalState={

    accounts:[]

}


const accountReducer=(state= initalState, {type, payload})=>{

    //console.log("in reducer acc")
switch(type){

    case GET_ACCOUNT: 
    return {...state, accounts:payload}

    case CREATE_ACCOUNT: return{...state, accounts:payload}//ver esto me hace ruido

    default: return state;
}
}


export default accountReducer;