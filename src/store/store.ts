import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { dataReducer } from "./massage/slice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
