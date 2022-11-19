const img = {
    65: "./img/sponge1.jpg",
    83: "./img/boss1.jpg",
    68: "./img/gary1.jpg",
    70: "./img/karen1.jpg",
    71: "./img/patrick1.jpg",
    72: "./img/plankton1.jpg",
    74: "./img/sandy1.jpg",
    75: "./img/sponge2.jpg",
    76: "./img/squid1.jpeg",
    90: "./img/patrick1.jpg"
  }

  function playsound(dataKey) {
      const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
      const key = document.querySelector(`div[data-key="${dataKey}"]`);

    if(!audio) return;
    audio.currentTime = 0; // rewind to the start 
    key.style.backgroundImage = `url(${img[dataKey]})`

    setTimeout(() => {
      key.style.backgroundImage = '';
    }, 500);
    audio.play();
    key.classList.add('playing');

  }
  function removeTransition(e) {
    if(e.type === 'transitionend') {
      this.classList.remove('playing');
    }
}

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', function(e) {
    playsound(e.keyCode);
  });
  window.addEventListener('click', function(e) {
    const k = e.target.closest('.key').dataset.key;
    playsound(k)
  });