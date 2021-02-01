const DefaultState = {
  loading: false,
  data: [],
  errorMsg: ""
};

const MultipleCardsReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "MULTIPLE_CARDS_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: ""
      }
    case "MULTIPLE_CARDS_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          [action.cardId]: action.payload
        }
      }
    case "MULTIPLE_CARDS_FAIL ":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find card"
      }
    default:
      return state
  }
}

export default MultipleCardsReducer