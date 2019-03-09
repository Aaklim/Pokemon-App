import React, {Component} from 'react';
import PokemonView from '../PokemonView/PokemonView';
import './style.css';
import PokemonDetailsView from '../PokemonDetailsView/PokemonDetailsView';

class PokemonListView extends Component {
  state = {
		list: [],
		selected: null,
		isDetailOpen: false,
  };

componentDidMount() {
  fetch("https://api.pokemontcg.io/v1/cards").then(
    (res) => {return res.json()}
    
  )
  .then(
    (json) => {
      this.setState({list:json.cards})
    }
  )
}

handleClick = (pokemonid) => {
	this.setState({
		selected: this.state.list.find(x => x.id === pokemonid),
		isDetailOpen: true,
	})
}

handleDetailsClose = () => {
	this.setState({
		isDetailOpen: false,
	})
}

  render() {
    const pokemonElements = this.state.list.map(
			pokemon => (<PokemonView
				handleClick={this.handleClick}
									key={pokemon.id}
									 {...pokemon}/>									 
									 )
    )
    return (
			<div>
				<input type="text"></input>
				<div className="pkDet">{this.state.isDetailOpen && <PokemonDetailsView handleDetailsClose={this.handleDetailsClose}
				pokemon={this.state.selected}/>}
				</div>
				<ul className="list">
					{pokemonElements}
				</ul>
			</div>

    );
  }
}

export default PokemonListView;