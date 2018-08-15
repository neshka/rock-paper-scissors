

function compare (hand1, hand2) {
    if (hand2 === 'paper') {
        //make sure paper is always in hand1
        hand2 = hand1;
        hand1 = 'paper';
    }

    if (hand1 === 'paper' && hand2 === 'rock') {
        return 'paper';
    }

    if (hand1 === 'paper' && hand2 === 'scissors') {
        return 'scissors';
    }
}


module.exports.compare = compare;