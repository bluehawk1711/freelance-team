import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  locale: string;
  currency: string;
  timezone: string;
  notifications: boolean;
  newsletter: boolean;
  cookies: {
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  };
}

const initialState: SettingsState = {
  locale: "en",
  currency: "USD",
  timezone: "UTC",
  notifications: true,
  newsletter: false,
  cookies: {
    analytics: false,
    marketing: false,
    preferences: true,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setTimezone: (state, action: PayloadAction<string>) => {
      state.timezone = action.payload;
    },
    setNotifications: (state, action: PayloadAction<boolean>) => {
      state.notifications = action.payload;
    },
    setNewsletter: (state, action: PayloadAction<boolean>) => {
      state.newsletter = action.payload;
    },
    setCookies: (state, action: PayloadAction<Partial<SettingsState["cookies"]>>) => {
      state.cookies = { ...state.cookies, ...action.payload };
    },
  },
});

export const {
  setLocale,
  setCurrency,
  setTimezone,
  setNotifications,
  setNewsletter,
  setCookies,
} = settingsSlice.actions;
export default settingsSlice.reducer;
