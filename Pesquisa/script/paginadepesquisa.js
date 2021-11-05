document.getElementById("search-form").addEventListener("search", function(){triggerSearch()})//eventListener

function triggerSearch()//eventHandler
{
    let movieArray = createMoviesList()
    let userInput = storeUserInput();
    let askForInput = "Digite um nome!"

    if (userInput != "")//valida se o input é válido e dá uma mensagem de erro em caso negativo.
    {
        alert ("continuar busca!")//teste de funcionalidade

        for (var i = 0; i < movieArray.length; i++)
        {
            //alert(movieArray[i]) teste de funcionalidade
            
        } 
    }
    else
    {
        alert(askForInput)
    }
}








function createMoviesList()
{
    let moviesList = ["A Fantástica Fábrica de Chocolate", "A Velha Guarda", "Batman: O cavaleiro das trevas ressurge", "Constantine", "Harry Potter e a Pedra Filosofal", "Kate", "Marrocos", "Matrix", "Onde Vivem os Monstros", "Orgulho e Preconceito", "Os Croods", "Os Croods 2"]
    return moviesList
}

function storeUserInput()//pega a string inserida no formulário de busca
{       
        alert("Busca realizada!")

        let userInput = document.getElementById("search-form").value;
        return userInput
        //alert(userInput) teste de funcionalidade
}