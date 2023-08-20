//1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.

let estudante = {};
estudante.nome = "joao";
estudante.idade = 22;
estudante.curso = "Analise de sistemas";
estudante.notas = [10,10,5,2];

console.log(estudante);

//2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.

const capitals={
    'brasil': 'brasilia', 
    'portugal':'lisboa',
     'italia' : 'roma', 
     'alemanha':'berlim',
    };
    
    console.log(resposta('brasil'));
    function resposta(pais){
        const capital=capitals[pais];
        if(capital){
            return capital;
        }else{
            return "não localizado"
    
        }
    }

//3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.

frutas = {
    'banana': 2.80,
    'maca': 5.50,
    'manga': 2.10,
    'mamao': 10,
}
total = 0

function calcular(dicionarioFrutas){
    let total = 0;
    
    for (const fruta in dicionarioFrutas) {
        total += dicionarioFrutas[fruta];
    }
    
    return total;   
}
const totalFrutas = calcular(frutas);
console.log(`O valor total das frutas é: R$${totalFrutas.toFixed(2)}`);

//4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.
const livro={
    titulo:'Pequeno Principe',
    autor: 'Antonie de Saint Exupery',
    editora: 'HarperCollins; 1ª edição (27 agosto 2018)',
    anoPublicacao:'06 de abril de 1943',
    genero: 'Romance',
    paginas: '96',
    Disponivel:true
}
function imprimaLivro(livro){
    console.log('Informações do livro');
    console.log(`Titulo:${livro.titulo}`);
    console.log(`Autor:${livro.autor}`);
    console.log(`Editora:${livro.autor}`);
    console.log(`Ano de publicação:${livro.anoPublicacao}`);
    console.log(`Genero:${livro.genero}`);
    console.log(`Paginas:${livro.paginas}`);
    console.log(`Esta disponivel: ${livro.Disponivel ? 'Sim':'Não'}`);
}

//para chamar a função não é console. log é a fução e entre parenteses o objeto
imprimaLivro(livro);


// Map:
// 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.

const numeros=[1,2,3,4,5]; 
const quadrado = numeros.map(numeros=> numeros**2);
console.log(quadrado)


// 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.

const palavras = ['isa','joel','day'];
const maiuscula = palavras.map(palavras=>palavras.charAt(0).toUpperCase()+palavras.slice(1));
console.log(maiuscula);

// 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).
const produtos= [
    {nome:'mesa', preco:100.00, quantidade:50},
    {nome:'computador', preco:1200.00, quantidade:10},
    {nome:'mouse', preco:50.00, quantidade:150}
];
const valor = produtos.map(produto => ({
    ...produto,
    valorTotal: produto.preco * produto.quantidade
}));

console.log(valor);

// 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.
const temp = [30,20,15];
const convert = temp.map(temp=>(temp * 9/5)+32);
console.log(convert)


//Reduce:
// 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.
const numSoma= [5,10,15]
const soma = numSoma.reduce((acumulador,valorAtual)=>acumulador +valorAtual,0 );
console.log(soma)

// 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.
const strings= [ 'OI', 'PARA','VOCE']
const juntaTudo = strings.reduce((acumulador,valorAtual)=>acumulador + " "+ valorAtual);
console.log(juntaTudo);
// 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.
const despesas = [
    { valor: 50, categoria:'lazer'},
    { valor: 80, categoria:'alimentação'},
    { valor: 100, categoria:'alimentação'}
];

const categoriaEspe = 'alimentação';

const total= despesas.reduce ((total,despesa)=>{
    if (despesa.categoria ===categoriaEspe){
        return total + despesa.valor;
    }
    return total;
},0);
console.log(`Total de despesas na categoria ${categoriaEspe}: R$${total.toFixed(2)}`);

// 12- Dado um array de números, use o método reduce() para encontrar o maior número no array.

const numeros = [ 1,2,3,5];
const maiorNumero  = numeros.reduce((maior,numeroAtual)=>(numeroAtual>maior ? numeroAtual : maior),numeros[0]);
console.log(`o maior numero desse array é :${maiorNumero}`)

// Laços de Repetiçoes
// 13- Imprima os números de 1 a 10 utilizando um loop for.
for (let i = 0; i<=10; i++) {
    console.log(i);

}

// 14- Imprima os números pares de 1 a 20 utilizando um loop for.

for (let i = 0; i <=20; i++) {
    console.log(i);   
 }
 
// 15- Calcule a soma dos números de 1 a 50 utilizando um loop for.

