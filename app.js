const btnEl = document.querySelector("#btn");

const paraEl = document.querySelector("#para");
const authorEl = document.querySelector("#author");

const URL = "https://api.quotable.io/random";

const getData = async () => {
  try {
    paraEl.innerText = `Loading data...`;
    authorEl.innerHTML = `<i>Author : Loading data...</i>`;
    // authorEl.style.visibility = "hidden";
    btnEl.innerText = "Updating...";
    const response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    paraEl.innerText = `"${data.content}"`;
    authorEl.style.visibility = "visible";
    authorEl.innerHTML = `<i>Author : ${data.author}</i>`;
    btnEl.innerText = "GET A QUOTE";
  } catch (error) {
    console.log("an error occurred, try again later");
    btnEl.innerText = `get a quote`;
    paraEl.innerText = `an error occurred, try again later`;
    authorEl.innerHTML = `<i>an error occurred</i>`;
  }
};

btnEl.addEventListener("click", getData);
