// Sub-lista do menu "Produtos"
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Fechar navbar ao clicar fora dela
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains("show")) {
        dropdowns[i].classList.remove("show");
      }
    }
  }
}

// Abrir a navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// Fechar a navbar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//
function switchimg(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;  
  expandImg.parentElement.style.display = "block";
}