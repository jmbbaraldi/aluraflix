function limparTextBoxes() {
  document.getElementById("inputTitulo").value = "";
  document.getElementById("inputLink").value = "";
}

var filmesPosters = ["https://br.web.img2.acsta.net/r_1280_720/img/86/51/86513ed90118b9d738e65f498c31cfdd.jpg", 
"https://i.pinimg.com/originals/d3/4b/a0/d34ba07d38260fda50cae8fd1fd4fef9.jpg", 
"https://upload.wikimedia.org/wikipedia/pt/8/8b/Superbad_Poster.png", 
"https://bibliotecasma.org/wp-content/uploads/2021/11/R-692x1024.jpg", 
"https://br.web.img2.acsta.net/r_1280_720/pictures/210/140/21014024_20130619225537406.jpg", 
"https://m.media-amazon.com/images/I/71Xt2UpcoBL._AC_UF1000,1000_QL80_.jpg", 
"https://a-static.mlcdn.com.br/450x450/poster-cartaz-o-codigo-da-vinci-b-pop-arte-poster/poparteskins2/15938524788/5f46d8289a4a4f8f6d0164caa3284da6.jpeg", 
"https://img.elo7.com.br/product/original/265780F/big-poster-harry-potter-e-o-enigma-do-principe-lo04-90x60-cm-harry-potter.jpg", 
"https://cdn-cosmos.bluesoft.com.br/products/891705427786", 
"https://assets-prd.ignimgs.com/2022/07/21/oppenheimer-poster-1658411601593.jpeg", 
"https://img.elo7.com.br/product/original/269274A/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo04-90x60-cm-presente-geek.jpg", 
"https://img.elo7.com.br/product/original/3FBBED5/big-poster-filme-batman-2022-90x60-cm-lo004-presente-geek.jpg", 
"https://m.media-amazon.com/images/I/71NPmBOdq7L._AC_UF894,1000_QL80_.jpg",
"https://br.web.img2.acsta.net/c_310_420/pictures/16/04/16/00/25/503456.jpg"];

var filmesNomes = ["Clube da Luta", 
"Django Livre", 
"Superbad", 
"O Jogo da Imitação", 
"Truque de Mestre", 
"O Lobo de Wallstreet",
"O Código Da Vinci", 
"Harry Potter", 
"Interstellar", 
"Oppenheimer", 
"Senhor dos Anéis", 
"Batman", 
"Blade Runner 2049", 
"Cãos de Guerra"]

//Adiciona os filmes do usuário aos vetores de filmes existentes.
document.getElementById("enviar").addEventListener("click", function() {
  var filmeUsuario = document.getElementById("inputTitulo").value;
  var linkUsuario = document.getElementById("inputLink").value;

  if (filmeUsuario && linkUsuario) {
  filmesPosters.push(linkUsuario);
  filmesNomes.push(filmeUsuario);
  }

  renderizarFilmes();
  limparTextBoxes();
})

//Printa os filmes adicionados pelo usuário
function renderizarFilmes() {
  var filmesContainer = document.getElementById("filmesContainer"); // div do html

  if (!filmesContainer) {
    console.error("Elemento 'filmesContainer' não encontrado.");
    return;
  }

  filmesContainer.innerHTML= "";

  //Adiciona os filmes do usuário ao print da tela
  for (var i in filmesPosters) {
    var filmeDiv = document.createElement("div"); //Variáveis auxiliares
    filmeDiv.style.display = "inline-block";
    filmeDiv.style.marginRight = "20px";
    filmeDiv.style.textAlign = "center";

    var filmePrintImg = document.createElement("img"); //Variáveis auxiliares
    filmePrintImg.src = filmesPosters[i];

    var filmePrintNome = document.createElement("p"); //Variáveis auxiliares
    filmePrintNome.style.color = "#FFFFFF";
    filmePrintNome.style.fontFamily = "Roboto Mono";
    filmePrintNome.textContent =  filmesNomes[i];
    
    filmeDiv.appendChild(filmePrintImg);
    filmeDiv.appendChild(filmePrintNome);

    filmesContainer.appendChild(filmeDiv);
  }
}

renderizarFilmes();