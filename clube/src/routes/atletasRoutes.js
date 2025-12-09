const express = require("express");
const router = express.Router();
const poolConexao = require("../../models/db");

router.get("/src/routes/atletasRoutes", async (req, res) => {
    try {
        const [atletas] = await poolConexao.query("SELECT a.id, a.nome, DATE(a.data_nascimento) AS data_nascimento, a.municipio, a.categoria, c.nome AS nome_clube FROM atletas a LEFT JOIN clubes c ON a.clube_id = c.id;");
        res.json(atletas);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro ao buscar atletas" });
    }
});
module.exports = router;