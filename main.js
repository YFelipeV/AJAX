function peticionAjax() {
  var miAjax = new XMLHttpRequest();
  var form = document.querySelector("#form1");
  var fd = new FormData(form);
  form.onsubmit = (e) => {
    e.preventDefault();
    miAjax.open("GET", "respuesta.php");
    miAjax.onload = function () {
      document.querySelector("#solucion").innerHTML = miAjax.responseText;
    };
    miAjax.send();
  };
}

function peticionAjax2() {
  var miAjax1 = new XMLHttpRequest();
  var form = document.querySelector("#form1");
  var fd = new FormData(form);
  form.onsubmit = (e) => {
    e.preventDefault();
    miAjax1.open("POST", "respuesta.php");
    miAjax1.onload = function () {
      document.querySelector("#solucion").innerHTML = miAjax1.responseText;
    };

    miAjax1.send(fd);
  };
}
