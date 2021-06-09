function show(){

   console.log(document.getElementById("name").value)

   console.log(document.getElementsByName("phone"))
   console.log(document.getElementsByName("phone")[0].value)
   console.log(document.getElementsByName("phone")[1].value)

   console.log(document.querySelectorAll("div#phones input[name='phone'"))


   console.log(document.getElementsByTagName("input"))

}