'use strict';


const poke = (unPoke) => {
  console.log(unPoke.pokemon_species.name);
  const divCont = $('<div class=\'flex-column divcont\'></div>');
  const divImg = $('<div class="divImg"></div>');
  const img = $(`<img src='https://serebii.net/art/th/${unPoke.entry_number}.png' alt="">`);
  const trapecio = $('<div class=\'trapecio flex-column\'></div>');
  const divIco =$('<div class=\'flex-row divico\'></div>');
  const pokBol =$('<img class=\'ico\' src=\'assets/icon/pokeball_gray.png\'>');
  const coraz =$('<img class=\'ico\' src=\'assets/icon/valentines-heart.png\'>');
  const flecha = $('<img class=\'ico\' src=\'assets/icon/data.png\'>');
  const span = $(`<span class='name'>${unPoke.pokemon_species.name}</span>`);
  divCont.append(divImg);
  divImg.append(img);
  divCont.append(trapecio);
  trapecio.append(divIco);
  divIco.append(pokBol);
  divIco.append(coraz);
  divIco.append(flecha);
  trapecio.append(span);


  return divCont;
}
const reRender = (div,data) => {
  div.empty();
  data.forEach((e)=>{
    div.append(poke(e));
  });

}
const allPokemons = () => {
  const section = $("<section class='container'></section>");
  const h1 =$("<div class='row flex-row'><h1 class='txt-red'>Pokédex</h1></div>");
  const rowDiv =$("<div class='row flex-row'></div>");
  const divGroup =$("<div class='col-sm-6 input-group'></div>");
  const spanAddon =$("<span class='input-group-addon' id='basic-addon1'><i class='glyphicon glyphicon-search'></i></span>");
  const input = $("<input type='text' class='form-control' placeholder='Ingresa el nombre de tu pokemón' aria-describedby='basic-addon1'>");
  const h3 =$("<h3 class='col-sm-offset-4'><span class='label label-success'>A-Z</span></h3>");
  const divPok = $("<div class='row flex-row'></div>");

  section.append(h1);
  section.append(rowDiv);
  rowDiv.append(divGroup);
  divGroup.append(spanAddon);
  divGroup.append(input);
  rowDiv.append(h3);
  section.append(divPok);
  input.on('keyup',(e)=>{
     const find = filter(state.pok.pokemon_entries,input.val());
     reRender(divPok,find);
   });
  reRender(divPok,state.pok.pokemon_entries);

  return section;
}
// const searchItem = (data) => {
//   const box = $('<div class="box"></div>');
//   const dName = $('<p>'+data.name+'</p>');
//   const dAddress = $('<p>'+data.address+'</p>');
//   const dDistrict = $('<p>'+data.district+'</p');
//   box.append(dName);
//   box.append(dAddress);
//   box.append(dDistrict);
//   return box;
// }
// const reRender = (x,y) => {
//   x.empty();
//   y.forEach((elemento)=>{
//     x.append(searchItem(elemento));
//   });
//
// }
// const Search = (update) => {
//   const searchSection = $('<section class="searchSection"></section>');
//   const input = $('<input type="text" placeholder="Ingresa tu distrito a buscar"></input>');
//   const searchItemSection = $('<section class="searchItemSection"></section>');
//   searchSection.append(input);
//   searchSection.append(searchItemSection);
//   input.on('keyup',(e)=>{
//     const find = filterByDistrict(state.stations,input.val());
//     reRender(searchItemSection,find);
//     console.log(find);
//   });
//   return searchSection;
// }
