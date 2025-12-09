const express = require('express');
const router = require('./src/routes/cadastrarRoutes')
const path = require('path');
const bodyparse = require('body-parser');
const routerClubes = require("./src/routes/clubesRoutes");
const routerAtletas = require("./src/routes/atletasRoutes");
const app = express();

app.use('/',routerClubes);
app.use('/',routerAtletas);

app.use('/', router);
app.use('/public', express.static(__dirname+ '/public'));

app.get('/', (req, res) => {
    res.redirect('/public/index.html')
});

app.get("/views/cadastrar", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/cadastrar.html'));
});
app.listen(9090, () => {
console.log('Server rodando na porta', 9090);
});
