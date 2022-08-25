import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const hash = import.meta.env.VITE_HASH;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const initialState = {
  characters: [],
  isLoading: true,
  offset: 0,
  pageEnd: false,
};

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (offset, thunkAPI) => {
    try {
      const result = await axios(`https://gateway.marvel.com/v1/public/cha
racters?ts=1&limit=30&offset=${offset}&apikey=${publicKey}&hash=${hash}`);
      return result.data.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    loadMore: (state) => {
      state.offset = state.offset + 30;
    },
  },
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [getCharacters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.characters = [...state.characters, ...action.payload];
    },
    [getCharacters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loadMore } = charactersSlice.actions;

export default charactersSlice.reducer;
