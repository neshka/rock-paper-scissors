var paper = 'paper';
var rock = 'rock';
var scissors = 'scissors';
var lizard = 'lizard';
var spock = 'spock';
var draw = 'draw'

function compare(hand1, hand2) {
    if (hand1 === hand2) {
        return draw;
    }

    if (hand1 === paper) {
        switch (hand2) {
            case scissors:
            case lizard:
                return hand2;
            default:
                return paper;
        }
    }

    if (hand1 === rock) {
        switch (hand2) {
            case paper:
            case spock:
                return hand2;
            default:
                return rock;
        }
    }

    if (hand1 === scissors) {
        switch (hand2) {
            case rock:
            case spock:
                return hand2;
            default:
                return scissors;
        }
    }

    if (hand1 === lizard) {
        switch (hand2) {
            case rock:
            case scissors:
                return hand2;
            default:
                return lizard;
        }
    }

    if (hand1 === spock) {
        switch (hand2) {
            case paper:
            case lizard:
                return hand2;
            default:
                return spock;
        }
    }
}

module.exports.compare = compare;
