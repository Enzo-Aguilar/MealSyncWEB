/* =====================
 EMAIL CHECKS
===================== */

export function emailLength(email){
    
   if(email.value.length < 15 || email.value.length > 85){
    return false;
   }
    return true;
}

export function emailSpecialChar(email) {  
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      
}

export function is_EPGE(email){
    email = email.value
    if(email.endsWith("@epge.pt")){
        return true;
    }
    return false;
}

/* =====================
   PASSWORD CHECKS
===================== */

export function passwordLength(password){
    if(password.value.length < 6 ){
     return false;   
    }
    return true;
}

/* =====================
   PASSWORD CHECKS
===================== */

