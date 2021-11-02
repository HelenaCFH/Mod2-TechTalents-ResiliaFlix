/* 

function mensagem() {
    if botão click == True , específiaçoes ok {
        return alert/doc.write.. -> Cadastro reaizado! 
    }
} 

let botao = document.queryselector('button');
botao.onclick = mensagem

*/

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

