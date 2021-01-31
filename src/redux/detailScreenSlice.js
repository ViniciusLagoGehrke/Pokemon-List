import { createSlice } from '@reduxjs/toolkit'

export const detailScreenSlice = createSlice({
  name: "detailedScreen",
  initialState: {
    id: "",
    name: "",
  },
  reducers: {
    openDetailedScreen: (state, action) => {
      const DetailScreen = state.detail[action.payload.cardId];
      if (DetailScreen === undefined) {
        state.detail[action.payload.cardId] = {
          detailId: action.payload.cardId, //add more properties
        };
      }
    },
    closeDetailedScreen: (state, action) => {
      const DetailScreen = state.detail[action.payload.cardId];
      if (DetailScreen === undefined) return;
      delete state.detail[action.payload.cardId];
    },
  },
});

export const { openDetailedScreen, closeDetailedScreen } = detailScreenSlice.actions;

export const selectDetailScreenId = (state) => state.detail.id;

export default detailScreenSlice.reducer;