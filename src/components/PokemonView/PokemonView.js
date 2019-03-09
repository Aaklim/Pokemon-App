import React, { Component } from 'react';
import './style.css';


class PokemonView extends Component {
	handleClick =()=> {
		this.props.handleClick(this.props.id)
	}
	
	render () {
		const { handleClick, ...pokemon } = this.props;
		return (
			<li className ="pokemonView__li" onClick={this.handleClick}>
				<img src={pokemon.imageUrl} alt={pokemon.name} />
			
			</li>
		);
	}
}

export default PokemonView;