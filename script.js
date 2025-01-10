const gameboard = {
    firstRow: ["_", " | ", " _ ", " | ", "_"],
    secondRow: ["_", " | ", " _ ", " | ", "_"],
    thirdRow: ["_", " | ", " _ ", " | ", "_"],
    display() {
        console.log(
            this.firstRow.join('') + '\n' +
            this.secondRow.join('') + '\n' +
            this.thirdRow.join('')
        );
    },
};

const player = {
    // player class
};

const game = {
    // game logic
};

gameboard.display();