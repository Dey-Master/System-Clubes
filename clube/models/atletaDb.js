const  poolConexao = require('./db');

const cadastrarAtleta = async (dados) => {
    const sql = 'INSERT INTO atletas (nome, data_nascimento, municipio, categoria, clube_id) VALUES (?,?,?,?,?)';
    const valores  = [
        dados.nome,
        dados.data,
        dados.municipio,
        dados.categoria,
        dados.clube_id 
    ];

    await  poolConexao.query(sql,valores);
    return {sucesso:true};
};

module.exports = {cadastrarAtleta};