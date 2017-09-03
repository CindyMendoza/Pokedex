'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(allPokemons());
  root.append(wrapper);
}

const state = {
  pok :null,
  descrip :null,
  altura: null,
  peso: null,
  catego: null,
  habili: [],
  tipo:[],
  debilidad:[]
};

$( _ => {


$.getJSON("https://pokeapi.co/api/v2/pokedex/1/",(data1)=>{
          state.pok = data1;
  })
  .done(function(data2) {
    const root = $('#root');
    render(root);
    console.log(state.pok);
    })
  .fail(function( jqxhr, textStatus, error ) {
      alert( jqxhr, textStatus, error );
  });


});
