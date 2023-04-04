import { configureStore } from '@reduxjs/toolkit';
import CommentModalControllerReducer from './features/comment/modalControl';

// store
const store = configureStore({
  reducer: {
    commentModal: CommentModalControllerReducer,
  },
  devTools: process.env.NODE_ENV === 'production' ? false : true,
});

export default store;
