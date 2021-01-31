import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: "cardName",
  initialState: {
    id: "",
    name: "",
    number: "",
    supertype: "",
    imageUrl: ""
  },
  reducers: {
    setCard: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.number = action.payload.number;
      state.supertype = action.payload.supertype;
      state.imageUrl = action.payload.imageUrl;
    },
  },
});

const { setCard } = cardSlice.actions;

export const loadCardAsync = () => (dispatch) => {
  setTimeout(() => {
    const id = "swshp-SWSH020";
    const name = 'Pikachu';
    const number = 'Pikachu';
    const supertype = 'Pikachu';
    const imageUrl = 'Pikachu';

    dispatch(setCard({ id, name, number, supertype, imageUrl }));
  }, 500);
}

export const selectCardId = state => state.card.id;
export const selectCardName = state => state.card.name;
export const selectCardNumber = state => state.card.number;
export const selectCardSupertype = state => state.card.supertype;
export const selectCardImageUrl = state => state.card.imageUrl;

export default cardSlice.reducer;