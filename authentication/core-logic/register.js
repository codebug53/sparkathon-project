import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form");
    const googleBtn = document.getElementById("google-register");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;
        const confirm = document.getElementById("reg-confirm").value;

        if (password !== confirm) {
            showError("Passwords do not match.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            showSuccess("Registration successful!");
            setTimeout(() => window.location.href = "login.html", 1200);
        } catch (error) {
            showError(error.message);
        }
    });

    googleBtn.addEventListener("click", async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            showSuccess("Signed up with Google!");
            setTimeout(() => window.location.href = "login.html", 1200);
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