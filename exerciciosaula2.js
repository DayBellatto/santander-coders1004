//exercicio 1 
// area de um retangulo A=b⋅h
//1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

// Solicita ao usuário que digite o comprimento e a largura do retângulo
var comprimento = parseFloat(prompt("Digite o comprimento do retângulo:"));
var largura = parseFloat(prompt("Digite a largura do retângulo:"));

// Função para calcular a área do retângulo
function calcularAreaRetangulo(comprimento, largura) {
    var area = comprimento * largura;
    return area;
}

// Chama a função para calcular a área
var areaDoRetangulo = calcularAreaRetangulo(comprimento, largura);

// Exibe o resultado
console.log("A área do retângulo é: " + areaDoRetangulo);


//exercicio 2 
let num1 = 20; 

if (num1 % 2 === 0) {
    console.log(num1 + " é um número par.");
} else {
    console.log(num1 + " é um número ímpar.");
}
// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".
function verificaJavaScript (frase){
    if (frase.includes("javascript")) {
        return true;
    } else {
        return false;
    }
}
var usuario=prompt("digite uma frase");

var contemJavaScript = verificaJavaScript(usuario);

if (contemJavaScript) {
    console.log("A string contém a palavra 'JavaScript'.");
} else {
    console.log("A string não contém a palavra 'JavaScript'.");
}


// exercicio 4 
let strin1= 'nome';
let strin2= 'nome';

if(strin1=== strin2){
    console.log('strings iguais')
}else {
    console.log('string diferentes')
}

// exercicio 5 
//5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

const lista1 = [2, 3, 4, 5, 6];
const lista2 = ['Daiana', 'Isa', 'Joel'];

function listaConcat(listaA, listaB) {
    return listaA.concat(listaB);
}

const resultadoConcat = listaConcat(lista1, lista2);
console.log(resultadoConcat);


//6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.

const valores = [10, 15, 20, 25, 30];

const soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
const media = soma / valores.length;

console.log('Valores:', valores);
console.log('Soma:', soma);
console.log('Média:', media);


//7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo". 

function obterDataHoraFormatada() {
    const agora = new Date();
    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); // Mês começa em 0, por isso soma 1
    const ano = agora.getFullYear();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    const segundo = agora.getSeconds().toString().padStart(2, '0');
  
    const dataHoraFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    return dataHoraFormatada;
  }
  
  const dataHoraAtual = obterDataHoraFormatada();
  console.log(dataHoraAtual);
  
//8- Implemente um programa que encontre o maior valor em um array usando a função Math.max(). 

const valor=[1,2,3,4,5,6];
console.log(Math.max(...valor));

//9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos. 
function numAleatorio(num1,num2){
    return Math.floor(Math.random()* (num2-num1+1))+num1
}
console.log(numAleatorio(0,100));
//10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.
function ehPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  const numeroUsuario = parseInt(prompt("Digite um número:"));
  
  if (ehPrimo(numeroUsuario)) {
    console.log(`${numeroUsuario} é um número primo.`);
  } else {
    console.log(`${numeroUsuario} não é um número primo.`);
  }
  
//11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.

var num1 ="5";
var num2= 2;
console.log(num1*num2);
// imprimiu 10 isso porque no javaScript "5" é = 5 e "5" é == 5 para que seja identificado por tipo precisa ser === que são os operadores de atribuição

//12- Converta a string "123" em um número inteiro e armazene-o em uma variável. 

var convert = "123";
console.log(typeof(convert));
var convertnum = parseInt(123);
console.log(typeof(convertnum));

//13- Escreva um programa que adicione um número e uma string. 
let num = 5;
let str = "a";
let result = 5+"a"
console.log(result);

//14- Explique o resultado e discuta a coerção que ocorre.

//coerção é uma conversão automatica nesse caso como tem o + ele concatena

//15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo. 
var nu = null;
var und= undefined;
var compara = typeof (null)=== typeof(undefined);
console.log(compara);

function verificarTipo(variable) {
    if (typeof variable === 'function') {
        return true;
    } else {
        return false;
    }
}

const minhaFuncao = function() {
    console.log('Isso é uma função.');
};

const minhaVariavel = 42;

if (verificarTipo(minhaFuncao)) {
    console.log('minhaFuncao é uma função.');
} else {
    console.log('minhaFuncao não é uma função.');
}

if (verificarTipo(minhaVariavel)) {
    console.log('minhaVariavel é uma função.');
} else {
    console.log('minhaVariavel não é uma função.');
}


//18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20. 
let calc = (10+5)*3/20;
console.log(calc);

//19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo. 
function numImpar(numero) {
    return numero > 0 && numero % 2 !== 0;
  }
  
  const numeroTeste = 7;
  
  if (numImpar(numeroTeste)) {
    console.log(`${numeroTeste} é um número positivo e ímpar.`);
  } else {
    console.log(`${numeroTeste} não é um número positivo e ímpar.`);
  }

//20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.
function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const anoUsuario = parseInt(prompt("Digite um ano:"));
  
  if (ehBissexto(anoUsuario)) {
    console.log(`${anoUsuario} é um ano bissexto.`);
  } else {
    console.log(`${anoUsuario} não é um ano bissexto.`);
  }
//21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).

const idademin = 18;
const ban = ['isa', 'joel', 'day'];

function verificaBan(idade, nome) {
    const eBanido = ban.includes(nome);
    const semIdade = idade >= idademin;
    
    if (semIdade && eBanido) {
        return true;
    } else {
        return false;
    }
}

const nome = 'larissa';
const idade = 19;

if (verificaBan(idade, nome)) {
    console.log('vai dormir criança');
} else {
    console.log('hoje a noite é nossa');
}


//22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.
const usuarios = [
    { nomeUsuario: 'usuario1', senha: 'senha123' },
    { nomeUsuario: 'usuario2', senha: 'abc456' },
    { nomeUsuario: 'usuario3', senha: 'qwerty789' }
];

function realizarLogin(nomeUsuario, senha) {
    for (const usuario of usuarios) {
        if (usuario.nomeUsuario === nomeUsuario && usuario.senha === senha) {
            return true; // Credenciais corretas
        }
    }
    return false; // Credenciais incorretas
}

const nomeUsuarioInserido = prompt('Digite seu nome de usuário:');
const senhaInserida = prompt('Digite sua senha:');

if (realizarLogin(nomeUsuarioInserido, senhaInserida)) {
    console.log('Login bem-sucedido! Bem-vindo, ' + nomeUsuarioInserido + '.');
} else {
    console.log('Credenciais incorretas. Acesso negado.');
}
