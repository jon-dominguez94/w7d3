import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.getAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon.map( poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke}/>
    ));

    return (
      <div>
        <ul>
          {pokemon}
        </ul>
      </div>
    );
  }


}

export default PokemonIndex;

// <img src={poke.image_url} />

// .map( poke => (
//   <li>{poke.name}</li>
// ));
