// JSON encurtados
let name = "Ewerton Carreira";
let idade = 29;
let empresa = "EweTi Tecnologia";

// FORMA NORMAL
let user = {
    name: name,
    idade: idade,
    empresa: empresa
}

function normalJson (){
    console.log(user);
}

// FORMA ENCURTADA
let userCurto = {
    name,
    idade,
    empresa
};

function encurtadoJson (){
    console.log(user);
}
