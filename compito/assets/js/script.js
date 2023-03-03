// Fade in effect

window.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('general-cnt');
  element.classList.add('fade-in');
});


// Sliding colors in navbar

window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  const black = document.querySelector('.black-btn');
  const scroll = window.scrollY;

  if (scroll > 330) {
    nav.classList.add('whiteNav');
    black.classList.add('greenBtn');
  } else {
    nav.classList.remove('whiteNav');
    black.classList.remove('greenBtn');
  }
});

// Moving svg

const svg = document.querySelectorAll('svg g');

function randomM (letter) {
  return letter [Math.floor(Math.random() * letter.length)];
}

function randomLetters() {
  const chooseM = randomM(Array.from(svg));
  if(chooseM.classList.contains('show')) {
    chooseM.classList.remove('show');
  } else {
    chooseM.classList.add('show');
  } 
}

setInterval(randomLetters, 10);

