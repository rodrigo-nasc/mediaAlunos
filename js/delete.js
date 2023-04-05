let deleta = document.querySelector(".corpo-tabela");

deleta.addEventListener("dblclick", (ev) => {
    ev.target.parentNode.classList.add("efeito");

    setTimeout(() => {
        ev.target.parentNode.remove();
    }, 700);
});
