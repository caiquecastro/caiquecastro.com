(function(doc, undefined){
  var menu_toggle = doc.getElementById("menu-toggle"),
      menu        = doc.getElementById("menu");

  menu_toggle.addEventListener("click", function () {
    menu.classList.toggle("shown");
  });
}(document));