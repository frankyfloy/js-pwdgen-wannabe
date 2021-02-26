var nome = prompt("Nome ?");
var cognome = prompt("Cognome ?");
var colore = prompt("Colore ?");
var eta = prompt("Età ?");
var password = nome + cognome + colore + eta;
console.log(password);

//CAST implicito string + int = STRING
document.getElementById('PasswordGenerator').innerHTML = password + 21;
