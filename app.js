// TODO
var FavPokemon = () => {
	<div>
	 <h2> My Favorite Pokemon </h2>
	 <PokemonList pokes={['Growlithe', 'Arcanine', 'Gastrodon', 'Braviary']}/>
	</div>
};

var PokemonList = () => {
	<ul>
		<li>{props.todos[0]}</li>
		<li>{props.todos[1]}</li>
		<li>{props.todos[2]}</li>
		<li>{props.todos[3]}</li>
	</ul>
};
