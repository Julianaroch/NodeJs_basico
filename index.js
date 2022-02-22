const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button> Olá Mundo </button>
    </form>`);
});

// Parametros com repostas 'idUsuarios?' Opcoes de
app.get('/testes/:idUsuarios', (req, res)=>{
    console.log(req.params);
    res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000')
})