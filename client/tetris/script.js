document.addEventListener('DOMContentLoaded', () => {
  const width = 10;
  const grid = document.querySelector('.grid');
  const squares = Array.from(document.querySelectorAll('.grid div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-button');
  const lTetrimino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ];

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ];

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ];

  const theTetriminos = [lTetrimino, zTetromino, tTetromino, oTetromino, iTetromino];

  let currentPosition = 4;
  const currentRotation = 0;
  const random = Math.floor(Math.random() * theTetriminos.length);
  console.log(theTetriminos[0][0]);
  const current = theTetriminos[random][currentRotation];

  function draw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.add('tetrimino');
    });
  }
  function undraw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.remove('tetrimino');
    });
  }

  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
  }
  timerId = setInterval(moveDown, 1000);
});
