//NAVBAR
//NAV ICON
function navOut() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//NAVBAR FUNCTIONS
var btns = document.getElementsByClassName('btns');
var pages = document.getElementsByClassName('page');
var pageIndex = 1;
changePage(pageIndex);

function changePage(n){
  for(var i = 0; i < pages.length; i++){
    pages[i].style.display = "none";
    btns[i].style.backgroundColor = "#777";
  }
  pages[n -1].style.display = "block";
  btns[n -1].style.backgroundColor = "#333";
}

//IMAGES 
var change = 1;
var slideIndex = change;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


//WORKS/////======\\\\\\WORKS/
var nBtn = document.getElementsByClassName('nBtn');
var workIndex = 2;
swiWork(workIndex);
function swiWork(n){
  var works = document.getElementsByClassName('works');
  for(var i = 0; i < works.length; i++){
    works[i].style.display = "none";
    nBtn[i].style.backgroundColor = "#777";
  }
  works[n -1].style.display = "block";
  nBtn[n -1].style.backgroundColor = "#333";
}
