import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const googleBtn = document.getElementById("google-login");

    const redirectTo = "https://preview--mandiwatch-bazaar-suno.lovable.app/";

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            await signInWithEmailAndPassword(auth, username, password);
            showSuccess("Login successful!");
            setTimeout(() => window.location.replace(redirectTo), 1200);

        } catch (error) {
            showError(error.message);
        }
    });

    googleBtn.addEventListener("click", async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            showSuccess("Logged in with Google!");
            setTimeout(() => window.location.replace(redirectTo), 1200);

        } catch (error) {
            showError(error.message);
        }
    });
});

function showSuccess(msg) {
    showToast(msg, "success");
}
function showError(msg) {
    showToast(msg, "error");
}
function showToast(msg, type) {
    let toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => { toast.classList.add("show"); }, 10);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 1800);
}
