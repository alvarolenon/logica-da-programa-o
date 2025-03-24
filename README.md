Jogo do Número Secreto

Um simples jogo em JavaScript onde o objetivo é adivinhar o número secreto gerado aleatoriamente.

🕹️ Como funciona

O jogo gera um número aleatório entre 1 e 100.

O jogador tenta adivinhar o número através de tentativas.

A cada tentativa, o jogo informa se o número secreto é maior ou menor.

Quando o jogador acerta, o jogo exibe uma mensagem de parabéns com o número de tentativas.

📋 Requisitos

Navegador com suporte a JavaScript.

🚀 Como executar o projeto

Certifique-se de ter um navegador instalado.

Copie o código abaixo em um arquivo chamado index.html:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Jogo do Número Secreto</title>
</head>
<body>
    <script>
        alert('Boas-vindas ao jogo!');
        let numerosecreto = parseInt(Math.random() * 100 + 1);
        console.log(numerosecreto);
        let chute;
        let tentativas = 1;

        while (chute != numerosecreto) {
            chute = prompt('Escolha um número entre 1 e 100');
            if (numerosecreto == chute) {
                break;
            } else {
                if (chute < numerosecreto) {
                    alert(`O número secreto é maior que ${chute}`);
                } else {
                    alert(`O número secreto é menor que ${chute}`);
                }
                tentativas++;
            }
        }

        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Parabéns! Você acertou o número ${numerosecreto} com ${tentativas} ${palavratentativa}.`);
    </script>
</body>
</html>

Abra o arquivo index.html no seu navegador.


📄 Licença

Este projeto é de uso livre. Sinta-se à vontade para modificar e compartilhar! 😊

