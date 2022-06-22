const button = document.querySelector('.btn');
const color = document.querySelector('.header__hex');

const hexPalette = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', () => {
  let hexColor = hexGen();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function hexGen() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hexPalette[getRandomNumber()];
  }

  return hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hexPalette.length);
}
