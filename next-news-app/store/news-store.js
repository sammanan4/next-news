import { createSlice, configureStore } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: { articles: [] },
  reducers: {
    setArticles: (state, action) => {
        console.log("------------------------------------", action.payload);
      state.articles = action.payload;
    },
    markAllAsRead: (state) => {
      state.articles.forEach((article) => {
        article.read = true;
      });
    },
    markAllAsUnread: (state) => {
        state.articles.forEach((article) => {
            article.read = false;
        });
    },
  },
});

const newsStore = configureStore({
  reducer: { news: newsSlice.reducer },
});

export const newsActions = newsSlice.actions;

export default newsStore;
