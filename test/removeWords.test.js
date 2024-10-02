import { expect } from "chai";
import { describe } from "mocha";
import { removeWords } from "../removeWords.js";


describe("Factorial tests", function(){
    it("Doit retourner un String sans les mots similaire", function() {
        expect(removeWords("Hello, ceci est un test" , [ "ceci" , " un "])).to.eq("Hello, est test");
    });
    it("return le meme mot, car le mot a enlever n est pas pareil ", function() {
        expect(removeWords("Hello Java ", [ "java"])).to.eq("Hello Java");
    });
})