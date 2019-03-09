import React , {Component} from 'react';
import './style.css';

 class PokemonDetailsView extends Component{
		render() {
			const { handleDetailsClose} = this.props;
			console.log(this.props)
			return (
					<div 
							onClick={handleDetailsClose} 
							className="PokemonDetails" 
							style={{backgroundImage: `url(${this.props.pokemon.imageUrl})`}}>
					
							<h1 >
								{this.props.pokemon.name}
							</h1>
							<table style={{
											width: '100%'
									}}>
									 <thead>
											<tr>
													<th colSpan="3">Attacks</th>
											</tr>
											<tr>
													<th>Name</th>
													<th>Cost</th>
													<th>Damage</th>
											</tr>
									</thead>
									<tbody>
										 	{this.props.pokemon.attacks.map(
															attack => (
																	<tr key={attack.name}>
																			<td>{attack.name}</td>
																			<td>{attack.name}</td>
																			<td>{attack.name}</td>
																	</tr>
															)
													)
											 }
									</tbody>
											</table>
					</div>
			)
	}
}



export default PokemonDetailsView