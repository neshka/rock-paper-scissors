

function compare (hand1, hand2) {
    if (hand1 === 'paper' && hand2 === 'rock')
        return 'paper';

    if (hand1 === 'paper' && hand2 === 'scissors')
        return 'scissors';
}


module.exports.compare = compare;