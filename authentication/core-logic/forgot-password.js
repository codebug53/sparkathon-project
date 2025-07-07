import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("forgot-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("forgot-email").value;

        try {
            await sendPasswordResetEmail(auth, email);
            showSuccess("Reset link sent! Check your email.");
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