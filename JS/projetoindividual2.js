var colocarMensagem = document.getElementById('colocarMensagem');
var option = document.querySelector('#option');
var colocarNumero = document.getElementById('colocarNumero');
var buttonCodificador = document.getElementById('codificar');
var buttonDecodificador = document.getElementById('decodificar');
var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var submit = document.querySelector('#submit');
var saidaMensagem = document.querySelector('.saidaMensagem')
var radioCod = document.querySelector('#radioCod');
var radioDecod = document.getElementById('radioDecod')
var radioButton = document.querySelector('.radiobutton');


option.addEventListener("change", function () {


  if (option.value == 'cifraDeCesar') {
    colocarNumero.style.display = 'block';


  } else if (option.value == 'base64') {
    colocarNumero.style.display = 'none';

  } else {

  }
})



buttonCodificador.addEventListener("click", function () {
  submit.style.display = 'block';
  submit.value = 'Codifica!'

})

buttonDecodificador.addEventListener("click", function () {
  submit.style.display = 'block';
  submit.value = 'Decodifica!'

})


  // Caesar cipher

function codCesar() {
  var elementoDaMensagem = colocarMensagem.value;
  var mensagemMinuscula = elementoDaMensagem.toLowerCase();
  var transformarNumero = (Number(colocarNumero.value) % 26);
  var mensagemCodificada = '';

  for (var i = 0; i < mensagemMinuscula.length; i++) {
    for (var j = 0; j < alfabeto.length; j++) {
      if (mensagemMinuscula[i] == alfabeto[j]) {
        mensagemCodificada += alfabeto[j + transformarNumero]
        break;
      } else if (mensagemMinuscula[i] == ' ') {
        mensagemCodificada += ' ';
        break;
      }
    }


  }
  return mensagemCodificada
}


function decCesar() {
  var elementoDaMensagem = colocarMensagem.value;
  var mensagemMinuscula = elementoDaMensagem.toLowerCase()
  var transformarNumero = (Number(colocarNumero.value) % 26)
  var mensagemCodificada = '';

  for (var i = 0; i < mensagemMinuscula.length; i++) {
    for (var j = alfabeto.length - 1; j >= 0; j--) {
      if (mensagemMinuscula[i] == alfabeto[j]) {
        mensagemCodificada += alfabeto[j - transformarNumero]
        break;
      } else if (mensagemMinuscula[i] == ' ') {
        mensagemCodificada += ' ';
        break;
      }
    }


  }
  return mensagemCodificada
}


// Base64 

function codBase() {
  let mensagem = document.querySelector('#colocarMensagem').value
  let codificado = btoa(mensagem)
  return codificado
}

function decBase() {
  let mensagem = document.querySelector('#colocarMensagem').value
  let decodificado = atob(mensagem)
  return decodificado
}




submit.addEventListener('click', function (e) {
  e.preventDefault();
  if (buttonCodificador.checked && option.value === "base64") {

    saidaMensagem.innerText = codBase();
  } else if (buttonDecodificador.checked && option.value === "base64") {

    saidaMensagem.innerText = decBase();
  } else if (buttonCodificador.checked && option.value === "cifraDeCesar") {

    saidaMensagem.innerText = codCesar()
  } else if (buttonDecodificador.checked && option.value === "cifraDeCesar") {

    saidaMensagem.innerText = decCesar()
  } else {
    saidaMensagem.innerText = "Try Again."
  }
})

