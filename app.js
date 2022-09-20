const POKEAPI = 'https://pokeapi.co/api/v2/';
const POKEMON = ['ditto/', 'pikachu/'];

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

function getURL( catVal ) {
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
	let dOptions = document.querySelector(".display-options");
	
	//console.log(typeof(pokemons));
	
	for ( let key in pokemons) {
		fetch(pokemons[key].url)
		.then( res => res.json() )
		.then( pokemon => {
			console.log( pokemon.name.toUppercase )
			console.log( pokemon.sprites.front_default )
			
			let divPokeBio = document.createElement('div');
			divPokeBio.className = "pokemonBio";
			let h3 = document.createElement('h3');
			h3.innerHTML= pokemon.name;
			
			divPokeBio.appendChild(h3)
			let img = document.createElement('img');
			img.src = pokemon.sprites.front_default;
			divPokeBio.appendChild(img)
			//console.log(divPokeBio)
			//console.log(dOptions)
			dOptions.appendChild(divPokeBio)
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
	getCategory();
})

