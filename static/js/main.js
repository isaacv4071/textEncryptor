// Obtener los elementos del DOM
const inputTextArea = document.getElementById("input-text");
const outputTextArea = document.getElementById("result-text");
const encryptButton = document.getElementById("encrypt-btn");
const decryptButton = document.getElementById("decrypt-btn");
const copyButton = document.getElementById("copy-btn");
const showResult = document.getElementById("result-container");
const showResultNone = document.getElementById("result-none");

// Función para encriptar el texto
function encryptText(text) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    let asciiCode = text.charCodeAt(i);
    encryptedText += String.fromCharCode(asciiCode + 1);
  }
  return encryptedText;
}

// Función para desencriptar el texto
function decryptText(text) {
  let decryptedText = "";
  for (let i = 0; i < text.length; i++) {
    let asciiCode = text.charCodeAt(i);
    decryptedText += String.fromCharCode(asciiCode - 1);
  }
  return decryptedText;
}

// Función para copiar el resultado
function copyResult() {
  outputTextArea.select();
  document.execCommand("copy");
}

// Función para validar el input
function validateInput() {
  if (inputTextArea.value.trim() === "") {
    alert("Please enter some text to encrypt or decrypt.");
    return false;
  }
  showResultNone.classList.add('show-result-none');
  showResult.classList.remove('show-result-none');
  return true;
}

// Añadir event listeners a los botones
encryptButton.addEventListener("click", () => {
  if (validateInput()) {
    outputTextArea.value = encryptText(inputTextArea.value);
  }
});

decryptButton.addEventListener("click", () => {
  if (validateInput()) {
    outputTextArea.value = decryptText(inputTextArea.value);
  }
});

copyButton.addEventListener("click", () => {
  if (outputTextArea.value.trim() !== "") {
    copyResult();
    alert("Result copied to clipboard!");
  } else {
    alert("No result to copy.");
  }
});
