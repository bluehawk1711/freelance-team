import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import all slices
import siteReducer from "./slices/siteSlice";
import themeReducer from "./slices/themeSlice";
import servicesReducer from "./slices/servicesSlice";
import portfolioReducer from "./slices/portfolioSlice";
import testimonialReducer from "./slices/testimonialSlice";
import navigationReducer from "./slices/navigationSlice";
import contactReducer from "./slices/contactSlice";
import faqReducer from "./slices/faqSlice";
import settingsReducer from "./slices/settingsSlice";
import blogReducer from "./slices/blogSlice";

// Combine reducers
const rootReducer = combineReducers({
  site: siteReducer,
  theme: themeReducer,
  services: servicesReducer,
  portfolio: portfolioReducer,
  testimonials: testimonialReducer,
  navigation: navigationReducer,
  contact: contactReducer,
  faqs: faqReducer,
  settings: settingsReducer,
  blog: blogReducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "navigation"],
};

// Persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
