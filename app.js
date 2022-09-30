const POKEAPI = 'https://pokeapi.co/api/v2/';
const POKEMON = ['ditto/', 'pikachu/'];

function getURL( ) {
	const catVal = "pokemon/";
	url = POKEAPI+catVal;
	urlapi( url );
}

function pokedexCount( count ) {
	//console.log(count);
}

function pokedexData( pokedex ) {
	const pokemons = pokedex.results;
	let cardsContainer = document.querySelector(".pokemon-cards-container");
	
	for ( let key in pokemons) {
		fetch(pokemons[key].url)
		.then( res => res.json() )
		.then( pokemon => {

			let capitalName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
			let divPokeCardCreator = '';
			let divPokeCard = document.createElement("div");
			
			divPokeCard.className = "pokemon-card";
			divPokeCardCreator = `
			<div class="card-header">
				<span class="pokemon-name">${ capitalName }</span>
				<span>HP ${ pokemon.stats[0].base_stat }</span>
				</div>
			</div>
			<div class="image-container">
				<img src="${pokemon.sprites.front_default}" class="" />
			</div>

			<div class="card-skills">
				<div class="attack">Attack: ${pokemon.stats[1].base_stat}</div>
				<div class="attack-special">Speacial Attack: ${pokemon.stats[3].base_stat}</div>
				<div class="defense">Defense: ${pokemon.stats[2].base_stat}</div>
				<div class="defense-special">Special Defense: ${pokemon.stats[4].base_stat}</div>
				<div class="speed">Speed: ${pokemon.stats[5].base_stat}</div>
			</div>
			`;
			
			divPokeCard.innerHTML = divPokeCardCreator;

			console.log(pokemon)
			cardsContainer.appendChild(divPokeCard)
		})
	}
}

function urlapi( url ){
	fetch( url ).then( res => res.json() )
	.then( 
		pokedex => {
			pokedexData( pokedex );
			pokedexCount( pokedex.count );
		}
	).catch( (err) => console.log(err) );
}

document.addEventListener("DOMContentLoaded", ( ) => {
	getURL();
})

