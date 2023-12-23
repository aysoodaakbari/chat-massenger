import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IMassageData = { massageId: number; text: string; sender: string };

export interface IinitialState {
  userId: number;
  data: IMassageData[];
}
const initialState: IinitialState[] = [
  {
    userId: 0,
    data: [
      {
        massageId: 1,
        text: "Hi Aysooda!",
        sender: "bot",
      },
    ],
  },
  {
    userId: 1,
    data: [
      {
        massageId: 1,
        text: "Hi Shirin!",
        sender: "bot",
      },
    ],
  },
  {
    userId: 2,
    data: [
      {
        massageId: 1,
        text: "Hi masoud!",
        sender: "bot",
      },
    ],
  },
  {
    userId: 3,
    data: [
      {
        massageId: 1,
        text: "Hi Maryam!",
        sender: "bot",
      },
    ],
  },
];

const dataSlice = createSlice({
  name: "massage",
  initialState,
  reducers: {
    addMassage: (
      state: IinitialState[],
      action: PayloadAction<{ userId: number; newMassage: IMassageData[] }>,
    ) => {
      const { userId, newMassage } = action.payload;
      const massageIndex = state.findIndex(
        (massage) => massage.userId === userId,
      );

      if (massageIndex !== -1) {
        state[massageIndex].data.push(...newMassage);
      }
    },
  },
});

export const { addMassage } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
