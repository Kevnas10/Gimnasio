let nombre = document.getElementById("nombre");
let mail = document.getElementById("mail");
let texto = document.getElementById("texto");
let enviar = document.getElementById("enviar");
let formulario = document.getElementById("formulario");
let error1 = document.getElementById("text-de-error1")
let error2 = document.getElementById("text-error2")
let button = document.getElementById("button")

enviar.addEventListener("click",()=>{
if(nombre.value === ""){
   error1.style.display= "block"
}else{
   error1.style.display="none"
}
})

enviar.addEventListener("click", ()=>{
if(mail.value=== ""){
   error2.style.display="block"
}else if(
   mail.value.indexOf("@") === -1 || 
   mail.value.indexOf(".") === -1 
){
   error2.style.display="block"
}else{
   error2.style.display= "none"
}
})

window.addEventListener("scroll", ()=>{ 
  if(window.scrollY > 300){
   button.style.display="block"
  } else{
   button.style.display= "none"
  }
})

button.addEventListener("click", ()=>{
   window.scrollTo({
      top: 0,
      behavior:"smooth" 
   })
})