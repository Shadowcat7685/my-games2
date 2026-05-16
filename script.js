const search =
document.getElementById("search");

search.addEventListener("keyup", () => {

  let filter =
  search.value.toLowerCase();

  let cards =
  document.querySelectorAll(".game-card");

  cards.forEach(card => {

    let name =
    card.dataset.name.toLowerCase();

    if(name.includes(filter)){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});

let currentGame = "";

function openGame(url, title){

  currentGame = url;

  document
  .getElementById("popup")
  .classList.remove("hidden");

  document
  .getElementById("gameTitle")
  .innerText = title;

}

function playGame(){

  document
  .getElementById("gameFrame")
  .src = currentGame;

}

function closeGame(){

  document
  .getElementById("popup")
  .classList.add("hidden");

  document
  .getElementById("gameFrame")
  .src = "";

}

function fullscreenGame(){

  let iframe =
  document.getElementById("gameFrame");

  if(iframe.requestFullscreen){
    iframe.requestFullscreen();
  }

}
