function verifyEnablement(){
    let optionValue = document.querySelector("select").value
    if(optionValue == 'disabled'){
      document.querySelector("input[name='some-text']").disabled = true
      let pElement = document.getElementById("message")
      pElement.innerText = "DESABILITADO"
      pElement.style.color = 'white'
      pElement.style.backgroundColor = 'red'
    }else if (optionValue == 'enabled'){
       document.querySelector("input[name='some-text']").disabled = false
       let pElement = document.getElementById("message")
       pElement.innerText = ""
       pElement.style.color = ''
       pElement.style.backgroundColor = 'transparent'
    }

   
}