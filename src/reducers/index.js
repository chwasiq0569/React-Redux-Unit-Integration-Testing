import { combineReducers } from "redux";
import { successReducer } from "./sucessReducer";

const rootReducer = combineReducers({ successReducer });
export default rootReducer;
