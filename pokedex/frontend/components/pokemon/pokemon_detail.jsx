import React from 'react';

const PokemonDetail = (props) => {
  return (
    <div>
      <h2>{props.pokemon.name}</h2>
      <h4>{props.pokemon.attack}</h4>
      <h4>{props.pokemon.defense}</h4>
      <h4>{props.pokemon.moves}</h4>
      <br />
      <h4>{props.items[1].name}</h4>
    </div>
  );
};


export default PokemonDetail;
// <Route path='/pokemon/:pokeId' component={  } key={poke.id} pokemon={poke} />
