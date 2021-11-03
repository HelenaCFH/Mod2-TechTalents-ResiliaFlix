/*MENSAGEM PREENCHIMENTO CAMPOS*/ 

var sessoesArr = document.querySelectorAll('input');

function validaFormulario() {
    let contador = 0
    for(var i = 0; i < sessoesArr.length; i++) {
        if (sessoesArr[i].value == '') {
            contador += 1;
        }
    }
    if (contador == 0) {
        alert("Cadastro realizado com Sucesso!")
        return true
    } else {
        alert("Favor preencher os dados solicitados para efetivar o cadastro!")
        return false
    }
}

function validaEmail(email) {
    if ((email.toString()).includes('@') == false) {
        alert("Insira um e-mail válido")
    } 
} 


document.getElementById("email").addEventListener('focusout', validaEmail(document.getElementById('email')));
document.getElementById("botaoContinuar").addEventListener('click', validaFormulario);


/*API VIACEP*/ 

const limparFormulario = (endereco) => {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
} 

const preencheFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const cepValido = (cep) => cep.length == 8 && isNaN(cep) == false;

const pesquisaCep = async() => {
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    // fetch(url).then(response => response.json()).then(console.log);
    
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')) {
            alert("CEP não encontrado! Favor inserir um CEP válido");
        } else {
            preencheFormulario(endereco);
        }
    } else {
        alert("CEP não encontrado! Favor inserir um CEP válido");
    }
}

document.getElementById("cep").addEventListener('focusout', pesquisaCep);
