document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o formulário dentro do #subscription-form
    const form = document.querySelector("#subscription-form form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailDestino = "seuemail@dominio.com"; // <-- coloque seu email aqui

        // Captura todos os inputs/select/textarea na ordem original
        const fields = form.querySelectorAll("input, select, textarea");

        const nome = fields[0].value;
        const email = fields[1].value;
        const telefone = fields[2].value;
        const interesse = fields[3].value;
        const mensagem = fields[4].value;

        const assunto = `Contato via formulário - ${nome}`;
        const corpo =
            `Nome: ${nome}\n` +
            `Email: ${email}\n` +
            `Telefone: ${telefone}\n` +
            `Interesse: ${interesse}\n` +
            `Mensagem:\n${mensagem}`;

        const mailto = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

        window.location.href = mailto;
    });
});
