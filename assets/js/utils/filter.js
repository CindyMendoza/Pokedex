'use strict';

const filter = (dataName,inputVal) => {
   return dataName.filter((x)=>{
    const e = x.pokemon_species.name.toLowerCase().indexOf(inputVal.toLowerCase()) != -1;
    return e;
  });

}
