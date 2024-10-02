const play = document.querySelector('.about__play');
const video = document.querySelector('.about__video video')

play.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', 'controls');
  play.classList.add('about__play--hidden');
})

function customScrollFunction(id, top) {
  document.getElementById(id).addEventListener('click', () => {
    window.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    })
  })
}

customScrollFunction("portfolio", 900)
customScrollFunction("team", 2562)
customScrollFunction("blog", 3700)
customScrollFunction("contacts", 6000)