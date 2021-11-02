function enviarEmail() {
    var toastLive = document.getElementById('toast-confimacao');
    var toast = new bootstrap.Toast(toastLive);
    toast.show();
}

function mudarSenha () {
    var novaSenha = document.getElementById('nova-senha');
    var repitaNovaSenha = document.getElementById('repita-nova-senha');
    
    if (novaSenha.value === repitaNovaSenha.value){
        let toastLive = document.getElementById('toast-confimacao');
        let toast = new bootstrap.Toast(toastLive);
        toast.show();
    } else {
        let toastLive = document.getElementById('toast-erro');
        let toast = new bootstrap.Toast(toastLive);
        toast.show();
    }
}
