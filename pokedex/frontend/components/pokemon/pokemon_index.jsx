import React from 'react';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.getAllPokemon;
  }

  render() {
    const pokemon = this.props.pokemon.map( poke => (
      <li key={poke.id}>{poke.name}
        <img src={poke.image_url} />
      </li>
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
