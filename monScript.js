// appel avant le chargement complet de la page
$(document).ready(function()
{
  // on cache le sous menu avec la fonction hide()
  $("div.sousMenu").hide();

  // puis on ajoute un écouteur d'évènement la fonction click(function())
  $("p.menuPrincipal").click(function()
  {
    /*ouverture de sous menu enfant de p "menu principal", avec slideDown on
      fait apparaître le sous menu et avec slideUp on le fait disparaître. siblings
      c'est un effet d'ouverture */
    $(this).next("div.sousMenu").slideDown(300).siblings("div.sousMenu").slideUp("slow");
  });
});
