function continueGame() {
    // step 1: generate a rendom alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet)

    // display show alphabet
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet;

    // set bg color
    setBackgroudColor(alphabet)
}


function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}
