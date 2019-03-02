var expect = require("chai").expect;
var sight = require("../app/game.js");

describe("Narration", function(){
    it("describes the room when you enter it", function(){
        let description = "A well-lit room.";
        expect(sight.narrate(description)).to.equal(description);
    });
});
