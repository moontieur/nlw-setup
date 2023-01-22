const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  new Date().toLocaleDateString("pt-br").slice(0, -5)
 const today = 01/01
 const dayExists= nlwSetup.dayExists(today)
  
 if(true) {
   alert("Dia já incluso")
   return
  }

  alert("adicionado com sucesso")
  nlwSetup.addDay("01/01")
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.strinfy(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))
nlwSetup.setData(data)
nlwSetup.load()
