//efeito topo
var rellax = new Rellax('.rellax')


//efeito scroll
const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else (
        element.classList.remove("animate")
    )
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});

//carrosel
const swiper = new Swiper('.swiper', {
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},

loop: true, pagination: {
    el: '.swiper-pagination',clickable: true,
},

navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

});

//time

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  
  setInterval(function() {

    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    if(--timer < 0) {
      timer = duration;
    }

  }, 1000);

}

window.onload = function() {
  var duration = 60 * 24; // conversao para segundos
  var display = document.querySelector("#timer") // elemento para exibir o time

  startTimer(duration, display); //inicia a função


}