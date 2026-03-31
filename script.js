let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusText = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

const winConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    cells[index].innerText = currentPlayer;

    checkWinner();
}

function checkWinner() {
    let won = false;

    for (let condition of winConditions) {
        let [a, b, c] = condition;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            won = true;
            break;
        }
    }

    if (won) {
        statusText.innerText = "🎉 Player " + currentPlayer + " Wins!";
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusText.innerText = "😅 It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = "Player " + currentPlayer + "'s Turn";
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;

    cells.forEach(cell => cell.innerText = "");
    statusText.innerText = "Player X's Turn";
}