let nome = "Ewerton Carreira";
let sobre = "Sócio da EweTi Tecnologia";

// CONCATENAÇÃO NORMAL
let frase = "Olá meu nome é " + nome + " e sou " + sobre + "!";
console.log(frase);

// TEMPLATE LITERALS
let frase2 = `Olá meu nome é ${nome} e sou ${sobre}!`
console.log(frase2);


// TEMPLATE LITERALS RESPEITA AS QUEBRAS DE LINHAS QUEBRA DE LINHAS
let frase3 = `Olá,
Meu nome é ${nome}
e sou ${sobre}!`;
console.log(frase3);