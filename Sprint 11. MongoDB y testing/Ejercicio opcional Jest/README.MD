# Ejercicio: Cesta de la compra + Testing con Jest

## Objetivo

Crear la lógica de una **cesta de la compra** en JavaScript y aprender a validarla mediante **tests con Jest**.

En este ejercicio:
- Tendrás que implementar funciones
- Tendrás que escribir tus propios tests
- Tu objetivo será que todos los tests pasen

---

## Estructura recomendada

```
├── cart.js
├── cart.test.js
├── package.json
```

---

## Concepto de la cesta

Trabajaremos con arrays de productos como este:

```js
const cart = [
  { id: 1, name: "Laptop", price: 1000, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 2 }
];
```

---

# Ejercicio 1: Calcular total

## Función

```js
export function getTotal(cart) {}
```

## Qué debes testear

* Que calcula correctamente el total
* Que tiene en cuenta precio y cantidad
* Qué ocurre si la cesta está vacía

---

# Ejercicio 2: Añadir producto

## Función

```js
export function addProduct(cart, product) {}
```

## Qué debes testear

* Añadir un producto nuevo
* Añadir un producto que ya existe (incrementa cantidad)
* Que la estructura del array se mantiene

---

# Ejercicio 3: Eliminar producto

## Función

```js
export function removeProduct(cart, productId) {}
```

## Qué debes testear

* Eliminar un producto existente
* Intentar eliminar uno que no existe
* Que el resto de productos se mantiene

---

# Ejercicio 4: Vaciar cesta

## Función

```js
export function clearCart() {}
```

## Qué debes testear

* Que devuelve una cesta vacía
* Que no depende de parámetros

---

# Ejercicio 5: Obtener producto por id

## Función

```js
export function getProduct(cart, productId) {}
```

## Qué debes testear

* Obtener un producto existente
* Comprobar qué devuelve si no existe
* Validar la estructura del objeto devuelto

---

## Pistas

* Usa métodos de arrays:

  * map
  * filter
  * find
  * reduce
* Piensa si debes mutar el array o devolver uno nuevo
* Empieza por un test sencillo y hazlo pasar
* Después añade más casos

---

## Cómo ejecutar los tests

```bash
npm test
```

---

## Importante

* No copies tests, escríbelos tú
* Piensa qué comportamiento quieres validar
* Testea casos normales y casos límite
* El objetivo no es solo que funcione, sino que esté bien probado

---

## Resultado esperado

* 5 funciones implementadas
* Tests escritos por ti
* Todos los tests pasando correctamente

