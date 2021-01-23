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
  alert("Sessão iniciada com sucesso!")
  window.location.href = "index.html"
  return false
}

// Lidar com a submissão do formulário de opiniões
function handleOpinionsSubmit() {
  alert("Mensagem enviada com sucesso!")
  window.location.href = "index.html"
  return false
}

// Ver imagens na página de detalhes de produto
function switchimg(imgs) {
  var expandImg = document.getElementById("expandedImg")
  expandImg.src = imgs.src
  expandImg.parentElement.style.display = "block"
}

// Registo
function handleRegisterSubmit() {
  if (document.getElementById("pw").value == document.getElementById("cpw").value) {
    alert("Registo efetuado com sucesso!")
    window.location.href = "login.html"
  } else {
    alert("As passwords não coincidem")
  }
  return false
}

// Editar Perfil
function handleEditProfileSubmit() {
  if (document.getElementById("pw").value == document.getElementById("cpw").value) {
    alert("Dados guardados com sucesso!")
    window.location.href = "index.html"
  } else {
    alert("As passwords não coincidem")
  }
  return false
}

// Carrinho de compras
function atualizarCarrinho(a) {
  if (a.value < 1) {
    a.value = 1
  }

  let priceElement = a.parentElement.nextSibling.nextSibling.firstElementChild
  let originalPrice = a.previousSibling.previousSibling
  let newPrice = parseInt(originalPrice.value) * parseInt(a.value)
  priceElement.innerHTML = String(newPrice).substring(0, String(newPrice).length - 2) + "," + String(newPrice).slice(-2) + "€"
  let precoTotal = 0
  if (document.getElementsByClassName("scart-preco-produto").length > 0) {
    for (let i = 0; i < document.getElementsByClassName("scart-preco-produto").length; i++) {
      precoTotal += parseInt(document.getElementsByClassName("scart-preco-produto")[i].innerHTML.replace("€", "").replace(",", ""))
    }
    document.getElementById("scart-final-price").innerHTML = String(precoTotal).substring(0, String(precoTotal).length - 2) + "," + String(precoTotal).slice(-2) + "€"
  } else {
    document.getElementById("scart-final-price").innerHTML = "0,00€"
  }
}

// Carrinho de compras - remover produto
function removerProduto(a) {
  a.parentElement.parentElement.remove()
  document.getElementsByTagName("hr")[0].remove()
  if (document.getElementsByClassName("scart-quantidade").length > 0) {
    let precoTotal = 0
    if (document.getElementsByClassName("scart-preco-produto").length > 0) {
      for (let i = 0; i < document.getElementsByClassName("scart-preco-produto").length; i++) {
        precoTotal += parseInt(document.getElementsByClassName("scart-preco-produto")[i].innerHTML.replace("€", "").replace(",", ""))
      }
      document.getElementById("scart-final-price").innerHTML = String(precoTotal).substring(0, String(precoTotal).length - 2) + "," + String(precoTotal).slice(-2) + "€"
    } else {
      document.getElementById("scart-final-price").innerHTML = "0,00€"
    }
  } else {
    document.getElementById("scart-final-price").innerHTML = "0,00€"
  }
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
