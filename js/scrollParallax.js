//generarnos un movimiento a la ventana
$(window).scroll(function () {
  //capturando pageYOffset el movimiento en Y de la barra scroll
  //console.log(window.pageYOffset);
  posY = window.pageYOffset;
  //moviendo el estadio
  $("#bloque2").css({ "top": -180 - posY / 3 + "px" });
  $("#cristiano").css({ "top": -250 + posY / 5 + "px" });

  //moviendo los slider de los grupos
  //manipulamos el margin por que en el css tiene margin auto
  $("#grupos").css({ "margin-left": -100 + posY / 3.3 + "%" })

  //condicion para centrar

  //console.log(posY);
  //console.log($("#bloque2").offset().top);

  if (posY > $("#bloque2").offset().top) {
    $("#grupos").css({ "margin": "auto" });
  }

  $("#estadios").css({ "margin-left": 200 - posY / 5.6 + "%" });
  //esto me genera el scroll horizontal modificamos el css
  //overflow-x: hidden;

  if (posY > $("#bloque3").offset().top) {
    $("#estadios").css({ "margin": "auto" });
  }

});
