window.onload=function(){
  sendtweet();
  count();
}

var button = document.getElementById('submit');
var textarea = document.getElementById('textbox');
var almacenador = document.getElementById('secondbox');
var contador = document.getElementById('number');
var max = 140;

function sendtweet (){
  button.addEventListener('click', function(){
    if (textarea.value){
      var tuit = document.createElement('li');
      tuit.textContent = textarea.value;
      almacenador.insertBefore(tuit, almacenador.firstChild);
      textarea.value = '';
      contador.textContent = 140;
    }
  });
}
function count (){
  textarea.addEventListener ('keyup', function (){
    var letras = textarea.value.length;
    contador.textContent = max - letras;
    if(letras > 140){
      button.disabled = true;
      button.style.backgroundColor = 'grey';
    }else if (letras >= 130) {
      contador.style.color = 'red';
      button.disabled = false;
    } else if (letras < 130 && letras > 120) {
      contador.style.color = 'orange';
      button.disabled = false;
    } else {
      button.disabled = false;
      contador.style.color = 'black';
      button.style.backgroundColor = '#4ab3f4';
    }
  });
}
