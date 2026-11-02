# Tabla Champions Pro · Contexto del proyecto

> Actualiza la sección "Estado actual" al terminar cada día.

## Qué es
App web donde la tabla de los 36 equipos de la fase liga de la UEFA Champions League 2026/27
**se calcula sola** a partir de los resultados que registro.

## Quién soy
- Estudiante de Ingeniería de Sistemas. JavaScript desde lo básico.
- Sé PostgreSQL (y algo de MySQL).
- Estudio 2 h de lunes a viernes y 4 h sábado y domingo, en la mañana.
- Me motiva ver cosas funcionando en pantalla.
- Meta: el 20 de diciembre de 2026, el proyecto hecho por mí y online.

## Qué debe hacer la app (MVP)
1. Tabla calculada: PJ, PG, PE, PP, GF, GC, DG, Pts.
2. Zonas de color: verde 1-8 (octavos), amarillo 9-24 (play-off), rojo 25-36 (eliminado).
3. Ordenar, buscar y filtrar equipos.
4. Formulario para registrar o corregir resultados.
5. Fixture por jornada (1 a 8).
6. Detalle de cada equipo con sus partidos.

Desempate: Pts > DG > GF.

## Estructura y tecnologías
```
champions-pro/
├── CONTEXTO.md
├── v1-web/      HTML + CSS + JavaScript puro     (23 oct - 22 nov)
├── api/         Node + Express + PostgreSQL      (23 nov - 6 dic)
└── web-react/   React + TypeScript (Vite)        (7 - 20 dic)
```

## Datos
- Equipo: `{ id, nombre, pais }`
- Partido: `{ id, jornada, local, visitante, golesLocal, golesVisitante }`

## Fases
| Fase | Fechas | Tema | Gol |
|---|---|---|---|
| 0 | 23-25 oct | Git, variables, objetos | Gol 0 |
| 1 | 26 oct-15 nov | Funciones, arrays, DOM, eventos, closures | Goles 1-3 |
| 2 | 16-22 nov | Módulos, fetch, async/await, clases | Gol 4 |
| 3 | 23 nov-6 dic | Express + PostgreSQL | Goles 5-6 |
| 4 | 7-20 dic | React, tests, publicar | Goles 7-8 y Copa |

Plan día por día con checklist: [ROADMAP.md](ROADMAP.md)

## Cómo quiero que me ayude la IA
- Primero una analogía, luego código comentado y al final un ejercicio corto **sin solución**.
- Dame pistas, no la respuesta completa. Yo intento 20 min antes de pedir ayuda.
- Si reviso mi código: qué está bien, qué mejorar y cómo lo haría un senior.
- No uses temas que aún no vi según el plan.

## Estado actual
- **Día del plan:** Lun 2 nov en el calendario (Jornada 2) · en realidad voy en **Mar 27** (Fase 1, Jornada 1)
- **Racha:** 2 días estudiados (24 y 28 oct; el 22 fue la previa) · **Goles:** 1 / 9 (Gol 0 ✅)
- **Lo último que hice:**
  - 24 oct: archivos base (`index.html`, `styles.css`, `script.js`), header con logo, variables, `typeof`, template literals y primera tarjeta con `innerHTML`.
  - 28 oct: objeto `equipo` con `{ pj, pg, pe, pp, gf, gc }` y funciones `calcularPuntos(equipo)` y `diferenciaGoles(equipo)`; la tarjeta muestra puntos y DG → **Gol 0**.
- **Lo que me costó:** _(por completar)_
- **Próximo paso:** `zona(posicion)` con `if/else` y ternario (Mar 27); después arrays con 6 equipos (Mié 28).
