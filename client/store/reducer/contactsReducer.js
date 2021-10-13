import {GET_CONTACTS} from '../actions/types'


const initialState={
   fav:[ {nickname:"locoVargas", CVU: "44"},
{nickname:"locoSello", CVU: "45"},
{nickname:"locaSuarez", CVU: "46"},
{nickname:"locoCarrizo", CVU: "47"}]}


const contactsReducer=(state= initialState, {type, payload})=>{

    console.log("in reducer contacts")

switch(type){

    case GET_CONTACTS: 
    return {...state, fav:payload}

   // case CREATE_ACCOUNT: return{...state, accounts:payload}//ver esto me hace ruido

    default: return state;
}
}

export default contactsReducer  ;