import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: {
    items: [],
    isLoading: false,
  },
  tags: {
    items: [],
    isLoading: false,
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const actions = postsSlice.actions;
export default postsSlice;
