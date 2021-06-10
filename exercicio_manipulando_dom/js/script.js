function addNewInformation(){
  elementos = document.querySelectorAll("input[name='casa'")
  
  existeDiv = document.querySelector("div#lista-casas")

  alert(existeDiv)
  if (existeDiv == null){
    var divNova = document.createElement("div");
    divNova.setAttribute("id", "lista-casas");
    divNova.appendChild(conteudoNovo);
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
  }

}