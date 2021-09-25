import bookmarkReducer from "./bookmark";
import { combineReducers } from "redux";
const rootReducer = (combineReducers as any)({
  bookmarkReducer
});
export default rootReducer;