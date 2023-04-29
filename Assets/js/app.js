let point = 0;

document.addEventListener("keydown", () => {
  score.innerText = point;
  if (dino.classList !== "dinoActive") {
    dino.style.display = "flex";
    shame.style.display = "none";
    cactusDiv.classList.add("cactusActive");
    dino.classList.add("dinoActive");
    dinoEnd.src = "./Assets/img/dino.gif";
    point += 10;
  }
  setTimeout(() => {
    dino.classList.remove("dinoActive");
  }, 500);
});

let bingBang = setInterval(() => {
  let dinoBottom = parseInt(getComputedStyle(dino).bottom);
  let cactusLeft = parseInt(getComputedStyle(cactusDiv).left);

  if (cactusLeft < 250 && cactusLeft > 0 && dinoBottom < 80) {
    point = 0;
    cactusDiv.classList.remove("cactusActive");
    dinoEnd.src = "./Assets/img/end.gif";
    shame.style.display = "flex";
    shameEnd.src = "https://i.pinimg.com/originals/f8/89/1e/f8891ef65e086abc67e5b448acb8bc12.gif";
  }
});

setInterval(() => {
  let cactusChance = Math.floor(Math.random() * 3);
  if (cactusChance == 0) {
    cactus.src = "./Assets/img/cactus1.png";
  } else if (cactusChance == 1) {
    cactus.src = "./Assets/img/cactus4.png";
  } else if (cactusChance == 2) {
    cactus.src = "./Assets/img/cactus3.png";
  }
}, 1200);
