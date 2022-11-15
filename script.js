let conteiner = document.querySelector(".main");
let grid;

function changeBackground(e) {
  e.target.setAttribute(
    "style",
    "  background-color: blue; border:1px solid black"
  );
}

let divs = [];

for (let i = 0; i < 256; i++) {
  divs[i] = document.createElement("div");
  divs[i].setAttribute(
    "style",
    "  background-color: red; border:1px solid black"
  );
  conteiner.appendChild(divs[i]);
}

divs.forEach((div) => div.addEventListener("mouseover", changeBackground));

let gridBtn = document.querySelector(".grid-size");

gridBtn.addEventListener("click", newGrid);

function newGrid(grid) {
  grid = prompt("New grid = X * X\nSet 'X'; X need to be <100!!");
}
