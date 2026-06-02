// =====================
// MODO ESCURO
// =====================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkModeBtn.innerHTML = "☀️";
    }else{
        darkModeBtn.innerHTML = "🌙";
    }

});

// =====================
// CONTADORES ANIMADOS
// =====================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const atualizar = () => {

        const alvo = +counter.getAttribute("data-target");
        const atual = +counter.innerText;

        const incremento = alvo / 100;

        if(atual < alvo){

            counter.innerText =
            Math.ceil(atual + incremento);

            setTimeout(atualizar, 20);

        }else{

            counter.innerText = alvo + "%";

        }

    };

    atualizar();

});

// =====================
// QUIZ
// =====================

function respostaQuiz(correta){

    const resultado =
    document.getElementById("resultadoQuiz");

    if(correta){

        resultado.innerHTML =
        "✅ Correto! O plantio direto ajuda a proteger o solo contra erosões e perda de nutrientes.";

        resultado.style.color = "green";

    }else{

        resultado.innerHTML =
        "❌ Resposta incorreta. O plantio direto é uma das práticas mais eficientes para conservar o solo.";

        resultado.style.color = "red";

    }

}

// =====================
// BOTÃO VOLTAR AO TOPO
// =====================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// =====================
// ANIMAÇÃO AO ROLAR
// =====================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

const sections =
document.querySelectorAll(
".section, .card, .stat, .quiz, .gallery"
);

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// =====================
// EFEITO NO MENU
// =====================

window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if(window.scrollY > 100){

        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.2)";

    }else{

        header.style.boxShadow = "none";

    }

});

// =====================
// MENSAGEM DE BOAS-VINDAS
// =====================

window.addEventListener("load", () => {

    setTimeout(() => {

        alert(
        "🌱 Bem-vindo ao Raízes do Futuro!\n\nExplore como a preservação da água e do solo ajuda a construir um futuro sustentável."
        );

    }, 1000);

});
