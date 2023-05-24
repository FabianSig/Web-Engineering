let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(index) {
    
    if(board[index] === ''){
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerHTML = currentPlayer;
        
        if(currentPlayer === 'X') currentPlayer = 'O';
        else{ currentPlayer = 'X'}

    }
    
    
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];

    for(let i = 0; i < 9; i++){
        
        document.getElementsByClassName("cell")[i].innerHTML = '';
    }
}
