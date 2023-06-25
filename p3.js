const dice = document.querySelector('.dice');
const holdButton = document.querySelector('.hold');
const reset = document.querySelector('.reset')
let activePlayer = 0;
let currentScore = 0;
let p = [0, 0]
const playerWin = () => {
    document.querySelector(`.player--${activePlayer}`).classList.add('player-winner');
    current = 0;
    alert(`${activePlayer + 1}   is Win`)
    document.querySelector('.dice').classList.add('hidden')

}
document.querySelector('.rolldice').addEventListener('click', function () {
    const random = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${random}.png`
    if ((p[activePlayer] <= 10)) {
        if (random != 1) {
            currentScore += random;
            document.querySelector(`#p${activePlayer}Score`).textContent = currentScore;
        }
        else {
            currentScore = 0;
            document.querySelector(`#p${activePlayer}Score`).textContent = currentScore;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
            activePlayer = activePlayer === 0 ? 1 : 0;
            document.querySelector(`.player--${activePlayer}`).classList.add('player-active');
        }
    }
    else {
        playerWin();
        document.querySelector(`#p${activePlayer}Score`).textContent = currentScore;


    }
}
)
holdButton.addEventListener('click', function () {
    p[activePlayer] += currentScore;
    document.querySelector(`.p${activePlayer}Total`).textContent = p[activePlayer];

    if (p[activePlayer] < 10) {
        currentScore = 0;
        document.querySelector(`#p${activePlayer}Score`).textContent = currentScore;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player-active')
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player-active');
    }
    else {
        document.querySelector(`.p${activePlayer}Total`).textContent = p[activePlayer];
        currentScore = 0;
        document.querySelector(`#p${activePlayer}Score`).textContent = currentScore;
        playerWin();
    }

})
reset.addEventListener('click', function () {
    document.querySelector('.dice').classList.remove('hidden')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player-active')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player-winner')
    document.querySelector(`.p${activePlayer}Total`).textContent = 0;
    document.querySelector(`#p${activePlayer}Score`).textContent = 0;
    activePlayer = activePlayer == 1 ? 0 : 1;
    document.querySelector(`.player--${activePlayer}`).classList.add('player-active')
    document.querySelector(`.p${activePlayer}Total`).textContent = 0;
    document.querySelector(`#p${activePlayer}Score`).textContent = 0
    currentScore = 0;
    activePlayer = 0;
    p[0] = 0; p[1] = 0;


})

