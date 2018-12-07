import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;

    case RECEIVE_ONE_POKEMON:
      return Object.assign({}, state, action.pokeData);

    default:
      return state;
  }
};


export default pokemonReducer;
// Why export default?
