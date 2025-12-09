*Sistema de Cadastro de Atletas*

Este projeto é um sistema web para cadastro de atletas, que classifica automaticamente os atletas por categoria etária e aloca-os em clubes pré-existentes, respeitando regras de localização e limite de vagas.

**Funcionalidades**

Cadastro de atletas com:

Nome completo

Data de nascimento

Município

Classificação automática em categorias:

Infantil (7 a 11 anos)

Júnior (12 a 17 anos)

Sênior (18 a 29 anos)
----------------------------------------------------------------------------------------

Alocação automática em clubes:

Prioridade para clubes no mesmo município

Caso cheio, aloca no próximo clube disponível

Visualização da lista de clubes e quantidade de atletas por clube
----------------------------------------------------------------------------------------

**Tecnologias**

Back-end: Node.js + Express.js

Banco de Dados: MySQL

Front-end: HTML, CSS e JavaScript puro

**Pré-requisitos**

Antes de rodar o projeto, você precisa ter instalado:

Node.js
 (versão 18 ou superior)

& MySQL
----------------------------------------------------------------------------------------

**Como iniciar**

Clone o projeto:

git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto


Instale as dependências: npm install


Crie o banco de dados MySQL (exemplo): CREATE DATABASE db_clube; e importe as duas tabelas no banco de dados db_clube!


Configure a conexão com o banco em models/db.js:

const poolConexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'SUA_SENHA',
    database: 'db_clube',
    port: 3306,
});


Inicie o servidor: node app.js


Abra o navegador e acesse: http://localhost:9090
