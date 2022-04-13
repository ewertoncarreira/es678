// FORMA DIFERENTE DE CRIAR UMA FUNÇÃO
// Arrowfunction são utilizadas para funções de callbacks e atribuição em variáveis

// FORMA NORMAL
function soma (a,b){
    console.log(a+b);
}

// VARIÁVEL
let mult = function(a,b){
    return a*b;
};

// arrow function
let mult3 = (a,b,c) =>{
    console.log(a*b*c)
}

// arrow function com somente 1 parâmetro não precisa dos parentezes
let exibe = a =>{
    console.log(a);
}

// arrow function em uma única linha não precisa de {}
let sub = (a,b) => console.log(a-b);

// retorno normal de função
function soma2(a,b){
    return a+b;
}
var resultado = soma2(15,47);
console.log(resultado);

// FORMA 1 retorno de valores em arrow function
let sub2 = (a,b)=>{
    return a - b;
}

// FORMA 2 retorno de valores em arrow function reduzida
let sub3 = (a,b,c) => a-b-c;

