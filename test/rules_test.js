var expect = require("chai").expect;
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

    it("paper vs lizard", function() {
        var winner = rules.compare('paper', 'lizard');
        expect(winner).to.equal('lizard')
    });

    it("paper vs spock", function() {
    var winner = rules.compare('paper', 'spock');
        expect(winner).to.equal('paper')
    });

    it("rock vs paper", function() {
        var winner = rules.compare('rock', 'paper');
        expect(winner).to.equal('paper')
    });

    it("rock vs scissors", function() {
        var winner = rules.compare('rock', 'scissors');
        expect(winner).to.equal('rock')
    });

    it("rock vs lizard", function() {
        var winner = rules.compare('rock', 'lizard');
        expect(winner).to.equal('rock')
    });

    it("rock vs spock", function() {
        var winner = rules.compare('rock', 'spock');
        expect(winner).to.equal('spock')
    });

    it("scissors vs rock", function() {
        var winner = rules.compare('scissors', 'rock');
        expect(winner).to.equal('rock')
    });

    it("scissors vs paper", function() {
        var winner = rules.compare('scissors', 'paper');
        expect(winner).to.equal('scissors')
    });

    it("scissors vs lizard", function() {
        var winner = rules.compare('scissors', 'lizard');
        expect(winner).to.equal('scissors')
    });

    it("scissors vs spock", function() {
        var winner = rules.compare('scissors', 'spock');
        expect(winner).to.equal('spock')
    });

    it("spock vs scissors", function() {
        var winner = rules.compare('spock', 'scissors');
        expect(winner).to.equal('spock')
    });

    it("spock vs rock", function() {
        var winner = rules.compare('spock', 'rock');
        expect(winner).to.equal('spock')
    });

    it("spock vs paper", function() {
        var winner = rules.compare('spock', 'paper');
        expect(winner).to.equal('paper')
    });

    it("spock vs lizard", function() {
        var winner = rules.compare('spock', 'lizard');
        expect(winner).to.equal('lizard')
    });

    it("lizard vs scissors", function() {
        var winner = rules.compare('lizard', 'scissors');
        expect(winner).to.equal('scissors')
    });

    it("lizard vs rock", function() {
        var winner = rules.compare('lizard', 'rock');
        expect(winner).to.equal('rock')
    });

    it("lizard vs paper", function() {
        var winner = rules.compare('lizard', 'paper');
        expect(winner).to.equal('lizard')
    });

    it("lizard vs spock", function() {
        var winner = rules.compare('lizard', 'spock');
        expect(winner).to.equal('lizard')
    });

  });

});
