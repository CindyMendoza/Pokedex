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


  getPoke((error, data)=>{
       if (error){return alert(error);}
       state.pok = data;
       const root = $('#root');
       render(root);
       console.log(state.pok);
   });

  // $('.modal').modal();

});
