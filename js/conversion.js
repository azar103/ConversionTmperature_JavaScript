//Saisir une tempèrature en celisus
var celsius = Number(prompt("Donner une valeur de temperature en degrés celisus:"));
//Convertire la temeprature en far
var Farrenheit = celsius * 9/5 + 32;
//Affichage du résultat
console.log(celsius+" °C = "+Farrenheit+" °F");