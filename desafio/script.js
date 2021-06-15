function msg1() {
    alert("evento keydown add");
  }

  function cor1() {
    var obj = document.getElementById("dv1");
    obj.style.backgroundColor = "#fff";
  }

  var px = 0;
  var py = 0;

  function move() {
    var obj = document.getElementById("dv1"); //colocando  quadrado na função para ser movido
    var tecla = event.keyCode; //keyCode serve para obter o código da tecla que foi mencionada
    //37 = esquerda - 38 = cima - 39 = direita - 40 = baixo - 13 = enter

    if (tecla == 37) {
      px -= 10;
      obj.style.left = px + "px";
    } else if (tecla == 38) {
      py -= 10;
      obj.style.top = py + "px";
    } else if (tecla == 39) {
      px += 10;
      obj.style.left = px + "px";
    } else if (tecla == 40) {
      py += 10;
      obj.style.top = py + "px";
    } else if (tecla == 13) {
      alert("evento keydown removido");
      document.removeEventListener("keydown", move);
      var obj = document.getElementById("dv1");
      obj.style.backgroundColor = "#f00";
    }
  }

  function addEvents() {
    var obj = document.getElementById("dv1");
    obj.addEventListener("click", msg1);
    obj.addEventListener("click", cor1);
    obj.addEventListener("click", move);
    document.addEventListener("keydown", move);
  }

  window.addEventListener("click", addEvents);