import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => {
  return { pokemon: selectAllPokemon(state) };
};

const mapDispatchToProps = dispatch => {
  return { requestAllPokemon: requestAllPokemon };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonIndex);
