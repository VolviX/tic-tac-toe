const gameboard = {
    firstRow: ['_', ' | ', ' _ ', ' | ', '_'],
    secondRow: ['_', ' | ', ' _ ', ' | ', '_'],
    thirdRow: ['_', ' | ', ' _ ', ' | ', '_'],
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
    // game logic
};

gameboard.display();
const playerOne = player.create({name: "John", marker: "X", score: 0});
const playerTwo = player.create({name: "Jane", marker: "O", score: 0});