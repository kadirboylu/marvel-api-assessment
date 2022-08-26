import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  character: {}, // character object
  comics: [], // array of comics
  isLoading: true, // boolean to show loading spinner
};

const hash = import.meta.env.VITE_HASH; // hash from env
const publicKey = import.meta.env.VITE_PUBLIC_KEY; // public key from env

export const getComics = createAsyncThunk(
  "details/getComics",
  async (id, thunkAPI) => {
    try {
      const result = await axios(
        `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&limit=10&&apikey=${publicKey}&hash=${hash}` // get comics for character with id
      );
      return result.data.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setCharacter: (state, action) => {
      state.character = action.payload; // set character object
    },
  },
  extraReducers: {
    [getComics.pending]: (state) => {
      state.isLoading = true;
    },
    [getComics.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comics = action.payload;
    },
    [getComics.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setCharacter } = detailsSlice.actions;

export default detailsSlice.reducer;
