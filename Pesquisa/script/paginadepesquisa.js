document.getElementById("search-form").addEventListener("search", function(){triggerSearch()})//eventListener

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

        for (let i = 0; i < movieArray.length; i++)
        {
            //alert(movieArray[i]) teste de funcionalidade
            if (movieArray[i].includes(userInputLCase))
            {
                resultsArray.push(movieArray[i])
                //alert (resultsArray)
            }
            else
            {
                continue
            }
        }

        if(resultsArray.length == 0)
        {
            alert("Filme não encontrado!")
        }
        else
        {
            return resultsArray
        }
    }
    else
    {
        alert(askForInput)
    }
}

function createCards()
{
    let addLI = []
    var addA = []

    for(let i = 0; i<resultsArray.length; i++)
    {
        addLI[i] = new boot
    }
}

function createMoviesList()
{
    let moviesList = ["a fantástica fábrica de chocolate", "a velha guarda", "batman: o cavaleiro das trevas ressurge", "constantine", "harry potter e a pedra filosofal", "kate", "marrocos", "matrix", "onde vivem os monstros", "orgulho e preconceito", "os croods", "os croods 2"]
    return moviesList
}