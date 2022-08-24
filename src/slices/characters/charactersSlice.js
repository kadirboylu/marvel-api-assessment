import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const hash = import.meta.env.VITE_HASH;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const url = `http://gateway.marvel.com/v1/public/characters?ts=1&limit=30&offset=0&apikey=${publicKey}&hash=${hash}`;

const initialState = {
  characters: [],
  isLoading: true,
};

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (thunkAPI) => {
    try {
      const result = await axios(url);
      return result.data.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [getCharacters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.characters = action.payload;
    },
    [getCharacters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default charactersSlice.reducer;
