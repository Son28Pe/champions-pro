// 1. Ejercicio 1: Mostrar un mensaje en la consola
console.log("La champions es lo más grande del mundo");
console.log("Solo juegan equipos más TOP del mundo");

// 2. Crear variables de mi equipo favorito
const nombreEquipo = "FC Barcelona";
const pais = "España";
const estadio = "Camp Nou";
const anioFundacion = 1899;
let titulosChampions = 5;
let juegaEdicionActual = true;


console.log(typeof nombreEquipo); // string
console.log(typeof pais); // string
console.log(typeof estadio); // string
console.log(typeof anioFundacion); // number
console.log(typeof titulosChampions); // number
console.log(typeof juegaEdicionActual); // boolean


const fundacion = document.getElementById("fundacion");
// funcion calcular fundado
function calcularFundado(anioFundacion) {
   const fechaActual = new Date();
   const anioActual = fechaActual.getFullYear();
   const aniosDesdeFundacion = anioActual - anioFundacion;
   return aniosDesdeFundacion;

}
fundacion.innerHTML = 
`<h1> FC BARCELONA </h1> 
<p> El equipo ${nombreEquipo} tiene ${titulosChampions} títulos de la Champions League y lleva <b>${calcularFundado(anioFundacion)} años de existencia.</b></p>`;