// var => Global e Local
// let => Global, Local e Bloco {}

var nome = "Ewerton"; // Global, local
// Declaração com VAR tem sempre o escopo GLOBAL quando feito FORA de uma função
nome = "Ewerton Carreira";
nome = "Ewerton Carreira Amancio";


let tipo = "Produto de revenda" // Declaração com LET sempre tem o escopo GLOBAL quando feito FORA da uma função
let sobrenome = "Carreira"; // Global

const xpto = "Teste 1";
//xpto = "klçfdks";

console.log(nome);
console.log(sobrenome);

function func1(){
    var sobrenome2 = 'Carreiora'
    // Declaração com VAR tem sempre o escopo LOCAL quando feito DENTRO de uma função
    console.log("Oi" + nome + sobrenome2);
    console.log("Tipo " + tipo);
}

function func2(){
    let familia = "Familia Carreira"
    console.log("Oi" + sobrenome );
    console.log("Familia " + familia);
}

func1();
func2();

console.log("Tipo Sec " + tipo);
console.log("==================================================================");


// LET permite criar escopo de bloco (ENTRE {})
let a = 10; //Global
let testar = true
if (testar){
    let b = 50;
    console.log(a+b);
}
console.log(a);
// console.log(b); DA ERRO POIS A VARIÁVEL b FOI DECLARADA DENTRO DO {} DO IF(){}

{
    let c = 48;
    console.log(a+c);
}