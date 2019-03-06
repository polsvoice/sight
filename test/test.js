var expect = require("chai").expect;
var sight = require("../app/game.js");

describe("Game Map", function(){
    it("creates a game map", function(){
        expect(sight.returnGameMap()).to.be.an("Array");
    });
    let arr = sight.returnGameMap();
    it("describes the room", function(){
        expect(arr[0][0].desc).to.equal("A small, well-lit room.");
    });
    it("describes a second room", function(){
        expect(arr[0][1].desc).to.equal("A sparse kitchen. There is a toaster here.");
    });
});
