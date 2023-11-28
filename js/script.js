document.addEventListener("DOMContentLoaded", function () {
  var parallaxElements = document.querySelectorAll(".parallax");

  window.addEventListener("scroll", function () {
    parallaxElements.forEach(function (element) {
      var translateY = window.scrollY * -0.2;
      element.style.transform = "translateY(" + translateY + "px)";
    });
  });
});

//funcion para que el duende verde vaya mas lento en el scroll
window.addEventListener("scroll", function () {
  var greenGoblin = document.querySelector(".green-goblin");

  var translateY = window.scrollY * 0.08; //se le da una velocidad de scroll que se multiplica por el total de scroll vertical
  greenGoblin.style.transform = "translateY(" + translateY + "px)";
});

//Funcion para las 3 tarjetas de spidermans aparezcan cuando se carga su seccion
document.addEventListener("DOMContentLoaded", function () {
  function isInViewport(element) {
    //Funcion para ver si el usuario esta en la seccion de spidermans-cards
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateSpiderCards() {
    var spidercards = document.querySelectorAll(".spiderman-cards div");
    var delay = 0.3;

    spidercards.forEach(function (spidercard, index = 0) {
      if (isInViewport(spidercard)) {
        spidercard.style.animation = `fadeInUp-${
          index + 1
        } 0.5s ease-in-out forwards`; //se le va a dar esa animacion a cada tarjeta de spiderman.
        spidercard.style.animationDelay = delay * index + "s"; //dependiendo de que index sea, se le va a multiplicar x 0.2, y va a terminar siendo el delay para que no lleguen todas juntas.
      }
    });
  }
  window.addEventListener("scroll", animateSpiderCards);
  animateIfVisible();
});

function applyFilters(e, color, borderColor) {
  //Con 'onmouseover' aplicado en el html, hace que se apliquen los filtros para que los otros 2 pidermans tomen blur, y el fondo y borde del contenedor se ponga del color deseado
  document.querySelector("#spidermans-info-section").style.backgroundColor =
    color;
  document.querySelector("#spidermans-info-section").style.borderTop =
    "20px solid " + borderColor;
  document.querySelector("#spidermans-info-section").style.borderBottom =
    "20px solid " + borderColor;
  document
    .querySelectorAll(".spidermans-info-section img")
    .forEach(function (e) {
      if (e.classList.contains(e)) {
        e.classList.remove("blurred");
      } else {
        e.classList.add("blurred");
      }
    });
}

function resetFilters() {
  //Con 'onmouseout' en el html, hacemos que se limpien los filtros que aplicamos previamente asi queda default
  document.querySelector("#spidermans-info-section").style.backgroundColor = "";
  document.querySelector("#spidermans-info-section").style.borderTop =
    "20px solid transparent";
  document.querySelector("#spidermans-info-section").style.borderBottom =
    "20px solid transparent";
  document
    .querySelectorAll(".spidermans-info-section img")
    .forEach(function (e) {
      e.classList.remove("blurred");
    });
}

//Valores y funcion para que el menu hamburguesa cambie a una X, o vuelva a su forma.

const topRect = document.getElementById("topRect");
const middleRect = document.getElementById("midRect");
const bottomRect = document.getElementById("bottomRect");
const menuSvg = document.getElementById("menu-svg");

menuSvg.addEventListener("click", () => {
  middleRect.classList.toggle("hide");
  topRect.classList.toggle("top-rect-inc");
  bottomRect.classList.toggle("bottom-rect-inc");
});

function hidePageContainerShowLoader() {
  var pageContainer = document.getElementById("page-container");
  var loader = document.getElementById("loader");

  pageContainer.style.display = "none";
  loader.style.display = "block";

  setTimeout(function () {
    pageContainer.style.display = "block";
    loader.style.display = "none";
  }, 3000);
}
hidePageContainerShowLoader();

