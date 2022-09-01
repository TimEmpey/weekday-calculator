import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DateStorage from './dateStorage.js';

function handleForm(e) {
  e.preventDefault();
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;
  let date = new DateStorage(month, day, year);
  date.findYear();
  date.findMonth();
  date.findDay();
  let outputDay = date.dayStart;
  document.getElementById("results").removeAttribute("class");
  let results = document.getElementById("weekday");
  results.innerText = outputDay;
}

document.querySelector("form#date").addEventListener("submit", handleForm);