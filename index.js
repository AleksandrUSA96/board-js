const board = document.querySelector('#board');
const colours = ['#00ff6a', '#7200ff', '#ff0000', '#00ffc8', '#00ff6a', '#04ff00', '#0400ff', '#ff00e0']
const SQUARES_NUMBER = 330;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square);
}

const setColor = (square) => {
    const color = getRandomColour();
    square.style.backgroundColor = color;
    square.style.boxShadow = `5px -2px 3px ${color}, 12px -3px 0.5em ${color}`;
    colours.forEach(() => {
        setTimeout(() => {
            const color = getRandomColour();
            square.style.backgroundColor = color;
            square.style.boxShadow = `5px -2px 3px ${color}, 12px -3px 0.5em ${color}`;
        }, 200)
    })
}

const removeColor = (square) => {
        setTimeout(() => {
            square.style.backgroundColor = '#1d1d1d';
            square.style.boxShadow = `0 0 2px #000`;
        }, 2000)
}

const getRandomColour = () => {
    const index = Math.floor(Math.random() * colours.length)
    return colours[index];
}