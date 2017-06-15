'use strict';

const searchItem = (data) => {
  const divPokeImg = $('<div class="divPokeImg"></div>');
  const pokeImg = $('<img src="http://serebii.net/art/th/' + data.entry_number +'.png">');
  const name = $('<p>' + data.pokemon_species.name + '</p>');
  const spanUrl = $('<span>' + data.pokemon_species.url + '</span>');
  divPokeImg.append(spanUrl);
  divPokeImg.append(pokeImg);
  divPokeImg.append(name);
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
  reRender(searchItemDiv,state.pokedex)
  return searchSection;
}
