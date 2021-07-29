function doChange(){
  alert(event.target.value)
}

function comandos(){
  let sampleInput = document.querySelector("input[name='sample-input']")
  sampleInput.addEventListener("change", doChange)
  let changeEvent = new Event("change")

  //disparando eventos dinamicamente
  sampleInput.dispatchEvent(changeEvent)

  //removendo eventos dinamicamente
  sampleInput.removeEventListener("change", doChange)

}