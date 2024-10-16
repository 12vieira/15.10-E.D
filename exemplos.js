/*let contador = 0;

while (contador < 10) {
    if(contador % 2 == 0){
        console.log(contador);
    }
    contador++;
}
*/
const prompt = require('prompt-sync')();
let email;
let senha;

do {
    email = prompt(`digite seu email `);
    senha = prompt(`digite sua senha `);
} while (senha !== "123456" || email !== "fulano@gmail.com");