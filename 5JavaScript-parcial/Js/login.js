const login = 'sober';
const senha = 'Anna';
let paragrafoErro;

// const div_campos = document.getElementById('campos');

const form = document.querySelector('form');

form.addEventListener('submit', function(event){

    event.preventDefault();

    const inputLogin = form.querySelector('#inputEmail');
    inputLogin.addEventListener('keyup', limpaMensagemErro);

    const inputSenha = form.querySelector('#inputSenha');
    inputSenha.addEventListener('keyup', limpaMensagemErro);

    if (validaLoginSenha(inputLogin, inputSenha)){
        window.sessionStorage.setItem("logado", true);
        window.location = 'index.html';
    }else{
        window.sessionStorage.setItem("logado", false);
    };


});


function limpaMensagemErro(){
  if (paragrafoErro){
    removeChild(paragrafoErro);
    paragrafoErro = null;
  }
}

function validaLoginSenha(inputLogin, inputSenha){

  if ( inputLogin.value === "" ){
    alert("Opa, preciso de um login aqui!");
    return false;
  }

  if ( inputSenha.value === "" ){
    alert("Ue? E a senha?");
    return false;
  }

  if ( inputLogin.value !== login ){
    alert("Bu buu Login inválido!");
    return false;
  }

  if ( inputSenha.value !== senha ){
    alert("aff nao sabe nem a senha");
    return false;
  }

  return true;

}