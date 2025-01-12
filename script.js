const gameboard = {
    firstRow: ['1', ' | ', '2', ' | ', '3'],
    secondRow: ['4', ' | ', '5', ' | ', '6'],
    thirdRow: ['7', ' | ', '8', ' | ', '9'],
    display() {
        console.log(
            this.firstRow.join('') + '\n' +
            this.secondRow.join('') + '\n' +
            this.thirdRow.join('')
        );
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
    turn() {
        if (this.playerTurn) {
            console.log('Player One\'s turn');
        } else {
            console.log('Player Two\'s turn');
        }

        while (true) {
            const userInput = prompt('Position (1-9): ');

            if (userInput > 0 && userInput < 10) {
                if (userInput > 0 && userInput < 4) {
                    // first row
                    const index = gameboard.firstRow.indexOf(userInput);
                    
                    if (this.playerTurn) {
                        gameboard.firstRow[index] = playerOne.marker;
                    } else {
                        gameboard.firstRow[index] = playerTwo.marker;
                    }
                } else if (userInput > 3 && userInput < 7) {
                    // second row
                    const index = gameboard.secondRow.indexOf(userInput);
                    
                    if (this.playerTurn) {
                        gameboard.secondRow[index] = playerOne.marker;
                    } else {
                        gameboard.secondRow[index] = playerTwo.marker;
                    }
                } else {
                    // third row
                    const index = gameboard.thirdRow.indexOf(userInput);
                    
                    if (this.playerTurn) {
                        gameboard.thirdRow[index] = playerOne.marker;
                    } else {
                        gameboard.thirdRow[index] = playerTwo.marker;
                    }
                }
                this.playerTurn = !this.playerTurn;
                gameboard.display();
                break
            } else {
                console.log('Invalid position, try again.')
            }
        }
    },
    didSomeoneWin() {
        // checks positions for a winner or draw
    },
};

gameboard.display();
const playerOne = player.create({name: "John", marker: "X", score: 0});
const playerTwo = player.create({name: "Jane", marker: "O", score: 0});
game.turn();