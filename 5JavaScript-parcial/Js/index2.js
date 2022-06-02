const logadoJson = window.sessionStorage.getItem('logado')
const logado = JSON.parse(logadoJson)
if(logado){
    
    const dadosGuardadosJSON = localStorage.getItem("minhaToDo.listaSober"); 
    const formulario = document.querySelector('form') //puxa todo o formulario
    let listaToDo = Array() // antes era um Array()
    const inputForm = document.querySelector('#inputText') // esta colocando na variavel inputForm as informações do formulario.
    const listaDom = document.querySelector("#ul") // pega o ul do DOM
    let item = {}
    const filtroTeste = document.querySelector('.filter-todo') //pega a opção de uncompleted do filtro/select
    const ToDo = JSON.parse(dadosGuardadosJSON)
    console.log(ToDo)
    
    function mostraNaDom(lista){ //colocando as informções do JSON na DOM
        lista.forEach(item => {
            mostraNaPag(item.texto)
        });
    }
    
    mostraNaDom(ToDo)
    
    formulario.addEventListener('submit', (eventSubmit) =>{ //ao realizar a ação de submit do formulario, realizar essa função
        eventSubmit.preventDefault();
        if (validacaoComum(inputForm.value)){ //se validação for positiva, insere na lista o valor
            inLista(inputForm.value) //funçao de add na lista/array
            mostraNaPag(inputForm.value)
            localStorage.setItem("minhaToDo.listaSober", JSON.stringify(listaToDo));

        }else{
            alert('Por favor escreva algum valor')
        }
        inputForm.value ='';
        
    });
    
    // filtroTeste.addEventListener("click", filtro)
    
    function mostraNaPag(entrada){//cria e mostra os negocio na DOM
        let itemLi = document.createElement('li') //cria um item (da ul)
        let botaoX = document.createElement('button') //botao de excluir
        let botaoOk = document.createElement('button') //botao de tarefa feita
        let divNova = document.createElement('div') //criação da div que engloba todo o resto
    
        //css do li
        itemLi.innerHTML = entrada
        itemLi.classList = "todo-item"
    
        //css do botaoX
        botaoX.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'; //deixa o botao com o X
        botaoX.classList = "trash-btn " //css
        botaoX.id = listaToDo.length;
    
        //css do botao check
        botaoOk.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>' //coloca o check no botao
        botaoOk.classList ="check-btn" //css
        botaoOk.id = listaToDo.length;
        
        //div
        divNova.classList = "todo"
        divNova.id = "div" + listaToDo.length
        divNova.append(itemLi) //aparece o Li
        divNova.append(botaoOk) //aparece o btn ok 
        divNova.append(botaoX) //aparece o btn X
    
        //linkar os elementos
        listaDom.appendChild(divNova)
    
        botaoX.addEventListener('click', (b) =>{
            let botao = b.target;
            let id = parseInt(botao.id)
            for(let i = 0; i < listaToDo.length; i++){
                if(id == listaToDo[i].id){
                     listaToDo.splice(i,1);
                 }
            }console.log(listaToDo)
            // removeDaLista(listaToDo, botaoX)
            let divRemovida = document.querySelector('#div' + id)
            listaDom.removeChild(divRemovida);
            console.log(listaToDo)
            localStorage.setItem("minhaToDo.listaSober", JSON.stringify(listaToDo));
        })
    
        botaoOk.addEventListener('click', (b) => {
            let botao = b.target
            let id = parseInt(botao.id) //transforma o id em int
            for(let i = 0; i < listaToDo.length; i++){
                if(id == listaToDo[i].id){
                    itemLi.classList = "todo-item completed" //risca o que foi feito
                    item.status = "finalizado" //para o filtro
                }
            }console.log(listaToDo)
        })
            
    }
       
    function inLista (entrada){ //add entrada a lista
        item = {
            "id": listaToDo.length + 1,
            "texto": entrada,
            "status": "pendente"
        }
        listaToDo.push(item)
        // localStorage.setItem("minhaToDo.listaSober", JSON.stringify(listaToDo)); 

    }
    
    function validacaoComum(entrada){
        if (entrada !=''){
            return true // a entrada é valida
        }else{
            return false //a entrada esta vazia
        }
    }
    
    function filtro() {
        let atividade = listaToDo.filter((task) => {
            return task.status === "finalizado"
        })
        console.log(atividade)
    }

    const btnDeslog = document.querySelector('#logout')
    btnDeslog.addEventListener('click', function(){
        window.sessionStorage.setItem("logado", false);
        window.location = 'login.html'
    })
        
} else {
    window.location = 'login.html'
}




















// //Funções com promessa para validação, para simplificar, vou usar a validação comum
// function validacao(entrada){ //funçao promessa
//     return  new Promise((resolve, reject) => {
//         if (entrada == ''){ //se entrada estiver vazia, rejeita
//             reject()
//     //     alert("CAMPO VAZIO");
//         }else{ 
//     //     return true;
//             resolve()
//         }
//     })
// }

// function asyncValida(){ 
//     validacao(inputForm.value).then( () => { //resolve
//         return inputForm.value
//     }).catch( () => { //rejeita
//         alert('Preencha com o valor.')
//     })
// }

// function removeDaLista(lista,botao) { 
//     let id = parseInt(botao.target.id) //transforma o id em int
//     // let id = lista.length
//     for(let i = 0; i < lista.length; i++){
//         if(id == lista[i].id){
//             lista.splice(i,1);
//         }
//     }
