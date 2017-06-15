'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
  wrapper.append(Search(_ => render(root)));
  root.append(wrapper);
}

const state = {
  pokedex: null,
  selectedStation: null
};

$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokedex = json;
    console.log(state.pokedex.pokemon_entries.forEach(function(e){
      console.log(e.pokemon_species.name);
    }));
    const root = $('.root');
    render(root);
  });

});
