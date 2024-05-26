// Importar las funciones desde app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected);
});

test('1 euro debería ser 1.07 dólares', () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test('10 euros deberían ser 10.7 dólares', () => {
    expect(fromEuroToDollar(10)).toBeCloseTo(10.7);
});

test('1 dólar debería ser aproximadamente 146.26 yenes', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);
});

test('10 dólares deberían ser aproximadamente 1462.62 yenes', () => {
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62);
});

test('1 yen debería ser aproximadamente 0.0056 libras', () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.00556, 5);
});

test('1000 yenes deberían ser aproximadamente 5.57 libras', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.57, 4);  // Ajuste de precisión a 4 decimales
});



