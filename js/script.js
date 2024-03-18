const showResult = document.querySelector(".show-result");
const noResult = document.querySelector(".no-result");
const encryptedText = document.getElementById("encrypted-text");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const messageInput = document.getElementById("uncrypted-text");
const errorContainer = document.querySelector(".error-container");
const errorText = document.getElementById("error-message");

const displayResult = (result) => {
  showResult.classList.remove("hidden");
  noResult.classList.add("hidden");
  encryptedText.innerText = result;
}

const handleError = (errorMessage) => {
  errorContainer.style.color = "red";
  errorContainer.style.fontSize = "1.8rem";
  errorText.innerText = errorMessage;
};

const encrypt = () => {
  let originalMessage = messageInput.value

  
  if (originalMessage !== originalMessage.replace(/[A-Z]/g, "")) {
    handleError("Não devem ser utilizadas letras maiúsculas");
    return;
  }
  if (originalMessage !== originalMessage.replace(/[^\w\s]/gi, "")) {
    handleError(
      "Não devem ser utilizadas letras com acentos e nem caracteres especiais"
    );
    return;
  }

  let encryptedMessage = ""

  encryptedMessage = originalMessage.replaceAll('e', 'enter');
  encryptedMessage = encryptedMessage.replaceAll('i', 'imes');
  encryptedMessage = encryptedMessage.replaceAll('a', 'ai');
  encryptedMessage = encryptedMessage.replaceAll('o', 'ober');
  encryptedMessage = encryptedMessage.replaceAll('u', 'ufat');
  
  displayResult(encryptedMessage);
}

const decrypt = () => {
  let originalMessage = messageInput.value

  
  if (originalMessage !== originalMessage.replace(/[A-Z]/g, "")) {
    handleError("Não devem ser utilizadas letras maiúsculas");
    return;
  }
  if (originalMessage !== originalMessage.replace(/[^\w\s]/gi, "")) {
    handleError(
      "Não devem ser utilizadas letras com acentos e nem caracteres especiais"
    );
    return;
  }

  let decryptedMessage = ""

  decryptedMessage = originalMessage.replaceAll('enter', 'e');
  decryptedMessage = decryptedMessage.replaceAll('imes', 'i');
  decryptedMessage = decryptedMessage.replaceAll('ai', 'a');
  decryptedMessage = decryptedMessage.replaceAll('ober', 'o');
  decryptedMessage = decryptedMessage.replaceAll('ufat', 'u');
  
  displayResult(decryptedMessage);

}

encryptBtn.addEventListener("click", encrypt);
decryptBtn.addEventListener("click", decrypt);
