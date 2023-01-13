import { initialState } from './initialState'
import {
  ADD_FAVORITE_POKEMON,
  POPULATE_POKEMON_LIST,
  REMOVE_FAVORITE_POKEMON,
} from '../types/pokemon.types'

export const PokemonReducer = (state = initialState.pokemon, action) => {
  switch (action.type) {
    case POPULATE_POKEMON_LIST:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          list: [...state.pokemons.list, ...action.payload.pokemons],
          currentPage: action.payload.currentPage,
          nextPage: action.payload.nextPage,
          isGettingMoreData: action.payload.isGettingMoreData,
        },
      }
    case ADD_FAVORITE_POKEMON:
      return {
        ...state,
        favorite: [
          ...state.favorite,
          {
            id: action.pokemon.id,
            abilities: action.pokemon.abilities,
            base_experience: action.pokemon.base_experience,
            height: action.pokemon.height,
            moves: action.pokemon.moves,
            name: action.pokemon.name,
            sprites: action.pokemon.sprites,
            stats: action.pokemon.stats,
            types: action.pokemon.types,
          },
        ],
      }
    case REMOVE_FAVORITE_POKEMON:
      return state.favorite.filter((pokemon) => pokemon.id !== action.pokemonId)

    default:
      return state
  }
}
