const img1 = new Image();
const img2 = new Image();
img1.src = 'Anutin01.png';
img2.src = 'Anutin02.png';

let count = 0;
let isSlapped = false;

const counter = document.getElementById('counter');
const character = document.getElementById('character');
const slapSound = document.getElementById('slapSound');

function slap() {
  if (isSlapped) return;
  isSlapped = true;

  count++;
  counter.textContent = count;

  character.src = 'Anutin02.png';

  slapSound.currentTime = 0;
  slapSound.play();

  setTimeout(() => {
    slapSound.pause();
    slapSound.currentTime = 0;
  }, 200);

  setTimeout(() => {
    character.src = 'Anutin01.png';
    isSlapped = false;
  }, 250);
}

document.getElementById('bg').addEventListener('click', slap);
character.addEventListener('click', slap);
