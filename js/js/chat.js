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
