
const form = document.querySelector("form")
let input = document.querySelector("input")
let text = document.querySelector("h1");



let person = {
  name: "Ja'farxon",
  lastName: "Saidumarov",
  yeare: 2023,
  fulname:"",
  age: 17,
}

form.addEventListener("submit",(e) =>{
  e.preventDefault()
  let yosh =document.getElementById("sana").value;
  let yil = new Date().getFullYear();
  
  let age = yil - yosh;
  text.textContent =  age;

  let inputval = input.value === `age`
  function getapii() {
    if (inputval) {
      text.innerHTML = this.yeare - " " - this.age ;
    }
      }    getapii.call(person)

  let  inputvall= input.value  === `fulname`
  function getapi() {
    if (inputvall) {
      text.innerHTML = this.name + " " + this.lastName ;
    }
      }


      getapi.call(person)

      restfro()
})



const restfro = () =>{
  input.value = ""
}






