import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const hash = import.meta.env.VITE_HASH;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const initialState = {
  characters: [], // array of characters
  queryResult: [], // array of results
  isLoading: true, // boolean to show loading spinner
  offset: 0, // offset for pagination
  query: "", // query for search
  total: 0, // total number of characters
};

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (obj, thunkAPI) => {
    const { offset, query } = obj;

    const standartURL = `https://gateway.marvel.com/v1/public/characters?ts=1&limit=30&offset=${offset}&apikey=${publicKey}&hash=${hash}`;

    const searchURL = `https://gateway.marvel.com/v1/public/characters?ts=1&nameStartsWith=${query}&limit=30&offset=${offset}&apikey=${publicKey}&hash=${hash}`;

    try {
      const result = await axios(
        thunkAPI.getState().characters.query === "" ? standartURL : searchURL // if query is empty, use standartURL, else use searchURL
      );
      return result.data.data;
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
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    reset: (state) => {
      // Reset values ​​to initial value
      state.characters = [];
      state.queryResult = [];
      state.offset = 0;
    },
  },
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [getCharacters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.total = action.payload.total; // total number of characters

      // if there is no query, we just add the new characters to the list
      if (state.query !== "") {
        state.queryResult = [...state.queryResult, ...action.payload.results];
        state.characters = state.queryResult;
      } else {
        state.characters = [...state.characters, ...action.payload.results];
      }
    },
    [getCharacters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loadMore, setQuery, reset } = charactersSlice.actions;

export default charactersSlice.reducer;
