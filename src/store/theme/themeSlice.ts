import { createSlice } from "@reduxjs/toolkit";
import colors from "./colors.json";

import type { ThemeColors } from "@/types";

const initialState: ThemeColors = colors;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
