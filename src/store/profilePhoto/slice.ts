import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProfileState {
  photo: string;
}

const initialState: IProfileState = {
  photo: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setPhoto: (state, action: PayloadAction<string>) => {
      state.photo = action.payload;
    },
  },
});

export const { setPhoto } = profileSlice.actions;
export const selectPhoto = (state: { profile: IProfileState }) =>
  state.profile?.photo;
export const profileSliceReducer = profileSlice.reducer;
