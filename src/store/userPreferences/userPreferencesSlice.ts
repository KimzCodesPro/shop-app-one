import { Language, Theme } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  language: Language;
  theme: Theme;
  enableNotifications: boolean;
};

const initialState: InitialStateType = {
  language: "en",
  theme: "light",
  enableNotifications: false,
};

const userPreferences = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setEnableNotifications: (state, action: PayloadAction<boolean>) => {
      state.enableNotifications = action.payload;
    },
  },
});

export const { setLanguage, setTheme, setEnableNotifications } =
  userPreferences.actions;
export default userPreferences.reducer;