for (let i = 0; i <= 50; i++ ){
    console.log(i);
}


// 16- Imprima a tabuada do 7 utilizando um loop for.

const numero = 7;
for(let i= 1; i <=10; i++){
    const tabuada = numero * i;
    console.log(`o valor é : ${tabuada}`)
}
// 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.
const numero = parseInt(prompt("digite um numero"));
for(let i = 1; i <=numero ; i++ ){
    console.log(i);
}

// 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.


// 19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)

// 20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

const numero = parseInt(prompt("digite um numero"));

if (!isNaN(numero)&& numero>= 0 ){
    let fatorial = 1;

    for (let i = 1; i <= numero;i++){
        fatorial *=i;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`);
}else {
    console.log("digite um numero valido não negativo")
}

// 21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.
let numeroAtual = 1;
let soma = 1;

console.log(numeroAtual);

for (let i = 2; i <= 10; i++) {
    soma += i;
    console.log(soma);
}


// 22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.

// 23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.

// 24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.

// 25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.
const quantidadeNumeros = parseInt(prompt("Quantos números deseja inserir?"));
let numeros = [];
let soma = 0;

if (!isNaN(quantidadeNumeros) && quantidadeNumeros > 0) {
    for (let i = 0; i < quantidadeNumeros; i++) {
        const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        if (!isNaN(numero)) {
            numeros.push(numero);
            soma += numero;
        } else {
            console.log(`O valor inserido não é um número válido.`);
            i--; // Volta para a mesma iteração para pedir o número novamente
        }
    }

    const media = soma / quantidadeNumeros;
    console.log(`A média dos números é: ${media.toFixed(2)}`);
} else {
    console.log(`Quantidade inválida. Insira um número maior que 0.`);
}

// 26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.

// 27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.

// 28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.
let numero = 0;

while (numero <= 10) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
}

// 29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.

// 30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.

// Condicionais
// 31- Verificação de vogal ou consoante
const caractere = prompt("Digite um caractere:").toLowerCase();//tolowercase transforma em maiuscula

//caractere.length é para certificar que o usuario digitou apenas um caracter
if (caractere.length === 1) {
    if ("aeiou".includes(caractere)) {  // includes para ver se o aeiou esta dentro do que foi digitado
        console.log("É uma vogal.");
    } else {
        console.log("É uma consoante.");
    }
} else {
    console.log("Digite apenas um caractere.");
}

// Peça ao usuário para digitar uma letra. Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante. Exiba uma mensagem indicando se a letra é uma vogal ou consoante.
const caractere = prompt("Digite um caractere:").toLowerCase();//tolowercase transforma em maiuscula

//caractere.length é para certificar que o usuario digitou apenas um caracter
if (caractere.length === 1) {
    if ("aeiou".includes(caractere)) {  // includes para ver se o aeiou esta dentro do que foi digitado
        console.log("É uma vogal.");
    } else {
        console.log("É uma consoante.");
    }
} else {
    console.log("Digite apenas um caractere.");
}
// 32- Calculadora simples
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (+, -, *, /):");

let resultado;

if (!isNaN(numero1) && !isNaN(numero2)) {
    switch (operacao) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            resultado = numero1 / numero2;
            break;
        default:
            console.log("Operação inválida.");
    }

    if (resultado !== undefined) {
        console.log(`O resultado da operação é: ${resultado}`);
    }
} else {
    console.log("Digite números válidos.");
}

// Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /). Use uma estrutura condicional para realizar a operação selecionada nos números dados. Exiba o resultado da operação.

// 33- Verificação de número primo

// Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo). Exiba uma mensagem indicando se o número é primo ou não.

// 34- Conversão de temperatura

// Peça ao usuário para digitar uma temperatura em graus Celsius. Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário. Exiba o resultado da conversão.

// 35- Dia da semana por extenso

// Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana. Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.

// 36- Verificação de ano bissexto

// Peça ao usuário para digitar um ano. Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400). Exiba uma mensagem indicando se o ano é bissexto ou não.

// 37- Contador de vogais e consoantes

// Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para contar o número de vogais e consoantes na entrada. Exiba os resultados separadamente.

// 38- Verificação de número positivo, negativo ou zero

// Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero. Exiba uma mensagem indicando a natureza do número.

// 39- Sistema de bilhete de cinema

// Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não"). Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10. Exiba o preço do bilhete.

// 40- Verificação de palíndromo

// Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás). Exiba uma mensagem indicando se a entrada é um palíndromo ou não.