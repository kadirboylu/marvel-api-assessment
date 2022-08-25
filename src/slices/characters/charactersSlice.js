import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const hash = import.meta.env.VITE_HASH;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const initialState = {
  characters: [],
  queryResult: [],
  isLoading: true,
  offset: 0,
  pageEnd: false,
  query: "",
  total: 0,
};

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (obj, thunkAPI) => {
    const { offset, query } = obj;

    const standartURL = `https://gateway.marvel.com/v1/public/cha
racters?ts=1&limit=30&offset=${offset}&apikey=${publicKey}&hash=${hash}`;

    const searchURL = `https://gateway.marvel.com/v1/public/characters?ts=1&nameStartsWith=${query}&limit=30&offset=${offset}&apikey=${publicKey}&hash=${hash}`;

    try {
      const result = await axios(
        thunkAPI.getState().characters.query === "" ? standartURL : searchURL
      );
      console.log(result.data.data);
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
      state.total = action.payload.total;

      if (state.query !== "") {
        state.queryResult = [...state.queryResult, ...action.payload.results];
        state.characters = state.queryResult;
      } else {
        state.characters = [...state.characters, ...action.payload.results];
      }

      console.log(state.characters);
    },
    [getCharacters.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loadMore, setQuery, reset } = charactersSlice.actions;

export default charactersSlice.reducer;
