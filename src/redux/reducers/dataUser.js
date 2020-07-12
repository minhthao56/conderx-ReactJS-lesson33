import * as types from "../constants/typeAction";

const initialState = {};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_LOGGED:
      const data = action.data;
      return Object.assign({}, state, data);
    default:
      return state;
  }
};
export default myReducer;
