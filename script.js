const gameboard = {
    board: ['1', ' | ', '2', ' | ', '3', 
            '4', ' | ', '5', ' | ', '6', 
            '7', ' | ', '8', ' | ', '9'],
    display() {
        console.log(`
            ${this.board.slice(0, 5).join('')}\n
            ${this.board.slice(5, 10).join('')}\n
            ${this.board.slice(10).join('')}
        `);
    },
};

const player = {
    create(values) {
        const instance = Object.create(this);
        Object.assign(instance, values);
        return instance;
    },
};

const game = {
    playerTurn: true, // true for X and false for O
    putMarker(index) {
        if (this.playerTurn) {
            gameboard.board[index] = playerOne.marker;
        } else {
            gameboard.board[index] = playerTwo.marker;
        }
    },
    whosTurn() {
        if (this.playerTurn) {
            console.log('Player One\'s turn');
        } else {
            console.log('Player Two\'s turn');
        }
    },
    didSomeoneWin() {
        const locationsToCheck = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; 
        const isItDraw = locationsToCheck.every(num => !gameboard.board.includes(num));
    
        const WINNING_COMBINATIONS = [
            [0, 2, 4], // Top row
            [5, 7, 9], // Middle row
            [10, 12, 14], // Bottom row
            [0, 5, 10], // Left column
            [2, 7, 12], // Middle column
            [4, 9, 14], // Right column
            [0, 7, 14], // Diagonal
            [10, 7, 4], // Diagonal
        ];
    
        const winnerFound = WINNING_COMBINATIONS.some((combo) => {
            const [a, b, c] = combo;
            return (
                gameboard.board[a] === gameboard.board[b] &&
                gameboard.board[b] === gameboard.board[c] &&
                (gameboard.board[a] === playerOne.marker || gameboard.board[a] === playerTwo.marker)
            );
        });
    
        if (winnerFound) {
            console.log(this.playerTurn ? 'Player One won!' : 'Player Two won!');
            return true;
        }
    
        if (isItDraw) {
            console.log('It\'s a draw.');
            return true;
        }
    
        return false; // If no win or draw, continue the game
    },
};

const playerOne = player.create({name: "John", marker: "X", score: 0});
const playerTwo = player.create({name: "Jane", marker: "O", score: 0});

(() => {
    while (true) {
        game.whosTurn();
        const userInput = prompt('Position (1-9): ');
        
        if (userInput > 0 && userInput < 10) {

            if (!gameboard.board.includes(userInput)) {
                console.log('Position is already taken, try again.');
                continue;
            }

            const index = gameboard.board.indexOf(userInput);
            game.putMarker(index);
            gameboard.display();

            if (game.didSomeoneWin()) {
                break
            }

            game.playerTurn = !game.playerTurn;

        } else if (userInput === null) {
            break

        } else {
            console.log('Invalid position, try again.')
        }
    }
})();
