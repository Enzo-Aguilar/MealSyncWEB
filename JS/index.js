import { emailLength, emailSpecialChar, is_EPGE } from "./validator.js";
import { passwordLength } from "./validator.js";

const submitBtn = document.getElementById("submitBtn");
const email = document.getElementById("email_input");
const password = document.getElementById("password_input")
const messager = document.getElementById("msg")

submitBtn.addEventListener("click", () => {
  
/* =====================
  EMAIL FUNCS
===================== */

  if(email.value != " "){

    messager.innerHTML = "- [ERROR] email vazio"

    if(!emailLength(email)){
      messager.innerHTML = "- [ERROR] email muito grande ou muito pequeno"
    }
    
    if (!emailSpecialChar(email.value.trim())) {
      messager.innerHTML = "- [ERROR] Caracteres inválidos";
    }
  
    if(!is_EPGE(email)){
      messager.innerHTML = "- [ERROR] Email precisa ser obrigatoriamente @epge.pt " 
    }
  }

/* =====================
   PASSWORD FUNCS
===================== */

 if(password.value = ""){
   if(!passwordLength(password)){
     messager.innerHTML = "[ERROR] Password muito curto"
     email.value = "";
   }
 }
});


document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", toggleTheme);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".Logo");

  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      softReload();
    });
  }
});