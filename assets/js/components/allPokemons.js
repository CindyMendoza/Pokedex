'use strict';

const allPokemons = () => {
  const section = $("<section class='container'></section>");
  const h1 =$("<div class='row flex-row'><h1 class='txt-red'>Pokédex</h1></div>");
  const rowDiv =$("<div class='row flex-row'></div>");
  const divGroup =$("<div class='col-sm-6 input-group'></div>");
  const spanAddon =$("<span class='input-group-addon' id='basic-addon1'><i class='glyphicon glyphicon-search'></i></span>");
  const input = $("<input type='text' class='form-control'  aria-describedby='basic-addon1'>");
  const h3 =$("<h3 class='col-sm-offset-4'><span class='label label-success'>A-Z</span></h3>");


  section.append(h1);
  section.append(rowDiv);
  rowDiv.append(divGroup);
  divGroup.append(spanAddon);
  divGroup.append(input);
  rowDiv.append(h3);
  return section;
}
