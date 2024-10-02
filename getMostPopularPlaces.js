 export function getMostPopularPlaces(places){
 let newPlace = [];
 newPlace.push(places);
let result = "";
 for (let i = 0; i < newPlace.length; i++) {
   if (newPlace[i]) {
        result += newPlace[i]
   }
 }
 return result;
}


console.log(getMostPopularPlaces("Analamahitsy","Analamahitsy","Itaosy","Behoririka","Itaosy","Itaosy"));