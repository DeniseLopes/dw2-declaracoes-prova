const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const professoresRouter = require('./routes/professores')
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

/*
Cadastro Professores
Cadastro Turma
Cadastro Alunos
Cadastro Disciplina
Cadastro Provas
*/

app.use('/professores',professoresRouter);

app.get('/',(req, res, next)=>{
    res.end('<h1>Declaração de prova</h1>');
});

app.use((req, res, next)=>{
    res.status(400).send('pagina não encontrada');
});

const server = http.createServer(app);
server.listen(3000);