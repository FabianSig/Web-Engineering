let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(index) {
    
    checkWin();
    if(board[index] === ''){
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerHTML = currentPlayer;
        
        if(checkWin()) {
            alert(currentPlayer + " won!");
        }
        if(currentPlayer === 'X') currentPlayer = 'O';
        else{ currentPlayer = 'X'}


    }
    
    
}

function checkWin() {

    if ((board[0] === board[1] && board[1] === board[2] && board[0] !== '') ||
        (board[3] === board[4] && board[4] === board[5] && board[3] !== '') ||
        (board[6] === board[7] && board[7] === board[8] && board[6] !== '') ||
        (board[0] === board[3] && board[3] === board[6] && board[0] !== '') ||
        (board[1] === board[4] && board[4] === board[7] && board[1] !== '') ||
        (board[2] === board[5] && board[5] === board[8] && board[2] !== '') ||
        (board[0] === board[4] && board[4] === board[8] && board[0] !== '') ||
        (board[2] === board[4] && board[4] === board[6] && board[2] !== '')
    ) {
        return true;
    }

    return false;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];

    for(let i = 0; i < 9; i++){
        
        document.getElementsByClassName("cell")[i].innerHTML = '';
    }
}
