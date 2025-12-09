const form = document.getElementById('form-cadastro');
const mensagemBox = document.getElementById("mensagem");

form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const dados = {
        nome: document.getElementById('nome').value,
        data: document.getElementById('data').value,
        municipio: document.getElementById('municipio').value
    };

    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    try {
        const url = '../../src/routes/cadastrarRoutes';
        const cadastrar = await fetch(url, config);
        const resposta = await cadastrar.json();

        if (resposta.sucesso) {
            mostrarMensagem(resposta.mensagem, "sucesso");
            form.reset();
        }else {
            mostrarMensagem(resposta.mensagem, "erro");
        } 

    } catch (error) {
        mostrarMensagem("Erro ao conectar com servidor, tente novamente!", "erro");
    }
});


function mostrarMensagem(texto, tipo = "sucesso") {
    mensagemBox.textContent = texto;

    mensagemBox.classList.remove("sucesso", "erro", "show");

    void mensagemBox.offsetWidth;

    mensagemBox.classList.add(tipo, "show");

    setTimeout(() => {
        mensagemBox.classList.remove("show");
    }, 4000);
}

