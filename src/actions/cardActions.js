import axios from 'axios'

export const loadCards = (page) => async dispatch => {
  try {
    dispatch({
      type: "CARD_LIST_LOADING"
    })
    
    const response = await axios.get(`https://api.pokemontcg.io/v1/cards?page=${page}`)

    dispatch({
      type: "CARD_LIST_SUCCESS",
      payload: response.data.cards
    })
  } catch (e) {
    dispatch({
      type: "CARD_LIST_FAIL"
    })
  }
}
 
export const getCard = (id) => async dispatch => {
  try {
    dispatch({
      type: "MULTIPLE_CARDS_LOADING"
    })
    
    const response = await axios.get(`https://api.pokemontcg.io/v1/cards/${id}`)

    dispatch({
      type: "MULTIPLE_CARDS_SUCCESS",
      payload: response.data.card,
      cardId: id
    })
  } catch (e) {
    dispatch({
      type: "MULTIPLE_CARDS_FAIL"
    })
  }
}