if(typeof(Storege)!="undefine"){
    
   // Receber o seletor do formulário
const cadForm = document.getElementById("cad-usuario-form");

// Salvar os dados do formulário no localStorage
cadForm.addEventListener("button", async (e) => {

    // Não recarregar a página
    e.preventDefault();

    // Receber os dados do formulário
    var nome_usuario = document.getElementById("nome_usuario").value;
    var email_usuario = document.getElementById("email_usuario").value;
    //console.log(nome_usuario);
    //console.log(email_usuario);

    // Salvar no localStorage
    localStorage.setItem("usuario", JSON.stringify({nome_usuario, email_usuario}));

    // Recuperar a informações do registro do localStorage
    var usuario_localstorage = localStorage.getItem("usuario");
    //console.log(usuario_localstorage);

    // Converte a string JSON em um objeto JavaScript
    var dados_usuario = JSON.parse(usuario_localstorage);
    //console.log(dados_usuario);

    // Enviar para o HTML os dados salvo no localStorage
    document.getElementById("conteudo").innerHTML = "Nome: " + dados_usuario.nome_usuario + "<br>E-mail: " + dados_usuario.email_usuario + "<br>";

    // Remover os registros do localStorage
    //localStorage.removeItem("usuario");

});

}else{
    document.write('Seu Navegador Não é Compativel Com Esse Site');
}