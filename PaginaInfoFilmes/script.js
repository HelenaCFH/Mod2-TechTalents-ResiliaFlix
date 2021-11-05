//Pega o parametro no link da pagina
let nomeFilme = location.search;
nomeFilme = nomeFilme.substr(11, nomeFilme.length);

//Chamando API
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://www.omdbapi.com/?apikey=d4d80c73&t=Kate&plot=full", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
xhttp.send();
xhttp.onload = () => {
    if (xhttp.status === 200) {
        var infoFilme = xhttp.response;
    } else {
        alert("Ocorreu um erro durante a requisição.");
    }
}

//EXEMPLO
let imagemContainer = document.getElementById("imagem-container");
let img = document.createElement("img");
img.src = infoFilme.Poster;
imagemContainer.appendChild(img);