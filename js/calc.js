let alunos = document.querySelectorAll(".aluno");

alunos.forEach((aluno) => {
    let tdNota1 = aluno.querySelector(".info-nota1");
    let tdNota2 = aluno.querySelector(".info-nota2");
    let tdNota3 = aluno.querySelector(".info-nota3");
    let tdNota4 = aluno.querySelector(".info-nota4");

    let nota1 = Number(tdNota1.textContent);
    let nota2 = Number(tdNota2.textContent);
    let nota3 = Number(tdNota3.textContent);
    let nota4 = Number(tdNota4.textContent);

    let nota1Valida = validaNota1(nota1);
    let nota2Valida = validaNota2(nota2);
    let nota3Valida = validaNota3(nota3);
    let nota4Valida = validaNota4(nota4);

    let resultado = aluno.querySelector(".info-result");

    if (!nota1Valida) {
        tdNota1.textContent = "Nota inválida";
        nota1Valida = false;
        resultado.textContent = "Inválido";
        resultado.classList.add("warning");
    }

    if (!nota2Valida) {
        tdNota2.textContent = "Nota inválida";
        nota2Valida = false;
        resultado.textContent = "Inválido";
        resultado.classList.add("warning");
    }

    if (!nota3Valida) {
        tdNota3.textContent = "Nota inválida";
        nota3Valida = false;
        resultado.textContent = "Inválido";
        resultado.classList.add("warning");
    }

    if (!nota4Valida) {
        tdNota4.textContent = "Nota inválida";
        nota4Valida = false;
        resultado.textContent = "Inválido";
        resultado.classList.add("warning");
    }

    if (nota1Valida && nota2Valida && nota3Valida && nota4Valida) {
        let media = calculaMedia(nota1, nota2, nota3, nota4);

        if (media >= 5) {
            let resultado = aluno.querySelector(".info-result");
            resultado.textContent = media + " (Aluno aprovado)";
            resultado.classList.add("aprovado");
        }

        if (media < 5) {
            let resultado = aluno.querySelector(".info-result");
            resultado.textContent = media + " (Aluno reprovado)";
            resultado.classList.add("reprovado");
        }
    }
});

function calculaMedia(nota1, nota2, nota3, nota4) {
    let calcula = 0;

    calcula = (nota1 + nota2 + nota3 + nota4) / 4;

    return calcula.toFixed(2);
}

function validaNota1(nota1) {
    if (nota1 > 0 && nota1 <= 10) {
        return true;
    } else {
        return false;
    }
}

function validaNota2(nota2) {
    if (nota2 > 0 && nota2 <= 10) {
        return true;
    } else {
        return false;
    }
}

function validaNota3(nota3) {
    if (nota3 > 0 && nota3 <= 10) {
        return true;
    } else {
        return false;
    }
}

function validaNota4(nota4) {
    if (nota4 > 0 && nota4 <= 10) {
        return true;
    } else {
        return false;
    }
}
