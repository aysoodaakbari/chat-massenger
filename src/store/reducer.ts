import { combineReducers } from "@reduxjs/toolkit";
import { dataReducer } from "./massage/slice";
import { profileSliceReducer } from "./profilePhoto/slice";

const rootReducer = combineReducers({
  massage: dataReducer,
  profile: profileSliceReducer,
});

export default rootReducer;
