alert('Boas vindas ao jogo do número secreto');
let maxnumber = 5000;
let secretnumber = parseInt(Math.random() * maxnumber + 1);
console.log(secretnumber);
let usernumber;
let trys = 1;

while (usernumber != secretnumber) {
    usernumber = prompt(`Escolha um número entre 1 e ${maxnumber}`);

    if (secretnumber == usernumber ) {
        break;
    } else {

        alert('Você errou :(');
        if (secretnumber < usernumber) {
            alert(`O número secreto é menor que  ${usernumber}`);
        } else {
            alert(`O número secreto é maior que  ${usernumber}`);
        }
    } trys++;
}

let palavraTrys = trys > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso aí! Você descobiu o número secreto ${secretnumber} com ${trys} ${palavraTrys}`);