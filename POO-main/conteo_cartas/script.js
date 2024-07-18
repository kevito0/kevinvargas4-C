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

function processCards() {
    const cardInput = document.getElementById('cardInput').value;
    const cards = cardInput.split(',').map(card => card.trim());
    let results = [];
    cards.forEach(card => {
        const result = cc(card);
        results.push(`${card}: ${result}`);
    });
    const finalResult = count > 0 ? `${count} Bet` : `${count} Hold`;
    results.push(`Resultado final: ${finalResult}`);
    document.getElementById('result').innerText = results.join('\n');
}
