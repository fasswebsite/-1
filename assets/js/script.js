const mapa = document.querySelector("#mapa-svg");

const estados = mapa.querySelectorAll(".estado");

const boxes = document.querySelectorAll(".box");

const estadoAtual = document.querySelector('#estado');

const select = document.querySelector('#seletorCombo');

function hiddenBox() {
  boxes.forEach((element) => element.classList.remove("on"));
}

function removeActive() {
  estados.forEach((element) => element.classList.remove("active"));
}

function showBox(id) {
  hiddenBox();
  for (let x = 0; x < boxes.length; x++) {
    if (boxes[x].id === id) {
      boxes[x].classList.add("on");
      estadoAtual.innerHTML = boxes[x].getAttribute('data-title');
    }
  }
}

function activeMapa(id) {
  for (let x = 0; x < estados.length; x++) {
    if (estados[x].id === id) {
      estados[x].classList.add("active");
    }
  }
}

for (let b = 0; b < estados.length; b++) {
  estados[b].addEventListener("click", function (e) {
    // e.preventDefault();
    // e.stopImmediatePropagation();
    // e.stopPropagation();
    removeActive();
    this.classList.add("active");
    let id = e.target.id;
    showBox(id);
  });
}

select.addEventListener("change", function (e) {
    // e.preventDefault();
    // e.stopImmediatePropagation();
    // e.stopPropagation();
    removeActive();
    let id = this.value;
    showBox(id);
    activeMapa(id);
  });