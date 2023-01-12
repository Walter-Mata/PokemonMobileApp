//import uuid from 'uuid/v4';

//ADD_POKEMON
//REMOVE_POKEMON

export const PokemonReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [
        ...state,
        {
         id:action.pokemon.id,
         abilities:action.pokemon.abilities,
         base_experience:action.pokemon.base_experience,
         height:action.pokemon.height,
         moves:action.pokemon.moves,
         name:action.pokemon.name,
         sprites:action.pokemon.sprites,
         stats:action.pokemon.stats,
         types:action.pokemon.types
        }
      ];
    case 'REMOVE_POKEMON':
      return state.filter(pokemon => pokemon.id !== action.pokemonId);
    default:
      return state;
  }
};