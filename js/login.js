document.getElementById("createAccountButton").addEventListener("click", function (){
    window.location.href ="cadastro.html";
});

document.getElementById("loginform").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginemail").value;
    const password = document.getElementById("loginpassword").value;
    const user = JSON.parse(localStorage.getItem(email));

    if (user) {
        if (user.password === password) {
            localStorage.setItem("loggedUser", email);
            alert("Login bem-sucedido!");
            window.location.href = "index.html";
        }else{
            alert("Usuario ou senha incorretos.");
        }
    }else{
        alert("Usuario ou senha incorretos");
    }
});