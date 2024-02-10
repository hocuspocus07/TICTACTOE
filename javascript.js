let gameover = false;
function CompChoice() {
    setTimeout(() => {
        let rows, cols;
        do {
            cols = parseInt(3 * Math.random());
            rows = parseInt(3 * Math.random());
        } while (document.getElementById(`${cols}-${rows}`).innerHTML != '');
        document.getElementById(`${cols}-${rows}`).innerHTML = 'X';
        if (win()) {
            document.getElementById('result').innerHTML = "COMPUTER WINS!";
            gameover = true;
        }
    }, 1000);
}
function UserChoice(div) {
    if (div.innerHTML === '') {
        div.innerHTML = 'O';
        if (win()) {
            document.getElementById('result').innerHTML = "USER WINS!";
            gameover = true;
        } else {
            CompChoice();
            if (win()) {
                document.getElementById('result').innerHTML = "COMPUTER WINS!";
                gameover = true;
            }
        }
    }
}
function win() {
    for (let i = 0; i < 3; i++) {
        if ((document.getElementById(`${i}-0`).textContent === 'X' &&
            document.getElementById(`${i}-1`).textContent === 'X' &&
            document.getElementById(`${i}-2`).textContent === 'X') ||
            (document.getElementById(`0-${i}`).textContent === 'X' &&
                document.getElementById(`1-${i}`).textContent === 'X' &&
                document.getElementById(`2-${i}`).textContent === 'X')) {
            return true;
        }
    }
    if ((document.getElementById('0-0').textContent === 'X' && document.getElementById('1-1').textContent === 'X' && document.getElementById('2-2').textContent === 'X') || (document.getElementById('0-2').textContent === 'X' && document.getElementById('1-1').textContent === 'X' && document.getElementById('2-0').textContent === 'X')) {
        return true;
    }
    for (let i = 0; i < 3; i++) {
        if ((document.getElementById(`${i}-0`).textContent === 'O' &&
            document.getElementById(`${i}-1`).textContent === 'O' &&
            document.getElementById(`${i}-2`).textContent === 'O') ||
            (document.getElementById(`0-${i}`).textContent === 'O' &&
                document.getElementById(`1-${i}`).textContent === 'O' &&
                document.getElementById(`2-${i}`).textContent === 'O')) {
            return true;
        }
    }
    if ((document.getElementById('0-0').textContent === 'O' && document.getElementById('1-1').textContent === 'O' && document.getElementById('2-2').textContent === 'O') || (document.getElementById('0-2').textContent === 'O' && document.getElementById('1-1').textContent === 'O' && document.getElementById('2-0').textContent === 'O')) {
        return true;
    }
    return false;
}
while (!gameover) {
    CompChoice();
    if (win()) {
        gameover = true;
        break;
    }

    UserChoice();
    if (win()) {
        gameover = true;
        break;
    }
}
function reset() {
    let gridElements = document.querySelectorAll('.gridelement');
    gridElements.forEach(element => {
        element.innerHTML = '';
    });
    document.getElementById('result').innerHTML = '';
    gameover=false;
}
function HeadingAnimation(){
    let heading=document.getElementById('heading').innerText;
    for(let i=0;i<=heading.length;i++){
        setTimeout(() => {
            let char=heading.slice(i);
            let prefix=heading.slice(0,i);
            let newname=char+prefix;
            document.getElementById('heading').innerText=newname;     
        }, i*500);
    }
}