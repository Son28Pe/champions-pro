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

const equipo = {
   nombre: "Barcelona",
   pais: "España",
   estadio: "Camp Nou",
   anioFundacion: 1899,
   titulosChampions: 5,
   pj: 8,
   pg: 6,
   pe: 2,
   pp: 0,
   gf: 20,
   gc: 10,
};


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

// calcular puntos del equipo
function calcularPuntos(equipo) {
   return equipo.pg * 3 + equipo.pe;
}
// diferencia de goles
function diferenciaGoles(equipo) {
   return equipo.gf - equipo.gc;
}


fundacion.innerHTML =
   `<h1> FC BARCELONA </h1> 
<p> El equipo ${equipo.nombre} tiene ${equipo.titulosChampions} títulos de la Champions League y lleva
 <b>${calcularFundado(equipo.anioFundacion)} años de existencia.</b></p>
<p> El equipo ha obtenido <b>${calcularPuntos(equipo)} puntos</b> en la temporada actual.</p>
<p> La diferencia de goles es <b>${diferenciaGoles(equipo)}</b>.</p>`;



