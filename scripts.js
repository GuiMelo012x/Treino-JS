
document.getElementById("texto").innerText = "Texto atualizado via DOM";

function mostrarMensagem() {
    alert("Bem-vindo(a) ao nosso site!");
    console.log("Bem-vindo(a) ao nosso site!");
}

function mudarCorDeFundo() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "blue" ? "" : "blue";
}

function mostrarURL() {
    document.getElementById("urlDisplay").innerText = window.location.href;
}

function voltarPagina() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("Não há uma página anterior.");
    }
}

document.getElementById("verificarCookies").addEventListener("click", function() {
    alert(navigator.cookieEnabled ? "Cookies estão habilitados." : "Cookies estão desabilitados.");
});

function mudarCor() {
    event.target.style.backgroundColor = "green";
}

function restaurarCor() {
    event.target.style.backgroundColor = "yellow";
}

function detectarTecla(event) {
    console.log("Tecla pressionada: " + event.key);
    if (/\d/.test(event.key)) { 
        event.preventDefault();
    }
}
