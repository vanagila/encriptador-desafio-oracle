const messageInput = document.getElementById("uncrypted-text");
const showResult = document.querySelector(".show-result");
const noResult = document.querySelector(".no-result");
const encryptedText = document.getElementById("encrypted-text");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");

const encrypt = () => {
  const encryptChars = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const originalMessage = messageInput.value.toLowerCase();

  const regex = /[^\u0000-\u007F]+/;

  if (regex.test(originalMessage)) {
    alert(
      "Não devem ser utilizados letras com acentos nem caracteres especiais"
    );
    return;
  }

  let encryptedMessage = "";

  for (let counter = 0; counter < originalMessage.length; counter++) {
    const char = originalMessage[counter];

    encryptedMessage += encryptChars[char] || char;
  }

  showResult.classList.remove("hidden");
  noResult.classList.add("hidden");
  encryptedText.innerText = encryptedMessage;
};

const decrypt = () => {
  const decryptChars = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  const originalMessage = messageInput.value;
  let decryptedMessage = "";
  let counter = 0;

  while (counter < originalMessage.length) {
    let found = false;

    for (
      let decryptCharsLength = 5;
      decryptCharsLength >= 1;
      decryptCharsLength--
    ) {
      const substring = originalMessage.substr(counter, decryptCharsLength);
      if (decryptChars[substring]) {
        decryptedMessage += decryptChars[substring];
        counter += decryptCharsLength;
        found = true;
        break;
      }
    }

    if (!found) {
      decryptedMessage += originalMessage[counter];
      counter++;
    }
  }

  showResult.classList.remove("hidden");
  noResult.classList.add("hidden");
  encryptedText.innerText = decryptedMessage;
};

encryptBtn.addEventListener("click", encrypt);
decryptBtn.addEventListener("click", decrypt);
