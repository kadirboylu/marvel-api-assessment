import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "@/slices/characters/charactersSlice";
import detailsReducer from "@/slices/details/detailsSlice";

export const store = configureStore({
  reducer: { characters: charactersReducer, details: detailsReducer },
});
