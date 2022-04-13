// SPREAD OPERATOR
let nome = "Ewerton Carreira";
let idade = 29;

let empresa = {
    nome: "EweTI Tecnologia",
    cidade: "São Paulo",
    site: "eweti.com.br",
    email: "contato@eweti.com.br"
}

// FORMA NORMAL
let user = {
    nome: nome,
    idade: idade,
    empresa: empresa.nome,
    cidade: empresa.cidade,
    site: empresa.site,
    email: empresa.email
}
console.log(user);

// SPREAD OPERATOR -- IRÁ SOBREESCREVER OS CAMPOS QUE TIVEREM O MESMO NOME, PERMANECENDO O QUE ESTÁ POR ÚLTIMO
user =  {
    nome: nome,
    idade: idade,
    ...empresa
}

console.log(user);
