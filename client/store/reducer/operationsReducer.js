import { GET_OPERATIONS } from "../actions/types";

const initalState = {
  operations: []
};

const operationsReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_OPERATIONS:
      return { ...state, operations: payload };

    default:
      return state;
  }
};

export default operationsReducer;
