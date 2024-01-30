// const messageInput = document.getElementById("uncrypted-text");
// const encryptBtn = document.getElementById("encrypt-btn");
// const uncryptBtn = document.getElementById("uncrypt-btn");

// const encrypt = () => {
//   const encryptChars = {
//     e: "enter",
//     i: "imes",
//     a: "ai",
//     o: "ober",
//     u: "ufat",
//   };

//   const originalMessage = messageInput.value;
//   let encryptedMessage = "";

//   for (let counter = 0; counter < originalMessage.length; counter++) {
//     const char = originalMessage[counter];
//     // console.log(char);
//     encryptedMessage += encryptChars[char] || char;
//     console.log(encryptChars[char], char); //char retorna undefined quando a letra nao esta no encryptChars
//   }

//   console.log(encryptedMessage);
// };

// const decrypt = () => {
//   const decryptChars = {
//     enter: "e",
//     imes: "i",
//     ai: "a",
//     ober: "o",
//     ufat: "u",
//   };

//   const originalMessage = messageInput.value.split(" ");
//   let decryptedMessage = "";

//   for (let counter = 0; counter < originalMessage.length; counter++) {
//     const char = originalMessage[counter];
//     decryptedMessage += decryptChars[char] || char;
//   }

//   console.log(decryptedMessage);
// };

// encryptBtn.addEventListener("click", encrypt);
// uncryptBtn.addEventListener("click", decrypt);
