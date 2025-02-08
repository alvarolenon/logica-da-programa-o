alert('boas vindas ao jogo');
let numerosecreto = 25;
console.log(numerosecreto)
let chute;
let tentativas = 1;

while (chute != numerosecreto) {
    chute = prompt('Escolha um numero entre 1 e 30');
    if (numerosecreto == chute) {alert(`parabens, acertou na mosca ${numerosecreto} com ${tentativas} tentativas`);}
   else {
        if (chute < numerosecreto) {
            alert(`o numero secreto é maior que  ${chute}`);
   } else {
        alert(`o numero secreto é menor que ${chute}`)
   }
   //tentativas = tentativas + 1;
   tentativas++;
   }
   
}