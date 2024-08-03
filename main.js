import './style.css'

const casilla1 = document.querySelector('#casilla1');
const casilla2 = document.querySelector('#casilla2');
const casilla3 = document.querySelector('#casilla3');
const casilla4 = document.querySelector('#casilla4');
const casilla5 = document.querySelector('#casilla5');
const casilla6 = document.querySelector('#casilla6');
const casilla7 = document.querySelector('#casilla7');
const casilla8 = document.querySelector('#casilla8');
const casilla9 = document.querySelector('#casilla9');
const player = document.querySelector('#player');

let casillas = ['', '', '', '', '', '', '', '', ''];
let turno = 'player1';

casilla1.addEventListener('click', playTurn);
casilla2.addEventListener('click', playTurn);
casilla3.addEventListener('click', playTurn);
casilla4.addEventListener('click', playTurn);
casilla5.addEventListener('click', playTurn);
casilla6.addEventListener('click', playTurn);
casilla7.addEventListener('click', playTurn);
casilla8.addEventListener('click', playTurn);
casilla9.addEventListener('click', playTurn);

function playTurn(event) {
    let id = event.target.id;
    let pos = id.split('')[id.length - 1];
    console.log(pos);
    if (turno === 'player1') {
        event.srcElement.innerHTML = 'X';
        casillas[pos - 1] = 'x';
        if (checkWin(casillas)) {
            alert('Player1 wins');
        }
        turno = 'player2';
        player.innerText = 'player2';
    } else {
        event.srcElement.innerHTML = 'O';
        casillas[pos - 1] = 'o';
        if (checkWin(casillas)) {
            alert('Player2 wins');
        }
        turno = 'player1';
        player.innerText = 'player1';
    }
    console.log(casillas);
}

function checkWin(casillas) {
    if (casillas[0] === casillas [1] && casillas[1] === casillas[2] && casillas[0] !== '' && casillas[2] !== '' && casillas[1] !== '') {
        return true;
    }
    if (casillas[3] === casillas [4] && casillas[4] === casillas[5] && casillas[3] !== '' && casillas[5] !== '' && casillas[4] !== '') {
        return true;
    }
    if (casillas[6] === casillas [7] && casillas[7] === casillas[8] && casillas[6] !== '' && casillas[8] !== '' && casillas[7] !== '') {
        return true;
    }
    if (casillas[0] === casillas [3] && casillas[3] === casillas[6] && casillas[0] !== '' && casillas[6] !== '' && casillas[3] !== '') {
        return true;
    }
    if (casillas[1] === casillas [4] && casillas[4] === casillas[7] && casillas[1] !== '' && casillas[7] !== '' && casillas[4] !== '') {
        return true;
    }
    if (casillas[2] === casillas [5] && casillas[5] === casillas[8] && casillas[2] !== '' && casillas[8] !== '' && casillas[5] !== '') {
        return true;
    }
    if (casillas[0] === casillas [4] && casillas[4] === casillas[8] && casillas[0] !== ''  && casillas[8] !== '' && casillas[4] !== '') {
        return true;
    }
    if (casillas[2] === casillas [4] && casillas[4] === casillas[6] && casillas[2] !== '' && casillas[6] !== '' && casillas[4] !== '') {
        return true;
    }
    if(casillas.every(c => c !== '')) {
        alert('El juego ha quedado empatado');
        return false;
    }

    return false;
}
