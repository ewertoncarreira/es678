// DESTRUCTURING
let user = {
    nome: "Ewerton Carreira",
    idade: 29,
    empresa: "EweTi Tecnologia",
    curso: "Node.js"
};

// NORMAL
let nom = user.nome;
let curs = user.curso;

console.log(nom);
console.log(curs);

// DESTRUCTURING COM O NOME DO CAMPO CORRETO
console.log("=========================================================");
let { idade } =  user;
console.log(idade);

// DESTRUCTURING DE ALGUNS CAMPOS PELO NOME E O RESTANTE NUM OUTRO OBJETO (REST)
console.log("=========================================================");
let {nome,curso,...c} = user;
console.log(nome);
console.log(curso);
console.log(c);
