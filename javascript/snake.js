// Snake
// - queue for snake body (queue implemented using Array)
// - draw() function - draw the grid with the snake's body
// - move() function - takes in a direction, manipulate queue

class Snake {
  constructor() {
    this.snakeBody = [
      [4,1], // row, column
      [4,2],
      [4,3],
      [4,4],
    ]; // queue made out of coordinates
  }

  move(direction) {
    // delta represents the change to the coordinate
    // depending on which direction the user wants to go
    // remember the [0, 0] coordinate is at that top left
    // corner, hence why going up is -1
    const delta = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
    };

    const currentHead = this.snakeBody[this.snakeBody.length - 1];
    const [ currRow, currCol ] = currentHead;
    const [ changeRow, changeCol ] = delta[direction];

    const newHead = [ currRow + changeRow, currCol + changeCol ];

    this.snakeBody.push(newHead);
    this.snakeBody.shift();
  }

  draw() {
    const grid = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(' ');
      }
      grid.push(row);
    }

    this.snakeBody.forEach(pos => {
      const [row, col] = pos;

      grid[row][col] = 'O';
    });
  
    console.clear();
    grid.forEach(row => console.log(row.join('|')));
  }

  play() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', (keypress) => {
      if (keypress === 'w') this.move('up');
      if (keypress === 's') this.move('down');
      if (keypress === 'a') this.move('left');
      if (keypress === 'd') this.move('right');
      if (keypress === '\u0003') process.exit();

      this.draw();
    });
  }
}

const game = new Snake();
// game.draw();
// console.log('--------');
// game.move('up');
// game.draw();
// console.log('--------');
// game.move('right');
// game.draw();

game.play();