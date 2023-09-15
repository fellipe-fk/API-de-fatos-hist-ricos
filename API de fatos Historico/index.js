const express = require('express');
const app = express();

const retornaFatosHistoricos = require('./servico/servico');

app.get('/', (req, res) => {
    let anoFato = req.query.ano;
    if(retornaFatosHistoricos.servicoValidado(anoFato)){
        let fato = retornaFatosHistoricos.servicoBuscarFatoPorAno(anoFato)
        res.json({fato:fato})
    }else{
        res.status(400).json({'Erro':'Parametro invalido'})
    }
});

app.listen(8080, () => {
    console.log('Servido inicializado..')
})