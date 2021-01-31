import axios from 'axios'

const api = axios.create({
  baserURL: 'https://api.pokemontcg.io/v1/cards'
})

export default api;