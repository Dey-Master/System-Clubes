# Sistema de Cadastro de Atletas

Este projeto é um sistema web para **cadastro de atletas**, que classifica automaticamente os atletas por **categoria etária** e os aloca em clubes pré-existentes, respeitando regras de localização e limite de vagas.

---

## Funcionalidades

- **Cadastro de atletas** com:
  - Nome completo
  - Data de nascimento
  - Município

- **Classificação automática em categorias:**
  - Infantil: 7 a 11 anos
  - Júnior: 12 a 17 anos
  - Sênior: 18 a 29 anos

- **Alocação automática em clubes:**
  - Prioridade para clubes no mesmo município
  - Caso o clube esteja cheio, aloca no próximo clube disponível

- **Visualização**
  - Lista de clubes
  - Quantidade de atletas por clube

---

## Tecnologias

- **Back-end:** Node.js + Express.js  
- **Banco de Dados:** MySQL  
- **Front-end:** HTML, CSS e JavaScript puro

---

## Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- Node.js (versão 18 ou superior)  
- MySQL

---

## Como iniciar

1. **Clone o projeto:**
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto.


2. **Instale as dependências:**
npm install

3. **Crie o banco de dados MySQL:**
CREATE DATABASE db_clube;

Observações: Certifique-se de importar as tabelas necessárias no banco de dados db_clube antes de iniciar o sistema. O sistema aloca automaticamente atletas nos clubes de acordo com as regras de município e limite de vagas.

4. **Configure a conexão com o banco em models/db.js:**
const poolConexao = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'SUA_SENHA',
  database: 'db_clube',
  port: 3306,
});

5. **nicie o servidor:**
node app.js

6. **Abra no navegador:** http://localhost:9090




