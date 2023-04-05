let inputBusca = document.querySelector("#input-busca");

inputBusca.addEventListener("input", () => {
    let valorBusca = inputBusca.value.trim().toLowerCase();

    let linhasAlunos = document.querySelectorAll(".aluno");

    linhasAlunos.forEach((linhaAluno) => {
        let nomeAluno = linhaAluno.querySelector(".info-nome").textContent.trim().toLowerCase();

        if (nomeAluno.includes(valorBusca)) {
            linhaAluno.style.display = "";
        } else {
            linhaAluno.style.display = "none";
        }
    });
});
