import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  mode: Theme;
  accentColor: string;
}

const initialState: ThemeState = {
  mode: "light",
  accentColor: "#0057FF",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
    },
    setAccentColor: (state, action: PayloadAction<string>) => {
      state.accentColor = action.payload;
    },
  },
});

export const { setTheme, setAccentColor } = themeSlice.actions;
export default themeSlice.reducer;
