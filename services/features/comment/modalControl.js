import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  isOpen: false,
};

const commentModalControllerSlice = createSlice({
  name: 'commentModalControl',
  initialState,
  reducers: {
    openModal: (state, action) => {
      (state.type = action.payload), (state.isOpen = true);
    },

    closeModal: (state) => {
      (state.type = ''), (state.isOpen = false);
    },
  },
});

export const { openModal, closeModal } = commentModalControllerSlice.actions;

export default commentModalControllerSlice.reducer;
