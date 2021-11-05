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
        //alert (userInputLCase) teste de funcionalidade

        for (let i = 0; i < movieArray.length; i++) {
            //alert(movieArray[i])

            if (movieArray[i].includes(userInputLCase)) 
            {
                resultsArray.push(movieArray[i])
                //alert (resultsArray)
            }
        }

        if (resultsArray.length == 0) {
            alert("Filme não encontrado!")
        }
        else 
        {
            alert(resultsArray)

            for (let i = 0; i < resultsArray.length; i++) 
            {
                //console.log(resultsArray.length)
                switch (resultsArray[i]) 
                {
                    case "a fantástica fábrica de chocolate":
                        document.getElementById("img0").setAttribute("src","img/filmefabrica.jpg")
                        document.getElementById("link0").style.visibility = "visible"

                        alert("a fantástica fábrica de chocolate")
                        break

                    case "a velha guarda":
                        document.getElementById("img1").setAttribute("src","img/filmeavelha.jpg")
                        document.getElementById("link1").style.visibility = "visible"

                        alert("a velha guarda")
                        break

                    case "batman: o cavaleiro das trevas ressurge":
                        document.getElementById("img2").setAttribute("src","img/filmebatman.jpg")
                        document.getElementById("link2").style.visibility = "visible"

                        alert("batman: o cavaleiro das trevas ressurge")
                        break

                    case "constantine":
                        document.getElementById("img3").setAttribute("src","img/filmeconstantine.jpg")
                        document.getElementById("link3").style.visibility = "visible"

                        alert("constantine")
                        break

                    case "harry potter e a pedra filosofal":
                        document.getElementById("img4").setAttribute("src","img/filmehp.jpg")
                        document.getElementById("link4").style.visibility = "visible"

                        alert("harry potter e a pedra filosofal")
                        break

                    case "kate":
                        document.getElementById("img5").setAttribute("src","img/filmekate.jpg")
                        document.getElementById("link5").style.visibility = "visible"

                        alert("kate")
                        break

                    case "marrocos":
                        document.getElementById("img6").setAttribute("src","img/filmemarrocos.jpg")
                        document.getElementById("link6").style.visibility = "visible"

                        alert("marrocos")
                        break

                    case "matrix":
                        document.getElementById("img7").setAttribute("src","img/filmematrix.jpg")
                        document.getElementById("link7").style.visibility = "visible"

                        alert("matrix")
                        break

                    case "onde vivem os monstros":
                        document.getElementById("img8").setAttribute("src","img/filmemonstros.jpg")
                        document.getElementById("link8").style.visibility = "visible"

                        alert("onde vivem os monstros")
                        break

                    case "orgulho e preconceito":
                        document.getElementById("img9").setAttribute("src","img/filmemarrocos.jpg")
                        document.getElementById("link9").style.visibility = "visible"

                        alert("orgulho e preconceito")
                        break

                    case "os croods":
                        document.getElementById("img10").setAttribute("src","img/filmemarrocos.jpg")
                        document.getElementById("link10").style.visibility = "visible"

                        alert("os croods")
                        break

                    case "os croods 2":
                        document.getElementById("img11").setAttribute("src","img/filmemarrocos.jpg")
                        document.getElementById("link11").style.visibility = "visible"

                        alert("os croods 2")
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

//modifyCards()