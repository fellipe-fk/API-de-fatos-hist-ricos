const servicoBuscaFatoPorAno = require('../dados/fatos')

function servicoBuscarFatoPorAno(ano){
    let mensagem = servicoBuscaFatoPorAno.fatosHistoricos.find(item => {
        return item.Ano == ano;
    });

    return mensagem.Fato;
};

function servicoValidado(ano){
    let mensagem;

    if(isNaN(ano)){
        mensagem = false;
    }else if(ano >= 1920 && ano <= 2020){
        mensagem = true
    }else{
        mensagem = false;
    };

    return mensagem;
};

exports.servicoBuscarFatoPorAno = servicoBuscarFatoPorAno;
exports.servicoValidado = servicoValidado;