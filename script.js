let conteiner = document.querySelector(".main");
let grid;

function changeBackground(e) {
  e.target.setAttribute(
    "style",
    "  background-color: blue; border:1px solid black"
  );
}

function removeChild() {
  let nodeList = document.querySelectorAll(".main>div");
  let nodeListArr = Array.from(nodeList);
  for (let i = 0; i < nodeList.length; i++) {
    conteiner.removeChild(nodeListArr[i]);
  }
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
  removeChild();
  grid = prompt(
    "Let's make a new grid!\nGrid = X * X;\nX can't be > 100 or =0 \nSET X.."
  );
  if (+grid >= 100 || +grid === 0 || grid === "") {
    alert("It's not acceptable value");
  } else if (+grid > 0 && +grid < 100) {
    conteiner.setAttribute(
      "style",
      `background-color: aqua;border: 5px solid black;padding: 5px;height: 960px;width: 960px;margin-top: 35px;display: grid;grid-template-columns: repeat(${+grid}, 1fr);grid-template-rows: repeat(${+grid}, 1fr)`
    );
    for (let i = 0; i < +grid * +grid; i++) {
      divs[i] = document.createElement("div");
      divs[i].setAttribute(
        "style",
        "  background-color: red; border:1px solid black"
      );
      conteiner.appendChild(divs[i]);
      divs.forEach((div) =>
        div.addEventListener("mouseover", changeBackground)
      );
    }
  }
}
