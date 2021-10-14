import { CREATE_USER, GET_USER, GET_JWT, UPDATE_USER } from "../actions/types";

let initialState = {
  jwtToken: {},
  user: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_USER:
      return { ...state, user: payload };

    case GET_USER:
      return { ...state, user: payload };

    case GET_JWT:
      return { ...state, jwtToken: { payload } };

    case UPDATE_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
};

export default userReducer;
