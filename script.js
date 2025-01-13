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
        // checks positions for a winner or draw -- return true if so
    },
};

const playerOne = player.create({name: "John", marker: "X", score: 0});
const playerTwo = player.create({name: "Jane", marker: "O", score: 0});

(() => {
    while (true) {
        game.whosTurn();
        const userInput = prompt('Position (1-9): ');
        
        if (userInput > 0 && userInput < 10) {
            const index = gameboard.board.indexOf(userInput);  // cover the taken positions??
            game.putMarker(index);
            gameboard.display();

            if (game.didSomeoneWin == true) {
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
