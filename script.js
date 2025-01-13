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
        Object.keys(values).forEach((key) => {
            instance[key] = values[key];
        });
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

        if (
            (gameboard.board[0] === gameboard.board[2] && gameboard.board[2] === gameboard.board[4]) || // top horizontal
            (gameboard.board[5] === gameboard.board[7] && gameboard.board[7] === gameboard.board[9]) || // mid horizontal
            (gameboard.board[10] === gameboard.board[12] && gameboard.board[12] === gameboard.board[14]) || // bottom horizontal
    
            (gameboard.board[0] === gameboard.board[5] && gameboard.board[5] === gameboard.board[10]) || // left vertical
            (gameboard.board[2] === gameboard.board[7] && gameboard.board[7] === gameboard.board[12]) || // mid vertical
            (gameboard.board[4] === gameboard.board[9] && gameboard.board[9] === gameboard.board[14]) || // right vertical
    
            (gameboard.board[0] === gameboard.board[7] && gameboard.board[7] === gameboard.board[14]) || // first diagonal
            (gameboard.board[10] === gameboard.board[7] && gameboard.board[7] === gameboard.board[4])    // second diagonal
        ) {
            this.playerTurn ? console.log('Player One won.') : console.log('Player Two won.');
            return true;

        } else if (isItDraw) {
            console.log('It\'s a draw.')
            return true;

        } else {
            return false;
        }
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
