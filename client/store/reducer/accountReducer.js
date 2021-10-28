import {
  GET_ACCOUNT,
  CREATE_ACCOUNT,
  DEPOSIT,
  GET_SERVICE_PAYMENT,
} from "../actions/types";

const initalState = {
  accounts: [],
  payments: [],
};

const accountReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_ACCOUNT:
      return { ...state, accounts: payload };

    case CREATE_ACCOUNT:
      return { ...state, accounts: payload };

    case DEPOSIT:
      return { ...state, accounts: payload };

    case GET_SERVICE_PAYMENT:
      return { ...state, payments: payload };

    default:
      return state;
  }
};

export default accountReducer;
