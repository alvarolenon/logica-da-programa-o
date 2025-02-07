alert('boas vindas ao jogo');
let numerosecreto = 30;
console.log(numerosecreto)
let chute = prompt('Escolha um numero entre 1 e 30');
console.log(`resultado da comparação:`, chute == numerosecreto);
// se o chute for igual ao numero secreto 

if (numerosecreto == chute) {alert(`parabens, acertou na mosca ${numerosecreto}`);}
else {alert('voce errouuu :(')}