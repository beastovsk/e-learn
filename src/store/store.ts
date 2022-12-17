import { combineReducers, configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layoutSlice";

const rootReducer = combineReducers({
    layoutSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
