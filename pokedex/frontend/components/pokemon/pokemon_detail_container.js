import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

// OwnProps: gives us the path we are in
// 1.       <Route path="/" component={ PokemonIndexContainer } /> ; this is one way you get ownProps
// 2. withRouter;

const mapStateToProps = ( state, ownProps ) => ({
  // pokeData: state.entities.pokemon.id
  pokemon: state.entities.pokemon[ownProps.match.params.id],
  items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
  getOnePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
