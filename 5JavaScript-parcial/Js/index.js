
const formIn = document.querySelector('form'); //le o formulario da DOM
const lista = document.querySelector(".todo-list") //le a lista da DOM (ul)
const dados = localStorage.getItem('lista'); 

const listToDo = JSON.parse(dados);  

const testeProcura = document.querySelector('.select')

const pressButtonPlus = function(eventSubmit){
    eventSubmit.preventDefault();

    //pegar o input da lista

    let addText = formIn.querySelector('#inputText')//.value; //pega o valor escrito na area de input

    

    let ok = validacao(addText.value)
    
    if (ok == true){   
    
        //criar o elemento tarefa 
        let item = {
            id:listToDo.length + 1,
            texto: addText,
            status: "pendente"
        }
    
        newItem(addText);

        //criar um "to do" da lista
        let li1 = document.createElement('li');
        li1.innerHTML = addText.value;
        li1.classList = "todo-item";

        //criar o botao de check
        let butaoFeito = document.createElement('button') //botao criado
        butaoFeito.classList = "check-btn"; //coloca uma classe nesse botao
        butaoFeito.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>'; //coloca o desenhinho
        butaoFeito.id = listToDo.length; //coloca no id do botao o numero da "fila" em que ele esta para conseguir identificar o "to do" que será clicado
        //le a ação de clicar e 
        butaoFeito.addEventListener('click', function(b){
             
            let botao = b.target;
            let id = parseInt(botao.id) ;
 
          // tickar elemento da lista
            for(let i = 0; i < listToDo.length; i++){
                if(id == listToDo[i].id){
                    li1.classList = "todo-item completed"; //coloca classe
                    item.status = "Finalizado" // altera o status no objeto
                }
            } console.log(item) 
            console.log(listToDo)
        })

        let butaoX = document.createElement('button')
        butaoX.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        butaoX.classList = "trash-btn";
        butaoX.id = listToDo.length;

        butaoX.addEventListener('click', function(b){
             
            let botao = b.target;
            let id = parseInt(botao.id) ;
     
              //  excluir elemento da lista
            for(let i = 0; i < listToDo.length; i++){
                if(id == listToDo[i].id){
                     listToDo.splice(i,1);
                 }
            }console.log(listToDo)

            //remover elemento da tela
            let divRemovida = document.querySelector('#div'+id)
            lista.removeChild(divRemovida);
          });
    
        let diva = document.createElement('div'); // criar elementos a div
        diva.classList = "todo";
        diva.id = 'div'+ listToDo.length;
        diva.append(li1); //coloca o li na div
        diva.append(butaoFeito); // coloca o botao na div
        diva.append(butaoX); // coloca o botao na div

        lista.append(diva); //coloca a div na lista(ul)

        //ordem: div > ul(lista) > diva > li, btn
    
        document.querySelector("#inputText").value ='';
    

    }

  

}

formIn.addEventListener('submit', pressButtonPlus);

function validacao(text){
    if(text == ''){ //validar para que o input nao venha vazio
        alert('precisa colocar uma tarefa');  
    }else{
        return true;
    }
    
} // ta funcionando

function newItem(texto){
    let item = {
        id:listToDo.length + 1,
        texto: texto.value,
        status: "pendente"
    }

    listToDo.push(item);
        
    const dadosJson = JSON.stringify(listToDo); //converter em json
    localStorage.setItem('lista', dadosJson);

} // ta funcionando

function newTags(){
    let butaoFeito = document.createElement('button')
    butaoFeito.classList = "check-btn";
    butaoFeito.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';

    let butaoX = document.createElement('button')
    butaoX.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
    butaoX.classList = "trash-btn";
    butaoX.id = listToDo.length;

    butaoX.addEventListener('click', function(b){
             
        let botao = b.target;
        let id = parseInt(botao.id) ;
 
          //  excluir elemento da lista
        for(let i = 0; i < listToDo.length; i++){
            if(id == listToDo[i].id){
                 listToDo.splice(i,1);
             }
        }

        //remover elemento da tela
        let divRemovida = document.querySelector('#div'+id)
        lista.removeChild(divRemovida);
      });
       diva = document.createElement('div'); // add elementos a div
      diva.classList = "todo"
      diva.id = 'div'+ listToDo.length;
      diva.append(li1);
      diva.append(butaoFeito);
      diva.append(butaoX);

      lista.append(diva); //add a div a lista
} // nops


function pressButtonOk(butaoFeito){
    const listOk = butaoFeito.addEventListener('click', function(b){
             
        let botao = b.target;
        let id = parseInt(botao.id) ;
 
          //  excluir elemento da lista
        for(let i = 0; i < listToDo.length; i++){
            if(id == listToDo[i].id){
                console.log('ahoy')
             }
        }
    })
// function pressButtonTrash(){
//     const deleteText = document.getElementById('inputText').value
//     alert(addText) 
} // nops

function filter(){
    let finalizadas = item.filter((item) =>{
        return item.status === "Finalizado"
    })
}

    
const filtros = () =>{
        let filtro1 = document.querySelector(".filter-todo")
        // let option = 
        console.log(filtro1)
}

function criar_li(addText){
    let li1 = document.createElement('li');
    li1.innerHTML = addText;
    li1.classList = "todo-item";
}


