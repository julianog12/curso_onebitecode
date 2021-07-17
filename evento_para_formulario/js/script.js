function save(){
    //Dizendo para o event (submit) não executar o seu comportamento padrão
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value
    alert("Nome: "+name+"\nLinguagem de Programação: "+programmingLang);
}