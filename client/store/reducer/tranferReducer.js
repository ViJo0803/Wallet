import { MAKE_TRANSFER, GET_TRANSFERS } from "../actions/types";

const initalState = {
  history: []
};

const transfersReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_TRANSFERS:
      console.log("in tranfer reducer",payload )
      return { ...state, history: payload };


      case MAKE_TRANSFER:
     console.log("in tranfer reducer",payload )

      state.history=state.history.unshift(payload)
      console.log(state.history)

      //   state.history.push(payload)
      return {...state, history };

    default:
      return state;
  }
};

export default transfersReducer;
