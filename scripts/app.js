// Sub-lista do menu "Produtos"
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show")
}

// Fechar navbar ao clicar fora dela
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content")
    for (var i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains("show")) {
        dropdowns[i].classList.remove("show")
      }
    }
  }
}

// Abrir a navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px"
}

// Fechar a navbar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
}

// Redirecionar para a página principal quando o utilizador carregar no botão da loja
document.getElementsByClassName("nomedaloja")[0].addEventListener("click", function(event) {
  window.location.href = "index.html"
});

// Lidar com a submissão do formulário de login
function handleAuthenticationSubmit() {
  window.location.href = "index.html"
  return false
}

// Ver imagens na página de detalhes de produto
function switchimg(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

// Registo
function handleRegisterSubmit() {
  alert("yo")
  if (document.getElementById("pw").value == document.getElementById("cpw").value) {
    // Register successful
  } else {
    // Not successful
  }
  return false
}

// Checkout
let pop = document.getElementById("popup");
let counter = 5;
let id;

function ClosePop() {
  pop.style.opacity = "0";
  counter = 5
}

// Adicionar ao "carrinho"
function AddToCart() {
  pop.style.opacity = "1";
  id = setInterval(function() {
    counter--;
    if (counter < 0) {
      clearInterval(id);

      pop.style.opacity = "0";
      counter = 5;
    }
  }, 1000);
}
