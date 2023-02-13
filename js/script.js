const id = document.getElementById("id");
const text = document.getElementById("text");
const button = document.getElementById("button");

button.addEventListener("click", getAdvice);

function getAdvice() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const adviceObj = JSON.parse(this.responseText);
    id.innerHTML = adviceObj.slip.id;
    text.innerHTML = "\"" + adviceObj.slip.advice + "\"";
  }
  xhttp.open("GET", "https://api.adviceslip.com/advice", true);
  xhttp.send();
}