import { MAKE_TRANSFER, GET_TRANSFERS } from "../actions/types";

const initalState = {
  history: [],
};

const transfersReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_TRANSFERS:
      return { ...state, history: payload };

    case MAKE_TRANSFER:
      return { ...state, history: payload };

    default:
      return state;
  }
};

export default transfersReducer;
