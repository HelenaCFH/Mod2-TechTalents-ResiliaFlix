document.getElementById("search-form").addEventListener("search", function () { triggerSearch() })//eventListener

function triggerSearch()//eventHandler
{
    let movieArray = createMoviesList()
    let userInput = document.getElementById("search-form").value;
    let userInputLCase = userInput.toLowerCase()
    let askForInput = "Digite um nome!"
    var resultsArray = []

    if (userInput != "")//valida se o input é válido e dá uma mensagem de erro em caso negativo.
    {
        for (let i = 0; i < movieArray.length; i++) 
        {

            if (movieArray[i].includes(userInputLCase)) 
            {
                resultsArray.push(movieArray[i])
            }
        }

        if (resultsArray.length == 0) {
            alert("Filme não encontrado!")
        }
        else 
        {
            for (let i = 0; i < resultsArray.length; i++) 
            {
                switch (resultsArray[i]) 
                {
                    case "a fantástica fábrica de chocolate":
                        document.getElementById("img0").setAttribute("src","img/fabrica.jpg")
                        document.getElementById("link0").style.visibility = "visible"

                        break

                    case "a velha guarda":
                        document.getElementById("img1").setAttribute("src","img/avelha.jpg")
                        document.getElementById("link1").style.visibility = "visible"

                        break

                    case "batman: o cavaleiro das trevas ressurge":
                        document.getElementById("img2").setAttribute("src","img/batman.jpg")
                        document.getElementById("link2").style.visibility = "visible"

                        break

                    case "constantine":
                        document.getElementById("img3").setAttribute("src","img/constantine.jpg")
                        document.getElementById("link3").style.visibility = "visible"

                        break

                    case "harry potter e a pedra filosofal":
                        document.getElementById("img4").setAttribute("src","img/hp.jpg")
                        document.getElementById("link4").style.visibility = "visible"

                        break

                    case "kate":
                        document.getElementById("img5").setAttribute("src","img/kate.jpg")
                        document.getElementById("link5").style.visibility = "visible"

                        break

                    case "marrocos":
                        document.getElementById("img6").setAttribute("src","img/marrocos.jpg")
                        document.getElementById("link6").style.visibility = "visible"

                        break

                    case "matrix":
                        document.getElementById("img7").setAttribute("src","img/matrix.jpg")
                        document.getElementById("link7").style.visibility = "visible"

                        break

                    case "onde vivem os monstros":
                        document.getElementById("img8").setAttribute("src","img/monstros.jpg")
                        document.getElementById("link8").style.visibility = "visible"

                        break

                    case "orgulho e preconceito":
                        document.getElementById("img9").setAttribute("src","img/marrocos.jpg")
                        document.getElementById("link9").style.visibility = "visible"

                        break

                    case "os croods":
                        document.getElementById("img10").setAttribute("src","img/croods.jpg")
                        document.getElementById("link10").style.visibility = "visible"

                        break

                    case "os croods 2":
                        document.getElementById("img11").setAttribute("src","img/croods2.jpg")
                        document.getElementById("link11").style.visibility = "visible"

                        break
                }
            }
        }
    }
    else {
        alert(askForInput)
    }
}

function modifyCards() {



}

function createMoviesList() {
    let moviesList = ["a fantástica fábrica de chocolate", "a velha guarda", "batman: o cavaleiro das trevas ressurge", "constantine", "harry potter e a pedra filosofal", "kate", "marrocos", "matrix", "onde vivem os monstros", "orgulho e preconceito", "os croods", "os croods 2"]
    return moviesList
}