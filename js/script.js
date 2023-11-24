document.addEventListener("DOMContentLoaded", function () {
    var parallaxElements = document.querySelectorAll('.parallax');

    window.addEventListener("scroll", function () {
        parallaxElements.forEach(function (element) {
            var scrolled = window.scrollY;
            var translateY = scrolled * -0.2;
            element.style.transform = 'translateY(' + translateY + 'px)';
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var titleImage = document.getElementById("dynamicImage");
    var initialHeight = titleImage.clientHeight;
    var initialWidth = titleImage.clientWidth;
    var lastScrollY = 0;

    window.addEventListener("scroll", function () {
        var currentScrollY = window.scrollY;

        var newHeight = initialHeight - currentScrollY;

        newHeight = Math.max(newHeight, 100);

        if (currentScrollY > lastScrollY) {
            newHeight = initialHeight;
        }

        var newWidth = (newHeight / initialHeight) * initialWidth;

        titleImage.style.height = newHeight + "px";
        titleImage.style.width = newWidth + "px";

        var marginLeft = (initialWidth - newWidth) / 2;
        titleImage.style.marginLeft = marginLeft + "px";

        lastScrollY = currentScrollY;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateIfVisible() {
        var cards = document.querySelectorAll('.ghost-spider-section img');

        cards.forEach(function (card, index) {
            if (isInViewport(card)) {
                card.style.animation = 'fall-' + (index + 1) + ' 0.5s ease-in-out forwards';
            }
        });
    }

    window.addEventListener('scroll', animateIfVisible);

    animateIfVisible();
});

function applyFilters(e, color, borderColor) { //Con 'onmouseover' aplicado en el html, hace que se apliquen los filtros para que los otros 2 pidermans tomen blur, y el fondo y borde del contenedor se ponga del color deseado
    document.querySelector('#spidermans-info-section').style.backgroundColor = color;
    document.querySelector('#spidermans-info-section').style.borderTop = '20px solid ' + borderColor;
    document.querySelector('#spidermans-info-section').style.borderBottom = '20px solid ' + borderColor;
    document.querySelectorAll('.spidermans-info-section img').forEach(function (elemento) {
        if (e.classList.contains(e)) {
            e.classList.remove('blurred');
        } else {
            e.classList.add('blurred');
        }
    });
}

function resetFilters() { //Con 'onmouseout' en el html, hacemos que se limpien los filtros que aplicamos previamente asi queda default
    document.querySelector('#spidermans-info-section').style.backgroundColor = '';
    document.querySelector('#spidermans-info-section').style.borderTop = '20px solid transparent';
    document.querySelector('#spidermans-info-section').style.borderBottom = '20px solid transparent';
    document.querySelectorAll('.spidermans-info-section img').forEach(function (e) {
        e.classList.remove('blurred');
    });
}