document.getElementById("createAccountForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (localStorage.getItem(email)) {
        alert("E-mail ja cadastrado. Tente outro.");
        return;
    }

localStorage.setItem(email, JSON.stringify({
    password: password,
    books: []
}));

alert("Conta criada com sucesso!");
window.location.href = "../html/login.html";
});
