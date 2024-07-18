let count = 0;

function cc(card) {
    if (card >= 2 && card <= 6) {
        count++;
    } else if (card === '10' || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count--;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

function processCard() {
    const cardInput = document.getElementById('cardInput').value;
    const result = cc(cardInput);
    document.getElementById('result').innerText = result;
}
