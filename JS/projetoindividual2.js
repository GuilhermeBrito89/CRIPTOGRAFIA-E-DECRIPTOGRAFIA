let colocarMensagem = document.getElementById('colocarMensagem');
let option = document.querySelector('#option');
let colocarNumero = document.getElementById('colocarNumero');
let buttonCodificador = document.getElementById('codificar');
let buttonDecodificador = document.getElementById('decodificar');
let alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
let submit = document.querySelector('#submit');
let saidaMensagem = document.querySelector('.saidaMensagem')
let radioCod = document.querySelector('#radioCod');
let radioDecod = document.getElementById('radioDecod')
let radioButton = document.querySelector('.radiobutton');


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
  let elementoDaMensagem = colocarMensagem.value;
  let mensagemMinuscula = elementoDaMensagem.toLowerCase();
  let transformarNumero = (Number(colocarNumero.value) % 26);
  let mensagemCodificada = '';

  for (let i = 0; i < mensagemMinuscula.length; i++) {
    for (let j = 0; j < alfabeto.length; j++) {
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
  let elementoDaMensagem = colocarMensagem.value;
  let mensagemMinuscula = elementoDaMensagem.toLowerCase()
  let transformarNumero = (Number(colocarNumero.value) % 26)
  let mensagemCodificada = '';

  for (let i = 0; i < mensagemMinuscula.length; i++) {
    for (let j = alfabeto.length - 1; j >= 0; j--) {
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

