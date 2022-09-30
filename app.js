const POKEAPI = 'https://pokeapi.co/api/v2/';
const POKEMON = ['ditto/', 'pikachu/'];

/*
function getCategory( ) {
	const category = document.getElementById('category');
	//const categoryName = document.querySelector('category-name');
	//let categoryName = categoryDataName.textContent;
	//console.log(category.innerText)
	category.addEventListener('change', ( ev ) => {
		let optName = category.options[category.selectedIndex];
		//console.log(category.options[category.selectedIndex].innerText);
		//console.log(category.options[category.selectedIndex].value);
		let pokeHeader = document.getElementById("pokeHeader");
		pokeHeader.textContent = optName.text;

		let catVal = ev.target.value;
		//console.log("09 " + catVal);
		
		getURL( catVal );
	});
}
*/

function getURL( ) {
	const catVal = "pokemon/" 
	//console.log("15 " + POKEAPI+catVal)
	url = POKEAPI+catVal;
	//console.log(url);
	urlapi( url );
}

function pokedexCount( count ) {
	//console.log(count);
}

function pokedexData( pokedex ) {
	//console.log( pokedex );
	const pokemons = pokedex.results;
	let cardsContainer = document.querySelector(".pokemon-cards-container");
	//console.log(pokedex.results)
	//console.log(typeof(pokemons));

	/*********************
		<div class="pokemon-cards-container">
			<div class="pokedex">
				<div class="display">
					<!--h2 id="pokeHeader" class="category-name">Category</!--h2-->
					<div id="display-options" class="display-options">
					</div>
				</div>
			</div>
		</div>
	****************************/
	
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
			
			/*console.log( pokemon.name.charAt(0).toUpperCase())
			console.log( pokemon.name.slice(1))
			console.log(capitalName)*/
			divPokeCard.innerHTML = divPokeCardCreator;

			console.log(pokemon)
			/*console.log( capitalName )
			console.log(pokemon.stats[0].stat.name + ": " + pokemon.stats[0].base_stat);
			console.log(pokemon.stats[1].stat.name + ": " + pokemon.stats[0].base_stat);
			console.log(pokemon.stats[2].stat.name + ": " + pokemon.stats[0].base_stat);
			console.log(pokemon.stats[3].stat.name + ": " + pokemon.stats[0].base_stat);
			console.log(pokemon.stats[4].stat.name + ": " + pokemon.stats[0].base_stat);
			console.log(pokemon.stats[5].stat.name + ": " + pokemon.stats[0].base_stat);
			console.log("-------------------------------")
			*/cardsContainer.appendChild(divPokeCard)
			//console.log(Object.values(pokemon))
		})
		//console.log(pokemons[key].name)
		//console.log(pokemons[key].url)
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
	//getCategory();
	getURL();
})

