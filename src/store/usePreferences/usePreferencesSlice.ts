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

const usePreferences = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setEnableNotifications: (state) => {
      state.enableNotifications = !state.enableNotifications;
    },
  },
});

export const { setLanguage, setTheme, setEnableNotifications } =
  usePreferences.actions;
export default usePreferences.reducer;
