// Definice funkcí pro základní matematické operace

// Sčítání
export function add(a, b) {
  return a + b;
}

// Odčítání
export function subtract(a, b) {
  return a - b;
}

// Násobení
export function multiply(a, b) {
  return a * b;
}

// Dělení
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Dělení nulou není povoleno.");
  }
  return a / b;
}

// Import funkcí z modulu 'math.js'
import { add, subtract, multiply, divide } from './math.js';

// Použití importovaných funkcí
const a = 10;
const b = 5;

console.log(`Sčítání: ${a} + ${b} = ${add(a, b)}`);
console.log(`Odčítání: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Násobení: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Dělení: ${a} / ${b} = ${divide(a, b)}`);
