import { auth } from "../firebase/auth.js";
import { db } from "../firebase/firestore.js";

import {
    onAuthStateChanged,
    signOut
}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    doc,
    getDoc,
    setDoc
}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const welcome = document.getElementById("welcome");
const title = document.getElementById("title");
const description = document.getElementById("description");
const button = document.getElementById("button");
const message = document.getElementById("message");

const saveBtn = document.getElementById("saveBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Check Login
onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "login.html";
        return;

    }

    welcome.innerText = "Welcome " + user.email;

    const docRef = doc(db, "website", "home");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

        const data = docSnap.data();

        title.value = data.title || "";
        description.value = data.description || "";
        button.value = data.button || "";

    }

});

// Save
saveBtn.addEventListener("click", async () => {

    await setDoc(doc(db, "website", "home"), {

        title: title.value,
        description: description.value,
        button: button.value

    });

    message.style.color = "green";
    message.innerText = "Saved Successfully";

});

// Logout
logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "login.html";

});