let primeiros = [1,2,3];

let numeros = [...primeiros,4,5,6];

let pessoa = {
    nome: "Matheus",
    idade: 20,
    cargo: "Programador"
}

let novapessoa = {
    ...pessoa,
    anotual: 2023,
    cidade: "Londrina"
};

console.log(novapessoa);

console.log(primeiros);

console.log(numeros);