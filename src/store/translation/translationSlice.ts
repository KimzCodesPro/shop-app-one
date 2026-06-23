import { createSlice } from "@reduxjs/toolkit";
import translations from "./translation.json";

type TranslationState = typeof translations;

const initialState: TranslationState = translations;

const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {},
});

export default translationSlice.reducer;
