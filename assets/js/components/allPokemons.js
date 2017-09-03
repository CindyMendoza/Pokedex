'use strict';

const fmodal= (data,description,altura,peso,catego,habili,tipo,debilidad)=>{
  console.log(habili);
  const modalp =$(`<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel"></div>`);
  const dialog = $('<div class="modal-dialog modal-lg" role="document"></div>');
  const content =$('<div class=\'modal-content\'></div>');
  const body =$(`<div class="modal-body">
                <div class="row">
                <div class="col-xs-10 flex-column">
                <h2 class='h2 modal-title'>${data.pokemon_species.name}</h2></div>
                <div class="col-xs-2 flex-column"><button type="button" class="close"
                data-dismiss="modal" aria-label="Close">
                <span class="fa fa-times fa-lg" aria-hidden="true"></span></button></div>
                </div>
                <div class="row">
                <div class="col-xs-5 flex-column">
                <div class="flex-column divcont">
                <div class="divImg">
                <img src='https://serebii.net/art/th/${data.entry_number}.png' alt=""></div>
                <div class="trapecio flex-column">
                <div class="flex-row divico">
                <img class="ico" src="assets/icon/pokeball_gray.png">
                <img class="ico" src="assets/icon/valentines-heart.png">
                <img class="ico" src="assets/icon/data.png"></div></div></div></div>
                <div class="col-xs-7">
                <p>${description}</p>
                <div class="flex-row"><span><p>Altura:<br>${(altura/10).toFixed(1)}m</p>
                <p>Peso:<br>${(peso/10).toFixed(1)}Kg</p></span>
                <span><p>Categoria:<br>${catego}</p>
                <p>Habilidad:${habili.toString()}</span></div>
                </div>
                </div></div>`);
  modalp.append(dialog);
  dialog.append(content);
  content.append(body);
  return modalp;
}

const poke = (unPoke) => {


  const divCont = $('<a class=\'flex-column divcont\'></a>');
  const divImg = $('<div class="divImg"></div>');
  const img = $(`<img src='https://serebii.net/art/th/${unPoke.entry_number}.png' alt="">`);
  const trapecio = $('<div class=\'trapecio flex-column\'></div>');
  const divIco =$('<div class=\'flex-row divico\'></div>');
  const pokBol =$('<img class=\'ico\' src=\'assets/icon/pokeball_gray.png\'>');
  const coraz =$('<img class=\'ico\' src=\'assets/icon/valentines-heart.png\'>');
  const flecha = $('<img class=\'ico\' src=\'assets/icon/data.png\'>');
  const span = $(`<span class='name'>${unPoke.pokemon_species.name}</span>`);



  divCont.click(function(){
        // $('#myModal').empty();

        $.getJSON(unPoke.pokemon_species.url, function(result){

              state.descrip = result.flavor_text_entries[3].flavor_text;
              state.catego = result.genera[2].genus;
              $.getJSON(result.varieties[0].pokemon.url,(result2)=>{

                state.altura = result2.height;
                state.peso = result2.weight;
                result2.abilities.forEach(function(e){
                  return $.getJSON(e.ability.url,(i)=>{
                    state.habili.push(i.names[2].name);
                    return state.habili;
                  });
                });
                console.log(state.habili);
              result2.types.forEach(function(x){
                return  $.getJSON(x.type.url,(y)=>{
                    return state.tipo.push(y.names[4].name), y.damage_relations.double_damage_from.forEach((z)=>{
                      return $.getJSON(z.url,(a)=>{
                        state.debilidad.push(a.names[4].name);
                        return state.debilidad;
                      });

                    });
                  });
                });

                // return state.altura,state.peso;

              });
              // $('#myModal').empty();

              // return console.log(state.descrip,state.catego,state.altura,state.peso,state.catego,state.habili,state.tipo,state.debilidad);


            })
            .done(function(data2) {
              $('.modal').empty();
              fmodal(unPoke,state.descrip,state.altura,state.peso,state.catego,state.habili,state.tipo,state.debilidad).modal();

              })
            .fail(function( jqxhr, textStatus, error ) {
                alert( jqxhr, textStatus, error );
            });

          });

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
     const find = FilterbyName(state.pok.pokemon_entries,input.val());
     reRender(divPok,find);
   });
  reRender(divPok,state.pok.pokemon_entries);

  return section;
}
