
    const primaryNav = document.querySelector(".primary-navigation")
const mobileToggler = document.querySelector(".mobile-nav-toggler")

mobileToggler.addEventListener("click",() => {
    const visibility = primaryNav.getAttribute("data-visible")
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        mobileToggler.setAttribute("toClose", true)
    } else {
        primaryNav.setAttribute("data-visible", false)
        mobileToggler.setAttribute("toClose", false)

    }
})

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 


