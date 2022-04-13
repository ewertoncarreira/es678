// quando eu atribuo um valor fixo em um parâmetro, ele se torna uma parâmetro opcional
// parâmetros opcionais devem sempre ser os último da declaração de uma função
// não é possível definir um parâmetro opcional entre parâmetros obrigatórios ex: function soma(a,b=30,c){}

 
 function soma(a = 80,b=50){
     console.log(a+b);
 }

 function sub(a,b,inverter=false){
    if (inverter){
        console.log(b-a);
    }else{
        console.log(a-b);
    }
 };

