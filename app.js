const resultadoElement = document.getElementById('resultado');

const calculatorButtons = 
document.querySelectorAll("button.botao");

const symbolsActions = {
  "+": () => insert("+"),
  "-": () => insert("-"),
  "/": () => insert("/"),
  "X": () => insert("x"),
  "0": () => insert("0"),
  "1": () => insert("1"),
  "2": () => insert("2"),
  "3": () => insert("3"),
  "4": () => insert("4"),
  "5": () => insert("5"),
  "6": () => insert("6"),
  "7": () => insert("7"),
  "8": () => insert("8"),
  "9": () => insert("9")
}

const calculatorActions = {
  buttons: {
    "C": clean,
    "<": back,
    "=": calculate,
    ...symbolsActions

  },
  keys: {
    "ENTER": calculate,
    "DELETE": clean,
    "BACKSPACE": back,
    ...symbolsActions
   
  }
}


calculatorButtons.forEach(calculatorButton => {
  calculatorButton.addEventListener("click", e => {
    if (e.target instanceof HTMLButtonElement) {
      const buttonText = e.target.textContent;

      console.log(buttonText);

      const buttonFunction = 
      calculatorActions.buttons[buttonText];

      buttonFunction();
      
    }
    
  });
});



function updateResultado(text) {
  resultadoElement.innerHTML = text;
}

function insert(num){
   var numero = resultadoElement.innerHTML;
   updateResultado(numero + num);
}


function clean(){
    updateResultado("");
}
function back(){
    var resultado = resultadoElement.innerHTML;
    updateResultado(resultado.substring(0, resultado.length - 1));

}
function calculate(){
    var resultado = resultadoElement.innerHTML;
    

     if(resultado){
        updateResultado(eval(resultado.replace(/[xX]/, "*")));
      }
      else {
        updateResultado("Nada...");
        document.getElementById('resultado').innerHTML = "Nada...";
      }
}


window.addEventListener("keyup", ({ key }) => {
  const keyFunc = calculatorActions.keys[key.toUpperCase()];

  if (keyFunc) {
    keyFunc();
  }
});