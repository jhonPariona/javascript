/*
 * Se podria usar para indicar direcciones(-0) cuando no se sabe donde esta
 */

var v = -0;

console.log(v === -0); /* true */
console.log(v === 0); /* true */
console.log(v < 0); /* false */
console.log(v > 0); /* false */

console.log(v.toString()); /* 0 */

/*
 * La mejor manera de comparar -0 es Object.is que es como un ====
 */
console.log(Object.is(v, -0)); /* true */
console.log(Object.is(v, 0)); /* false */

/* -------------------------------------------------------------------------- */
/*                     indicar subida y bajada de acciones                    */
/* -------------------------------------------------------------------------- */
function formatTrend(trendRate) {
  const direction = trendRate < 0 || Object.is(trendRate, -0) ? "🔻" : "🔺";
  return `${direction} ${Math.abs(trendRate)}`;
}

console.log(formatTrend(-3)); /* 🔻 3 */
console.log(formatTrend(3)); /* 🔺 3 */
console.log(formatTrend(0)); /* 🔺 0 */
console.log(formatTrend(-0)); /* 🔻 0 */
