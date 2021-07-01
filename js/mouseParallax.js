$(document).mousemove(function (e) {
  //console.log(e.clientX);
  //capturo la posicioón del mouse en x
  //lo dividimos en tre 100 para reducir la velocidad de deslazamiento
  var posX = e.clientX / 100;

  //MODIFICANDO LAS POSICIONES DE LAS IMAGENES
  $("#cristiano").css({ "left": 38 + posX / 3 + "%" });
  $("#hazard").css({ "left": 5 - posX / 5 + "%" });
  $("#suarez").css({ "right": 5 - posX / 5 + "%" });
  $("#messi").css({ "right": 13 + posX / 6 + "%" });
  $("#zlatan").css({ "right": 20 + posX / 3 + "%" });
  $("#totti").css({ "right": 30 - posX / 2 + "%" });
  $("#ozil").css({ "left": 34 - posX / 5 + "%" });
  $("#james").css({ "left": 28 + posX / 2 + "%" });
  $("#iniesta").css({ "left": 20 - posX / 2 + "%" });
});