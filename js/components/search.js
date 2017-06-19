'use strict';

const searchItem = (data) => {
  const divPokeImg = $('<div class="divPokeImg"></div>');
  const pokeImg = $('<img src="http://serebii.net/art/th/' + data.entry_number +'.png">');
  const name = $('<p>' + data.pokemon_species.name + '</p>');
  // const spanUrl = $('<span>' + $.get(data.pokemon_species.url,(rs)=>{ return console.log(rs);}) + '</span>');

  // divPokeImg.append(spanUrl);

  divPokeImg.append(pokeImg);
  divPokeImg.append(name);


  divPokeImg.on("click",()=>{
    const divModal = $('<div id="modal1" class="modal modal-fixed-footer"></div>');
    const divContent = $('<div class="modal-content"></div>');
    const p = $('<p>A bunch of text</p>');
    divContent.append(p);
    divModal.append(divContent);
    divModal.attr('data-target', 'modal1');
    divModal.modal('open');
    console.log("yei");
  });
  return divPokeImg;
}
const reRender = (x,y) => {
  x.empty();
  y.forEach((e)=>{
    x.append(searchItem(e));
  });

}
const Search = () => {
  const searchSection = $('<section></section>');
  const input = $('<input type="text"></input>');
  const searchItemDiv = $('<div></div>');
  searchSection.append(input);
  searchSection.append(searchItemDiv);
  input.on('keyup',(e)=>{
    const find = filterByDistrict(state.pokedex,input.val());
    reRender(searchItemDiv,find);

  });
  reRender(searchItemDiv,state.pokedex);
  return searchSection;
}
