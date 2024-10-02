export function removeWords(original , wordsToRemove) {
    let Result=[];
    let newString =[];

    for (let i = 0 ; i <wordsToRemove.length; i++){
        for (let index = 0; index <original.length; index++) {
            newString.push(original);
           if (wordsToRemove[i] == newString) {
                newString.splice(wordsToRemove[i]);
                Result.push(newString);
           }
           return newString;
        }
}
    
}

console.log(removeWords("Hello, ceci est un test" , [ "ceci" , " un "])); 