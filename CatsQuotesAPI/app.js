const button = document.querySelector("button");
const fact = document.querySelector(".quote");

const url = "https://cat-fact.herokuapp.com/facts";

button.addEventListener("click", getQuote);

async function getQuote() {
  const response = await fetch(url);
  const data = await response.json();
  let randomNumber = Math.floor(Math.random() * 6);
  console.log(data);

  fact.innerText = data[randomNumber].text;
}
