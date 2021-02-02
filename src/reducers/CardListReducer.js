const DefaultState = {
  loading: false,
  data: [],
  errorMsg: ""
}

const CardListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "CARD_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: ""
      };
    case "CARD_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: ""
      };
    case "CARD_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get cards"
      };
    default:
      return state
  }
};

export default CardListReducer