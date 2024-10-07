//Acessa o objeto"document" que representa a página html
//Seleciona o elemento com o id indicado do formulário
document
    .getElementById("formulario-registro")
    
    //adiciona o ouvinte de evento (submit) para capturar o envio do formulário
    .addEventListener("submit", function (event){

        //previne o comportamento padrão do formulário, ou seja, impede que ele seja enviado e recarreguea página.
        event.preventDefault();

        //captura os valores dos campos do formulário

        const name = document.getElementById("nome");
        const cpf = document.getElementById("cpf");
        const email = document.getElementById("email");
        const password = document.getElementById("senha");

        //requisição HTTP para o endpoint de cadastro de usuário.
        fetch("http://localhost:5000/api/v1/user"),{
            //realiza uma chamada http para o servidor (a rota definida)
            method: "POST",
            headers: {
                //a requisição será em formato JSON
                "Content-Type":application/json,
            },
            //transforma os dados do formulário em uma string JSON para serem enviados no corpo da requisição
            body: JSON.stringify({name, cpf, password, email})
        }
    });