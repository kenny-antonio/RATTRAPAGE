import { expect } from "chai";
import { describe } from "mocha";
import { getMostPopularPlaces } from "../getMostPopularPlaces.js";


describe("Factorial tests", function(){
    it("Doit returner l endroit le plus populaire ", function() {
        expect(getMostPopularPlaces("Analamahitsy","Analamahitsy","Itaosy","Behoririka","Itaosy","Itaosy")).to.eq("Itaosy Analamahitsy");
    });
})