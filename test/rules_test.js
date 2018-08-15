var expect    = require("chai").expect;
var rules = require("../app/rules");

describe("rules of the game", function() {
  describe("there is a winner", function() {
    it("paper vs rock", function() {
        var winner = rules.compare('paper', 'rock');
        expect(winner).to.equal('paper')
    });
    
    it("paper vs scissors", function() {
        var winner = rules.compare('paper', 'scissors');
        expect(winner).to.equal('scissors')
    });

    it("rock vs paper", function() {
        var winner = rules.compare('rock', 'paper');
        expect(winner).to.equal('paper')
    });

    it("rock vs scissors", function() {
        var winner = rules.compare('rock', 'scissors');
        expect(winner).to.equal('rock')
    });

  });

});