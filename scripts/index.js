
const name = document.querySelector(".rubricOne")

function openRubricOne() {
  window.open('images/Assignment_1_Rubric.png')
}

function openRubricTwo() {
  window.open('images/Assignment_2_Rubric.png')
}

function openRubricThree() {
  window.open('images/Assignment_3_Rubric.png')
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
