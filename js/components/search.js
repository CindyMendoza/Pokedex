'use strict';

const searchItem = (data) => {
  const box = $('<div class="box"></div>');
  const dName = $('<p>' + data.name +'</p>');
  const dAddress = $('<p>' + data.address + '</p>');
  const dDistrict = $('<p>' + data.district + '</p>');
  box.append(dName);
  box.append(dAddress);
  box.append(dDistrict);
  return box;
  console.log(dDistrict);
}
const reRender = (x,y) => {
  x.empty();
  y.forEach((elemento)=>{
    x.append(searchItem(elemento));
  });

}
const Search = (update) => {
  const searchSection = $('<section class="searchSection"></section>');
  const input = $('<input type="text" placeholder="Ingresa tu distrito a buscar"></input>');
  const searchItemSection = $('<section class="searchItemSection"></section>');
  searchSection.append(input);
  searchSection.append(searchItemSection);
  input.on('keyup',(e)=>{
    const find = filterByDistrict(state.pokedex,input.val());
    reRender(searchItemSection,find);
    console.log(find);
  });
  return searchSection;
}
