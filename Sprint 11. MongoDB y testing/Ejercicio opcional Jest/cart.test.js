import { getTotal, addProduct, removeProduct, clearCart, getProduct } from './cart.js';

describe('getTotal', () => {
  test('calcula el total con precio y cantidad', () => {
    // Arrange
    const cart = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
      { id: 2, name: 'Mouse', price: 50, quantity: 2 }
    ];
    // Act
    const result = getTotal(cart);
    // Assert
    expect(result).toBe(1100); // 1000×1 + 50×2
  });

  test('devuelve 0 si la cesta está vacía', () => {
    expect(getTotal([])).toBe(0);
  });
});

describe('addProduct', () => {
  test('añade un producto nuevo a la cesta', () => {
    // Arrange
    const cart = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 }
    ];
    const newProduct = { id: 2, name: 'Mouse', price: 50, quantity: 1 };

    // Act
    const result = addProduct(cart, newProduct);

    // Assert
    expect(result).toHaveLength(2);                 // la cesta creció en 1
    expect(result[result.length - 1]).toEqual(newProduct); // y el último es el nuevo
  });

  test('incrementa la cantidad si el producto ya existe', () => {
    // Arrange
    const cart = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
      { id: 2, name: 'Mouse', price: 50, quantity: 2 }
    ];
    const repeated = { id: 2, name: 'Mouse', price: 50, quantity: 3 };

    // Act
    const result = addProduct(cart, repeated);

    // Assert
    expect(result).toHaveLength(2);                 // NO se añade un duplicado
    const mouse = result.find((p) => p.id === 2);
    expect(mouse.quantity).toBe(5);                 // 2 que había + 3 nuevas
  });

  test('no muta la cesta original', () => {
    // Arrange
    const cart = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 }
    ];
    const copiaOriginal = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 }
    ];
    const newProduct = { id: 2, name: 'Mouse', price: 50, quantity: 1 };

    // Act
    const result = addProduct(cart, newProduct);

    // Assert
    expect(cart).toEqual(copiaOriginal);            // la original sigue intacta
    expect(cart).toHaveLength(1);                   // y no ha crecido
    expect(result).not.toBe(cart);                  // el resultado es OTRO array (otra referencia)
  });
});

describe('removeProduct', () => {
  test('elimina un producto existente', () => {
    // Arrange
    const cart = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
      { id: 2, name: 'Mouse', price: 50, quantity: 2 }
    ];

    // Act
    const result = removeProduct(cart, 2);

    // Assert
    expect(result).toHaveLength(1);                 // queda uno menos
    expect(result.find((p) => p.id === 2)).toBeUndefined(); // y el eliminado ya no está
  });

  test('devuelve la cesta intacta si el id no existe', () => {
    // Arrange
    const cart = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 }
    ];

    // Act
    const result = removeProduct(cart, 99);

    // Assert
    expect(result).toHaveLength(1);                 // no se borró nada
    expect(result).toEqual(cart);                   // mismo contenido
  });

  test('mantiene el resto de productos', () => {
    // Arrange
    const cart = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
      { id: 2, name: 'Mouse', price: 50, quantity: 2 },
      { id: 3, name: 'Teclado', price: 80, quantity: 1 }
    ];

    // Act: eliminamos el del medio
    const result = removeProduct(cart, 2);

    // Assert: los otros dos siguen ahí, intactos y en orden
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({ id: 1, name: 'Laptop', price: 1000, quantity: 1 });
    expect(result[1]).toEqual({ id: 3, name: 'Teclado', price: 80, quantity: 1 });
  });
});

describe('clearCart', () => {
  test('devuelve un array vacío', () => {
    // Act
    const result = clearCart();

    // Assert
    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
  });

  test('no depende de parámetros', () => {
    // Act: la llamamos pasándole cosas que debería ignorar
    const result = clearCart([{ id: 1, name: 'Laptop', price: 1000, quantity: 1 }]);

    // Assert: da igual lo que reciba, siempre devuelve cesta vacía
    expect(result).toEqual([]);
  });
});

describe('getProduct', () => {
  test('devuelve el producto si existe', () => {
    // Arrange
    const cart = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
      { id: 2, name: 'Mouse', price: 50, quantity: 2 }
    ];

    // Act
    const result = getProduct(cart, 2);

    // Assert
    expect(result).toEqual({ id: 2, name: 'Mouse', price: 50, quantity: 2 });
  });

  test('devuelve undefined si no existe', () => {
    // Arrange
    const cart = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 }
    ];

    // Act
    const result = getProduct(cart, 99);

    // Assert
    expect(result).toBeUndefined();
  });

  test('el objeto devuelto tiene la estructura correcta', () => {
    // Arrange
    const cart = [
      { id: 1, name: 'Laptop', price: 1000, quantity: 1 }
    ];

    // Act
    const result = getProduct(cart, 1);

    // Assert: validamos que tiene las 4 propiedades del modelo
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('price');
    expect(result).toHaveProperty('quantity');
  });
});