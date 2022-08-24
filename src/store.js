import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "@/slices/characters/charactersSlice";

export const store = configureStore({
  reducer: { characters: charactersReducer },
});
