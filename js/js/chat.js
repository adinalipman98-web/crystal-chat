import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const sendButton = document.getElementById("sendButton");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");

sendButton.addEventListener("click", async () => {

    const text = messageInput.value;

    if (text.trim() === "") {
        return;
    }

    await addDoc(collection(db, "messages"), {
        text: text,
        sender: localStorage.getItem("username") || "אורח",
        room: "General",
        createdAt: serverTimestamp()
    });

    messageInput.value = "";

});
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const q = query(
    collection(db, "messages"),
    orderBy("createdAt")
);

onSnapshot(q, (snapshot) => {

    messages.innerHTML = "";

    snapshot.forEach((doc) => {

        const data = doc.data();

        const message = document.createElement("p");

        message.innerHTML = `
        <b>${data.sender}:</b> ${data.text}
        `;

        messages.appendChild(message);

    });

});
