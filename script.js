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

// carrosel

let totalSlides = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;

let sliderWidth = document.querySelector(".slider").clientWidth;

document.querySelector(".slider--width").style.width = `${
  sliderWidth * totalSlides
}px`;

document.querySelector(".slider--controls").style.width = `${sliderWidth}px`;
document.querySelector(".slider--controls").style.height = `${
  document.querySelector(".slider").clientHeight
}px`;

function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}
function goNext() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector(".slider--item").clientWidth;
  let newMargin = currentSlide * sliderItemWidth;
  document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000);