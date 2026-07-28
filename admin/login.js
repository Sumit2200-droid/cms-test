import { auth } from "../firebase/auth.js";

import {
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    try{

        await signInWithEmailAndPassword(auth,email,password);

        window.location.href="dashboard.html";

    }

    catch(error){

        message.innerText=error.message;

    }

});