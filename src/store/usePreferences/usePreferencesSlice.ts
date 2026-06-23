import { Langauge, Theme } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  langauge: Langauge;
  theme: Theme;
};

const initialState: InitialStateType = {
  langauge: "en",
  theme: "light",
};

const usePreferences = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Langauge>) {
      state.langauge = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { setLanguage, setTheme } = usePreferences.actions;
export default usePreferences.reducer;
