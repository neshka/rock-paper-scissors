var expect    = require("chai").expect;
var rules = require("../app/rules");

describe("rules of the game", function() {
  describe("there is a winner", function() {
    it("paper vs rock", function() {
        var winner = rules.compare('paper', 'rock');
        expect(winner).to.equal('paper')
    });
  });

});