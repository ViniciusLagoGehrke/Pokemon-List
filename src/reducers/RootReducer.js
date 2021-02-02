import { combineReducers } from 'redux'
import CardListReducer from './CardListReducer'
import MultipleCardsReducer from './MultipleCardsReducer'

const rootReducer = combineReducers({
  CardList: CardListReducer,
  Card: MultipleCardsReducer
})

export default rootReducer;