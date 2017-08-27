'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(allPokemons());
  // wrapper.append(pokeDetails());
  root.append(wrapper);
}

const state = {
  pok :null,
  // pokSe :null,
  // pokSp:null,
  // pokCo:null,
  // ln:'es'
};

$( _ => {
  const root = $('#root');
  render(root);

  getPoke((err, data) => {

    if (err) { return alert(err.message);}

    state.pok = data;
    console.log(data.pokemon_entries);


  });
  // $('.modal').modal();

});
