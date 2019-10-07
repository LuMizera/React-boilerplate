import { Reducer } from "redux";
import { AlertReduceState, AlertTypes } from "./types";

const INITIAL_STATE: AlertReduceState = {
  text: "",
  count: 0
};

const reducer: Reducer<AlertReduceState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AlertTypes.DISPLAY_ALERT:
      return {
        ...state,
        text: action.payload,
        count: state.count + 1
      };
    default:
      return state;
  }
};

export default reducer;
