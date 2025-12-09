const express = require("express");
const router = express.Router();
const poolConexao = require("../../models/db");

router.get("/src/routes/clubesRoutes", async (req, res) => {
    try {
        const [clubes] = await poolConexao.query("SELECT c.id,c.nome,c.municipio AS municipio,COUNT(a.id) AS quantidade_atletas,(25 - COUNT(a.id)) AS vagas FROM clubes c LEFT JOIN atletas a ON a.clube_id = c.id GROUP BY c.id, c.nome, c.municipio ORDER BY c.id");
        res.json(clubes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro ao buscar clubes" });
    }
});
module.exports = router;
