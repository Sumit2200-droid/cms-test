import { db } from "../firebase/firestore.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const docRef = doc(db, "website", "home");

async function loadWebsite() {
  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      document.getElementById("title").textContent = data.title;
      document.getElementById("description").textContent = data.description;
      document.getElementById("button").textContent = data.button;
    } else {
      console.log("Document not found.");
    }
  } catch (error) {
    console.error(error);
  }
}

loadWebsite();