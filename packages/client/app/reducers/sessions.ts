import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Session } from "../types";

const initialState: Session = {
  theme: "light",
};

export const sessionSlice = createSlice({
  name: "Session",
  initialState,
  reducers: {
    updateSession: (state, action: PayloadAction<Session>) => {
      return { ...state, ...action.payload };
    },
    updateTheme: (state, action: PayloadAction<Session>) => {
      return { ...state, theme: action.payload };
    },
    clearSession: (state) => {
      return initialState;
    },
  },
});

export const { actions, reducer } = sessionSlice;
