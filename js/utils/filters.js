'use strict';

const filterByDistrict = (pokedex,query) => {
   return pokedex.filter((x)=>{
    const ele = x.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
    return ele;
  });

}
