var expect = require("chai").expect;
var sight = require("../app/game.js");

describe("Game Map", function(){
    it("creates a game map", function(){
        expect(sight.returnGameMap().length).to.equal(1);
    });
    it("describes the room", function(){
        let arr = sight.returnGameMap();
        expect(arr[0].desc).to.equal("A small, well-lit room.");
    });
});
