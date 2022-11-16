function cadastroPessoa(info){
    let novosDados = {
        ...info, 
        cargo: 'Programador', 
        status: 'Estágio',
        codigo: '01122022'  
    };

    return novosDados;
}

console.log(cadastroPessoa({nome: 'Vitor', sobrenome: 'Cabral', anoInicio: 2022}));