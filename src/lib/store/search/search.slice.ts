import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loadingRequest: false,
  searchList: {
    artists: {},
    albums: {},
    episodes: {},
    playlists: {},
    tracks: {},
    shows: {}
  },
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchRequest: (state, action) => {
      //state.loadingRequest = true;
    },
    searchSuccess: (state, action) => {
      state.searchList = action.payload;
      //state.loadingRequest = false;
    },
    searchFailure: (state, action) => {
      // Handle login failure
    },
    getObjectSuccess: (state, action) => {
      if (action.payload.albums !== undefined)
        state.searchList.albums = action.payload.albums
      if (action.payload.artists !== undefined)
        state.searchList.artists = action.payload.artists
      if (action.payload.shows !== undefined)
        state.searchList.shows = action.payload.shows
      if (action.payload.episodes !== undefined)
        state.searchList.episodes = action.payload.episodes
      if (action.payload.playlists !== undefined)
        state.searchList.playlists = action.payload.playlists
      if (action.payload.tracks !== undefined)
        state.searchList.tracks = action.payload.tracks
    }
  }
});
export const {
  searchRequest,
  searchSuccess,
  searchFailure,
  getObjectSuccess
} = searchSlice.actions
export default searchSlice.reducer
