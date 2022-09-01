import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DateStorage from './dateStorage.js';

function handleForm(e) {
  e.preventDefault();
  hideResults();
  let month = parseInt(document.getElementById("month").value);
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;
  let date = new DateStorage(month, day, year);
  date.findYear();
  date.findMonth();
  date.findDay();
  let error = 0;
  if (month === 2 && date.start[0] === 1) {
    if (day > 29) {
      error = 29;
    }
  } else if (month === 2) {
    if (day > 28) {
      error = 28;
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (day > 30) {
      error = 30;
    }
  }
  if (error != 0) {
    if (error === 28) {
      document.getElementById("error28").removeAttribute("class");
    } else if (error === 29) {
      document.getElementById("error29").removeAttribute("class");
    } else {
      document.getElementById("error30").removeAttribute("class");
    }
    document.getElementById("error").removeAttribute("class");
  } else {
    let outputDay = date.dayStart;
    document.getElementById("results").removeAttribute("class");
    let results = document.getElementById("weekday");
    results.innerText = outputDay;
  } 
}


function hideResults() {
  document.getElementById("error28").setAttribute("class", "hidden");
  document.getElementById("error29").setAttribute("class", "hidden");
  document.getElementById("error30").setAttribute("class", "hidden");
  document.getElementById("results").setAttribute("class", "hidden");
  document.getElementById("error").setAttribute("class", "hidden");
}

window.addEventListener("load", function() {
  document.querySelector("form#date").addEventListener("submit", handleForm);
})
