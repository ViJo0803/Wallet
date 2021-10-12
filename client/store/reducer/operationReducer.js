import { GET_OPERATIONS } from "../actions/types";

const initalState = {
  operations: []
};

const operationReducer = (state = initalState, { type, payload }) => {

  console.log("in operationsReducer")

  switch (type) {
    case GET_OPERATIONS:
      console.log("in operationsReducer, get operations ", payload)
      return { ...state, operations: payload };

    default:
      return state;
  }
};

export default operationReducer;