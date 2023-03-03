var altura = 1.90;
var peso = 110;
var imc = 0;
imc = peso / (altura * altura);

if (imc < 18.5 )
    console.log("abaixo do peso " + imc);

if(imc > 18.6 & imc <=25)
    console.log("peso normal " + imc );

if(imc > 26 & imc <= 29.9)
    console.log("sobrepeso " + imc );

if(imc > 30 & imc <= 35 )
    console.log("obesidade 1 " + imc );

if(imc > 35.1 & imc <= 39)
    console.log("obesidade 2 " + imc );

