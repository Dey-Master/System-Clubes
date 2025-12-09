async function carregarAtletas() {
    try {
        const resposta = await fetch('../../src/routes/atletasRoutes');
        const atletas = await resposta.json();

        const tbody = document.querySelector("#tabela_atletas tbody");
        tbody.innerHTML = "";
        
        atletas.forEach(atleta => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${atleta.id}</td>
                <td>${atleta.nome}</td>
                <td>${atleta.data_nascimento}</td>
                <td>${atleta.municipio}</td>
                <td>${atleta.categoria}</td>
                <td>${atleta.nome_clube}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error("Erro ao carregar atletas:", error);
    }
}

window.addEventListener("DOMContentLoaded", carregarAtletas);