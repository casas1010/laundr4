import { combineReducers } from "redux";

// NOTE: reducer must define an none undefined value... in other words 
// it cant return undefined
export default combineReducers({
  auth: () => {
    return {};
  },
});