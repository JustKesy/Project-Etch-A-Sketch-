let conteiner = document.querySelector(".main");
let divs = [];
for (let i = 0; i < 256; i++) {
  divs[i] = document.createElement("div");
  divs[i].setAttribute(
    "style",
    "  background-color: red; border:1px solid black"
  );
  conteiner.appendChild(divs[i]);
}
console.log(divs.length);
