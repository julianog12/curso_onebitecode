//Nome Nave, Qtde Tripulantes, Processo engate concluido ou não
//A plataforma de engate é o index da nave + 1
let hitchedSpacechips = [
  ["Fenix", 8 , true],
  ["Golias", 10 , true],
  ["Helmet", 5 , false],
  ["Elemental", 3 , true],
  ["Darwin", 15 , true],
]

let crewGreatherThan9 = hitchedSpacechips.filter(element => {  
   return element[1] > 9;
}).map(nameChip =>{
  return nameChip[0]
})

let pendentSpacechips = hitchedSpacechips.findIndex(element => {  
  return element[2] == false;
})

let hitlightedSpacechips = hitchedSpacechips.map(element => {
  return element[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes " + crewGreatherThan9.join(", ")
message += "\nPlataforma com processo de engate " + (pendentSpacechips+1)
message += "\nEspaçonaves destacadas " + highlightedSpacechips.join(", ")
alert(message)