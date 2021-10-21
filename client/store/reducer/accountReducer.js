import { GET_ACCOUNT, CREATE_ACCOUNT, DEPOSIT } from "../actions/types";

const initalState = {
  accounts: [],
};

const accountReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_ACCOUNT:
      return { ...state, accounts: payload };
    case CREATE_ACCOUNT:
      return { ...state, accounts: payload };

    case DEPOSIT:
      return { ...state, accounts: payload }
    default:
      return state;
  }
};

export default accountReducer;
