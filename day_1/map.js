export function setUnion(a = [], b = []) {
  const setA = new Set(a);
  const setB = new Set(b);
  return new Set([...setA, ...setB]);
}

// Ejemplo de uso
if (import.meta.url.endsWith('map.js')) {
  console.log(Array.from(setUnion([1, 2, 3], [3, 4, 5])));
}
