import { GET_CONTACT, UPDATE_CONTACT } from "../actions/types";

const initalState = {
    contacts: [],
  }


  const contactsReducer= (state = initalState, { type, payload }) => {
    switch (type) {
      case GET_CONTACT:
        return { ...state, contacts: payload };
      case UPDATE_CONTACT:
        return { ...state }; 
      default:
        return state;
    }
  };


  export default contactsReducer;