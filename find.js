let ewerton = {
    nome: "Ewerton Carreira",
    empresa: "EweTI Tecnologia"
}

let iara = {
    nome: "Iara Santos",
    empresa: "Empresa da Iara"
}

let maria = {
    nome: "Maria Inácia",
    empresa: "Costura & Cia"
}

let jair = {
    nome: "Jair Ferreira",
    empresa: "Ultimate Pintor"
}

let zezinho ={
    nome: "Zézinho Silva",
    empresa: "Ultimate Pintor"
}

let users = [ewerton,iara,maria,jair];
console.log(users);

let userByNome = users.find(user => user.nome === "Ewerton Carreira"); // Verificar
console.log(userByNome);

let userByEmp = users.find(user => user.empresa === "Empresa da Iara"); // Verificar
console.log(userByEmp);

let multUsers = users.find(user => user.empresa === "Ultimate Pintor"); // Não é possível retornar vários resultados, será retornado sempre a primeira linha que atender à condição
console.log(multUsers);
