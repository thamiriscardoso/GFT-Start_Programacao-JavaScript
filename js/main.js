/*var nome= "Thamiris Cardoso";
var idade = 28;
var idade2 =10;
var n1 = 28;
var n2 =10;
var frase = "Japão é o melhor time do mundo"

//alert("Nome" + nome+" tem "+idade +" anos");
//alert(idade + idade2);

console.log(nome);
console.log(idade+idade2);
console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//console.log(frase.replace("Japão","Brasil"));
console.log(n1*n2);*/

/*var lista = ["maça", "pêra", "laranja"];
lista.pop();
lista.push("uva");
console.log(lista);
console.log(lista[1]);
console.log(lista.length); // ver o tamanho o array
console.log(lista.reverse()); //inverter a ordem dos elementos do array
console.log(lista.toString());
console.log(lista.join(" - "));//Transforma em String e substitui a vírgula pelo traço


var fruta = {nome:"Maça", cor:"vermelha"};//dicionário
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome:"Maça", cor:"vermelha"}, {nome:"Uva", cor:"Roxa"}];//lista de dicionários
console.log(frutas);
console.log(frutas[1].nome);*/

/*var idade = prompt("Qual é a sua idade?"); // exibe uma pergunta ao usuário
//var idade = 18;
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}

var count =0;
while(count <= 5){
    console.log(count);
    //count= count+1;
    count++;
}


/*var count;
for(count =0; count <= 5; count++){
    alert(count);
}

var d = new Date();
alert(d);
alert(d.getMonth()+1);//Para apresentar o mês certo é necessário usar a função getMonth()+1
alert(d.getUTCMinutes());*/

function soma(n1,n2){
    return n1+n2;
}
alert(soma(15,10));

function setReplace(frase,nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão","Brasil"));

function validarIdade(idade){
    var validar;
    if(idade >= 18){
        validar =true;
    }else{
        validar =false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?")
console.log(validarIdade(idade));