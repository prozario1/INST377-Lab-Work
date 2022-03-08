document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('grid');
  const doodler = document.querySelector('div');

  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add('doodler');
    doodlerLeftSpace = platforms[0].left;
    doodler.style.left = `${doodlerLeftSpace}px`;
    doodler.style.bottom = `${doodlerBottomSpace}px`;
  }
});