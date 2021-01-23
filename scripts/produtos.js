document.addEventListener("DOMContentLoaded", function(event) {
  let id = parseInt(String(window.location.href).split("=")[String(window.location.href).split("=").length - 1])
  let path = "json/produtos.json"
  loadJSON(path,
    function(data) {
      document.getElementById("expandedImg").src = data[id - 1]["imagens"][0]["path"]
      let moreImages = document.getElementsByClassName("moreimages")[0]
      moreImages.innerHTML = ""
      for (let i = 0; i < data[id - 1]["imagens"].length; i++) {
        moreImages.innerHTML += `<div class="column"><img src="${data[id - 1]["imagens"][i]["path"]}" style="width:100%" onclick="switchimg(this);">`;
      }
      document.getElementsByClassName("pNameDetalhes")[0].innerHTML = data[id - 1]["nome"]
      document.getElementsByClassName("descricaoDetalhes")[0].innerHTML = data[id - 1]["descricao"]
      document.getElementsByClassName("priceDetalhes")[0].innerHTML = String(data[id - 1]["preco"]).substring(0, String(data[id - 1]["preco"]).length - 2) + "," + String(data[id - 1]["preco"]).slice(-2) + "€"
    },
    function(xhr) {
      console.error(xhr);
    }
  );
});

function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success)
          success(JSON.parse(xhr.responseText));
      } else {
        if (error)
          error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}
