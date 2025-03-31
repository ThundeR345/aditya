function reveal() {
  document.querySelector('.merrywrap').style.backgroundColor = 'transparent';

  // Show the cricket-themed message
  const cricketMessage = document.getElementById('cricketMessage');
  cricketMessage.classList.add('visible');

  // Show the balloons
  const balloons = document.querySelectorAll('.balloon');
  balloons.forEach(balloon => {
    balloon.classList.add('visible');
  });

  // Show the photo
  const photo = document.getElementById('photo');
  photo.classList.add('visible');

  // Move balloons away after a delay
  setTimeout(() => {
    balloons.forEach(balloon => {
      balloon.classList.add('moveAway');
    });
  }, 2000); // 2 seconds delay

  loop();

  var w, h;
  if (window.innerWidth >= 1000) {
    w = 295; h = 185;
  } else {
    w = 255; h = 155;
  }

  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "https://www.youtube.com/embed/5u4xTa3LR2U?controls=0&loop=1&autoplay=1");
  ifrm.style.border = 'none';
  document.querySelector('#video').appendChild(ifrm);
}

window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [2000, 2000, 1000, 1000];
  function init() {
    box.addEventListener("click", openBox, false);
  }
  function stepClass(step) {
    merrywrap.className = 'merrywrap';
    merrywrap.className = 'merrywrap step-' + step;
  }
  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {
      reveal();
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();
};