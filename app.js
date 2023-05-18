const validKeys = ["Delete", "Backspace", "Enter", "X", "x", "-", "/", ".", "+", 
"7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

function insert(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
    document.getElementById('resultado').innerHTML = '';
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
     if(resultado)
      {
        document.getElementById('resultado').innerHTML = eval(resultado.replace(/[xX]/, "*"));
      }
      else
      {
        document.getElementById('resultado').innerHTML = "Nada...";
      }
}



window.addEventListener("keyup", ({ key }) => {
  if (validKeys.some(keyFunc => key == keyFunc)) {
    if (key == "Enter") {
      calcular();
    }
    else if (key == "Delete") {
      clean();
    }
    else if (key == "Backspace") {
      back()
    }
    else {
      insert(key);
    }
  }
});
