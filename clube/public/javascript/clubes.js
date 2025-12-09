async function carregarClubes() {
    try {
        const resposta = await fetch('../../src/routes/clubesRoutes'); // Rota do back-end que retorna todos os clubes
        const clubes = await resposta.json();

        const tbody = document.querySelector("#tabela_clubes tbody");
        tbody.innerHTML = "";
        
        clubes.forEach(clube => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${clube.id}</td>
                <td>${clube.nome}</td>
                <td>${clube.municipio}</td>
                <td>${clube.quantidade_atletas}</td>
                <td>${clube.vagas}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error("Erro ao carregar clubes:", error);
    }
}

window.addEventListener("DOMContentLoaded", carregarClubes);