# 🏆 Roadmap · Tabla Champions Pro

**23 oct → 20 dic 2026** · 2 h lunes a viernes · 4 h sábado y domingo · en la mañana

> 💡 En VS Code abre la vista previa con **Ctrl + Shift + V** (o **Ctrl + K, V** para verla al lado).
> Marca cada día cambiando `- [ ]` por `- [x]`.

---

## 📋 Índice

- [Reglas del juego](#-reglas-del-juego)
- [Pretemporada · 23–25 oct](#-pretemporada--2325-oct)
- [Jornada 1 · 26 oct–1 nov](#-jornada-1--26-oct1-nov)
- [Jornada 2 · 2–8 nov](#-jornada-2--28-nov)
- [Jornada 3 · 9–15 nov](#-jornada-3--915-nov)
- [Jornada 4 · 16–22 nov](#-jornada-4--1622-nov)
- [Jornada 5 · 23–29 nov](#-jornada-5--2329-nov)
- [Jornada 6 · 30 nov–6 dic](#-jornada-6--30-nov6-dic)
- [Jornada 7 · 7–13 dic](#-jornada-7--713-dic)
- [Jornada 8 · 14–20 dic](#-jornada-8--1420-dic)
- [Bitácora](#-bitácora)

---

## 🗺️ Las 5 fases

| Fase | Fechas | Qué aprendes | Qué ves funcionando | Gol |
|---|---|---|---|---|
| 0 · Arranque | 23–25 oct | Git, variables, objetos | Tu primera tarjeta de equipo | Gol 0 |
| 1 · JS desde cero | 26 oct–15 nov | Funciones, arrays, DOM, eventos, closures | La tabla real en el navegador | Goles 1–3 |
| 2 · Datos y async | 16–22 nov | Módulos, fetch, async/await, clases | Tu app publicada con link | Gol 4 |
| 3 · Backend + BD | 23 nov–6 dic | Node, Express, PostgreSQL | Tu propia API con base de datos | Goles 5–6 |
| 4 · React y final | 7–20 dic | TypeScript, React, tests, publicar | App completa online | Goles 7–8 y 🏆 |

🏟️ **Champions real:** Jornada 4 el 3–4 nov · Jornada 5 el 24–25 nov · Jornada 6 el 8–9 dic.

---

## 🎮 Reglas del juego

### Un día de semana (2 h)

| Bloque | Tiempo | Qué haces |
|---|---|---|
| 🔥 Calentamiento | 15 min | Repasas lo de ayer |
| 📘 Concepto | 30 min | Un tema nuevo y chico |
| 🛠️ Construcción | 60 min | Lo aplicas en tu app |
| ✅ Cierre | 15 min | `git commit` + una línea en la bitácora |

**Fin de semana (4 h) = "Partido de la semana":** una funcionalidad grande y visible. Pausa de 10 min cada hora.

### Puntaje

- 🔥 **Racha:** cada día que estudias suma 1.
- ⚽ **Gol:** cada domingo terminas un hito visible (9 en total).
- 🟨 **Tarjeta amarilla:** si faltas un día. Al día siguiente haces el Plan B para limpiarla.
- ⏱️ **Plan B (30 min):** calentamiento + un commit pequeño. Cuenta para la racha.
- 🏆 **Copa:** el 20 de diciembre, con tu proyecto online.

### Cómo usar la IA sin dejar de aprender

1. Intenta solo 20 minutos antes de pedir ayuda.
2. Pide pistas, no soluciones.
3. Nunca pegues código que no puedas explicar línea por línea.
4. Usa la IA para revisar tu código **después** de escribirlo.

---

# FASE 0 y 1 · JavaScript desde cero

## 🏁 Pretemporada · 23–25 oct

- [ ] **Vie 23** · Cómo se conectan HTML, CSS y JS; `console.log`; Git básico (`init`, `add`, `commit`, `push`).
  → Creas el repo y la carpeta `v1-web/` y la abres con Live Server.
- [ ] **Sáb 24** · Variables (`let`, `const`), tipos y template literals.
  → Tarjeta de tu equipo favorito con `innerHTML`.
- [ ] **Dom 25** · Objetos.
  → Objeto `equipo` con `{ nombre, pais, pj, pg, pe, pp, gf, gc }`; muestras puntos y DG.
  → ⚽ **Gol 0: primera tarjeta con datos calculados.**

## ⚽ Jornada 1 · 26 oct–1 nov
*Funciones, condicionales, arrays y bucles*

- [ ] **Lun 26** · Funciones con `return` → `calcularPuntos(equipo)` y `diferenciaGol(equipo)`.
- [ ] **Mar 27** · `if/else`, `===`, ternario → `zona(posicion)`: octavos, play-off o eliminado.
- [ ] **Mié 28** · Arrays: `length`, `push`, índices → array con 6 equipos de prueba.
- [ ] **Jue 29** · Bucles `for` y `for...of` → una fila por equipo en una `<table>`.
- [ ] **Vie 30** · Funciones flecha y `forEach` → refactor con `crearFila(equipo)`.
- [ ] **Sáb 31** · CSS de tablas y clases dinámicas → tabla verde, amarilla y roja según la zona.
- [ ] **Dom 1** · Reto: bandera por país y DG con signo (+3, −2).
  → ⚽ **Gol 1: tabla con colores.**

## ⚽ Jornada 2 · 2–8 nov
*Ordenar, filtrar y eventos* · 🏟️ Champions J4: 3–4 nov

- [ ] **Lun 2** · `sort` con función comparadora (y por qué modifica el array original) → ordenas por puntos.
- [ ] **Mar 3** · Comparar por varios criterios → desempate: Pts, DG y GF.
- [ ] **Mié 4** · `addEventListener('click')` → botones para ordenar por puntos o por goles.
- [ ] **Jue 5** · Evento `input`, `filter`, `includes`, `toLowerCase` → buscador que filtra mientras escribes.
- [ ] **Vie 6** · `map` y `join` → generas las filas con `map`.
- [ ] **Sáb 7** · Modelas los partidos `{ jornada, local, visitante, golesLocal, golesVisitante }` → `calcularTabla(equipos, partidos)`.
- [ ] **Dom 8** · Agregas un partido y ves cómo cambia todo.
  → ⚽ **Gol 2: la tabla se calcula sola.**

## ⚽ Jornada 3 · 9–15 nov
*Formularios, closures y datos reales*

- [ ] **Lun 9** · Formularios: `submit`, `preventDefault`, `Number()` → formulario "Registrar resultado".
- [ ] **Mar 10** · Validaciones: equipos distintos, goles ≥ 0, campos completos → mensajes de error.
- [ ] **Mié 11** · Closures (la mochila que una función lleva consigo) → `crearGeneradorId()`.
- [ ] **Jue 12** · `localStorage`, `JSON.stringify`, `JSON.parse` → tus resultados no se borran al recargar.
- [ ] **Vie 13** · Archivo `equipos.js` con los 36 equipos reales de la Champions 2026/27.
- [ ] **Sáb 14** · Cargas los resultados reales de las jornadas 1 a 4 (72 partidos).
- [ ] **Dom 15** · Clic en un equipo para ver sus partidos.
  → ⚽ **Gol 3: comparas tu tabla con la oficial de UEFA. Si coincide, tu lógica es correcta.**

---

# FASE 2 y 3 · Datos, asincronía y backend

## ⚽ Jornada 4 · 16–22 nov
*Datos y asincronía*

- [ ] **Lun 16** · Módulos ES: `import`, `export`, `<script type="module">` → separas en `datos.js`, `calculos.js`, `vista.js`.
- [ ] **Mar 17** · JSON y promesas (el ticket de tu pedido) → `equipos.json` y `partidos.json` leídos con `fetch`.
- [ ] **Mié 18** · `async/await` y `try/catch` → "Cargando..." y mensaje si algo falla.
- [ ] **Jue 19** · Clases: `constructor` y métodos → `class Equipo` con `puntos()` y `dg()`.
- [ ] **Vie 20** · Encapsulación con `#privado` → `class Liga` que guarda equipos y partidos y calcula la tabla.
- [ ] **Sáb 21** · `<select>` y evento `change` → fixture por jornada (1 a 8).
- [ ] **Dom 22** · Pruebas con `console.assert` y publicación en GitHub Pages.
  → ⚽ **Gol 4: tu app tiene link público.**

## ⚽ Jornada 5 · 23–29 nov
*Node, Express y PostgreSQL* · 🏟️ Champions J5: 24–25 nov

- [ ] **Lun 23** · Node, `npm init`, Express (el mozo del restaurante) → carpeta `api/` con servidor que responde "hola".
- [ ] **Mar 24** · Rutas `GET` que devuelven JSON → `GET /api/equipos` en navegador o Thunder Client.
- [ ] **Mié 25** · Repaso PostgreSQL: PK y FK → BD `champions` con tablas `equipos` y `partidos`; insertas los 36 equipos.
- [ ] **Jue 26** · Conectas Express con PostgreSQL usando `pg` (Pool) y `.env`.
- [ ] **Vie 27** · Consultas parametrizadas (`$1`, `$2`) contra inyección SQL → `GET /api/equipos` y `GET /api/partidos` desde la BD.
- [ ] **Sáb 28** · `POST /api/partidos` con validación → registras los resultados reales de la J5.
- [ ] **Dom 29** · `GET /api/tabla` reutilizando tu lógica. Reto opcional: calcularla solo con SQL.
  → ⚽ **Gol 5: tu propia API con base de datos.**

## ⚽ Jornada 6 · 30 nov–6 dic
*Frontend y backend conectados*

- [ ] **Lun 30** · CORS → tu v1 consume tu API en lugar de los JSON.
- [ ] **Mar 1** · `PUT` y `DELETE` → corregir o borrar un resultado mal cargado.
- [ ] **Mié 2** · Códigos HTTP (200, 201, 400, 404, 500) y middleware de errores.
- [ ] **Jue 3** · Ordenas el backend en `routes/`, `controllers/` y `db.js`.
- [ ] **Vie 4** · `JOIN` en SQL → `GET /api/equipos/:id` con sus partidos.
- [ ] **Sáb 5** · Flujo completo: el formulario guarda en la BD y la tabla se refresca.
- [ ] **Dom 6** · Script `seed.sql` para recrear la BD y README de la API.
  → ⚽ **Gol 6: app full-stack funcionando.**

---

# FASE 4 · React, publicación y la Copa

## ⚽ Jornada 7 · 7–13 dic
*TypeScript y React* · 🏟️ Champions J6: 8–9 dic

- [ ] **Lun 7** · TypeScript en un día: tipos, `interface Equipo`, `interface Partido` → `web-react/` con Vite (plantilla `react-ts`).
- [ ] **Mar 8** · Componentes y JSX → `<Encabezado />` y `<TablaPosiciones />` con datos fijos.
- [ ] **Mié 9** · Props y `map` → `<FilaEquipo equipo={...} />`.
- [ ] **Jue 10** · `useState` → botones de ordenar y buscador (tu lógica de la Jornada 2).
- [ ] **Vie 11** · `useEffect` y `fetch` a tu API → la tabla real llega a React.
- [ ] **Sáb 12** · Formularios controlados → registras los resultados reales de la J6 desde React.
- [ ] **Dom 13** · Renderizado condicional → detalle del equipo seleccionado.
  → ⚽ **Gol 7: tabla Champions en React.**

## 🏆 Jornada 8 · 14–20 dic
*Calidad, publicación y final*

- [ ] **Lun 14** · Testing con Vitest → primer test de `calcularTabla`.
- [ ] **Mar 15** · Tests de desempate y de zonas.
- [ ] **Mié 16** · Diseño responsive y estados de carga y error → tu app en el celular.
- [ ] **Jue 17** · Publicas la API y la base de datos (elegimos ese día un servicio gratuito vigente).
- [ ] **Vie 18** · Publicas el frontend conectado a la API online.
- [ ] **Sáb 19** · README de portafolio: capturas, GIF demo, cómo ejecutarlo y qué aprendiste.
- [ ] **Dom 20** · Muestras la app a alguien y haces tu retrospectiva.
  → 🏆 **Copa: proyecto hecho por ti, online.**

> Si te atrasas, **no comprimas temas: mueve el plan.** Primero que la app funcione;
> los tests extra, el reto SQL y la publicación de React pueden ir después del 20.

---

## 📓 Bitácora

| Fecha | Qué hice | Qué me costó | Racha 🔥 | Goles ⚽ |
|---|---|---|---|---|
| 23/10 | | | 1 | 0 |
| | | | | |
