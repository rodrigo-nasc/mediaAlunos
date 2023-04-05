let adicionar = document.querySelector(".adicionar");

adicionar.addEventListener("click", (ev) => {
    ev.preventDefault();

    let form = document.querySelector(".form");

    let aluno = montaAluno(form);

    let novaLinha = montaTr(aluno);

    let erros = validaNotas(aluno);

    if (erros.length > 0) {
        mostraErro(erros);

        return;
    }

    let resultado = document.querySelector(".corpo-tabela");

    resultado.appendChild(novaLinha);

    let mostraErros = document.querySelector(".mostra-erros");

    mostraErros.innerHTML = "";
    form.reset();
});

function montaAluno(form) {
    let aluno = {
        nome: form.nome.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value,
        nota3: form.nota3.value,
        nota4: form.nota4.value,
        media: calculaMedia(Number(form.nota1.value), Number(form.nota2.value), Number(form.nota3.value), Number(form.nota4.value)),
    };

    return aluno;
}

function montaTr(aluno) {
    let tr = document.createElement("tr");
    tr.classList.add("aluno");

    let nome = montaTd(aluno.nome, "info-nome");
    let nota1 = montaTd(aluno.nota1, "info-nota1");
    let nota2 = montaTd(aluno.nota2, "info-nota2");
    let nota3 = montaTd(aluno.nota3, "info-nota3");
    let nota4 = montaTd(aluno.nota4, "info-nota4");
    let media = montaTd(aluno.media, "info-resultado");

    if (aluno.media < 5) {
        let reprovado = document.createElement("span");
        reprovado.textContent = " (Aluno reprovado)";
        media.classList.add("reprovado");
        media.appendChild(reprovado);
    }

    if (aluno.media >= 5) {
        let aprovado = document.createElement("span");
        aprovado.textContent = " (Aluno aprovado)";
        media.classList.add("aprovado");
        media.appendChild(aprovado);
    }

    tr.append(nome, nota1, nota2, nota3, nota4, media);

    return tr;
}

function montaTd(dados, classe) {
    let td = document.createElement("td");

    td.textContent = dados;
    td.classList.add(classe);

    return td;
}

function validaNotas(aluno) {
    let erros = [];

    if (aluno.nome.length == 0) erros.push("Campo nome não pode ser em branco!!!");
    if (!validaNota1(aluno.nota1)) erros.push("Nota 1 inválida");
    if (!validaNota2(aluno.nota2)) erros.push("Nota 2 inválida");
    if (!validaNota3(aluno.nota3)) erros.push("Nota 3 inválida");
    if (!validaNota4(aluno.nota4)) erros.push("Nota 4 inválida");

    return erros;
}

function mostraErro(erros) {
    let mostraErros = document.querySelector(".mostra-erros");
    mostraErros.innerHTML = "";

    erros.forEach((erro) => {
        let li = document.createElement("li");
        li.textContent = erro;

        mostraErros.appendChild(li);
    });
}
