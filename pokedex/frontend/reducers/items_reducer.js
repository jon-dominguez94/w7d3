import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      // return action.pokemon;
      // get all items for this pokemon and add to state
      // console.log(action)
      return merge({}, state, action.pokeData.items);
    default:
      return state;
  }
};

export default itemsReducer;
