const poolConexao = require('../../models/db');
const atletaDb = require('../../models/atletaDb');

async function cadastrar(req, res) {
    try {
        const { nome, data, municipio } = req.body;

        if (nome == '' || data == '' || municipio ==''){
            res.json({ sucesso: false, mensagem: "Por favor Preencha os campos!" });
        return;
        } 

        const idade = new Date().getFullYear() - new Date(data).getFullYear();
        let categoria = '';
        
        if (idade >= 7 && idade <= 11) {
            categoria = 'Infantil';
        } else if (idade >= 12 && idade <= 17) {
            categoria = 'Júnior';
        } else if (idade >= 18 && idade <= 29) {
            categoria = 'Sênior';
        } else {
             return res.json({ sucesso: false, mensagem: 'Idade fora das categorias permitidas.' });
        };

        const clube_id = await escolherClube(municipio);
        if (!clube_id) return res.json({ sucesso: false, mensagem: 'Não há vagas disponíveis no momento.' });

        await atletaDb.cadastrarAtleta({
            nome,
            data,
            municipio,
            categoria,
            clube_id                 
        });

        await poolConexao.query("UPDATE clubes SET vagas = vagas + 1 WHERE id = ?", [clube_id]);
        return res.json({ sucesso: true, mensagem: 'Atleta cadastrado com sucesso!' });
        
    } catch (error) {
        console.error("Erro no cadastro de atleta:", error);
        return res.json({ sucesso: false, mensagem: "Erro interno no servidor." });
    }
}

async function escolherClube(municipio) {

    const [ClubeMunicipal] = await poolConexao.query(
        'SELECT * FROM clubes WHERE municipio = ? AND vagas < 25 LIMIT 1',[municipio]);

    if (ClubeMunicipal.length > 0){
        return ClubeMunicipal[0].id;
    } 

    const [QualquerClube] = await poolConexao.query(
        'SELECT * FROM clubes WHERE vagas < 25 LIMIT 1'
    );
    if (QualquerClube.length > 0) {
        return QualquerClube[0].id;
    } 

    return null;
}

module.exports = { cadastrar };
