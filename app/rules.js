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
                return scissors;
                break;
            case lizard:
                return lizard;
                break;
            default:
                return paper;
        } 
    }

    if (hand1 === rock) {
        switch (hand2) {
            case paper:
                return paper;
                break;
            case spock:
                return spock;
                break;
            default:
                return rock;
        }
    } 

    if (hand1 === scissors) {
        switch (hand2) {
            case rock:
                return rock;
                break;
            case spock:
                return spock;
                break;
            default:
                return scissors;
        }
    } 

    if (hand1 === lizard) {
        switch (hand2) {
            case rock:
                return rock;
                break;
            case scissors:
                return scissors;
                break;
            default:
                return lizard;
        }
    } 

    if (hand1 === spock) {
        switch (hand2) {
            case paper:
                return paper;
                break;
            case lizard:
                return lizard;
                break;
            default:
                return spock;
        }
    }
}

module.exports.compare = compare;