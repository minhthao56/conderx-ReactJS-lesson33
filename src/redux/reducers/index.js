import { combineReducers } from "redux";
import DataUser from "./dataUser";

const myReducer = combineReducers({
  DataUser: DataUser,
});

export default myReducer;
