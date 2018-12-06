import React from 'react';
import { Link } from 'react-router-dom';

// class PokemonIndexItem extends React.Component {
//
//   render() {
//     return (
//       <li key={this.props.key}>
//         {this.props.pokemon.name}
//         <img src={this.props.pokemon.image_url} />
//       </li>
//     );
//   }
// }


const PokemonIndexItem = (props) => {
    // const pokePath = "/pokemon/" + {props.pokemon.id};
    return (
      <li key={props.pokemon.id}>
        <Link to={`/pokemon/${props.pokemon.id}`}>
          {props.pokemon.name}
          <img src={props.pokemon.image_url} />
        </Link>
      </li>
    );
  };

export default PokemonIndexItem;
