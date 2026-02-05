const passBtn = document.getElementById("passBtn");
const passwordBox = document.getElementById("passwordBox");
const copyBtn = document.getElementById("copyBtn");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]<>?,.";

const allChar = uppercase + lowercase + numbers + symbols;

passBtn.addEventListener("click", () => {
  let length = 12;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChar.length);
    password += allChar[randomIndex];
  }

  passwordBox.value = password;
});

copyBtn.addEventListener("click", async () => {
  const password = passwordBox.value;
   navigator.clipboard.writeText(password);
   alert("Password has been copied")
});
