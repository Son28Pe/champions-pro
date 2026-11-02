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
   posicion: 1,
   pj: 8, // partidos jugados
   pg: 6, // partidos ganados
   pe: 2, // partidos empatados
   pp: 0, // partidos perdidos
   gf: 20, // goles a favor
   gc: 10, // goles en contra
};

// CONSTANTES
const estadoInvicto = equipo.pp === 0 ? "invicto" : "no invicto";


console.log(typeof nombreEquipo); // string
console.log(typeof pais); // string
console.log(typeof estadio); // string
console.log(typeof anioFundacion); // number
console.log(typeof titulosChampions); // number
console.log(typeof juegaEdicionActual); // boolean


// ---------------FUNCIONES------------------------------

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

// Funcion zona equipo
function zona(posicion) {
   if(posicion<=8){
      return "Octavos de final";
   } else if(posicion<=24){
      return "Playoffs";
   } else {
      return "Eliminado";
   }
}





 // -------------SALIDAS EN WEB-----------------------
fundacion.innerHTML =
   `<h1> FC BARCELONA </h1> 
<p> El equipo ${equipo.nombre} tiene ${equipo.titulosChampions} títulos de la Champions League y lleva
 <b>${calcularFundado(equipo.anioFundacion)} años de existencia.</b></p>
<p> El equipo ha obtenido <b>${calcularPuntos(equipo)} puntos</b> en la temporada actual.</p>
<p> La diferencia de goles es <b>${diferenciaGoles(equipo)}</b>.</p>
<p> El equipo se encuentra en la posición <b>${equipo.posicion}</b> de la tabla.</p>
<p> La zona a la que pertenece el equipo es: <b>${zona(equipo.posicion)}</b>.</p>
<p> El equipo está <b>${estadoInvicto}</b>.</p>`;



