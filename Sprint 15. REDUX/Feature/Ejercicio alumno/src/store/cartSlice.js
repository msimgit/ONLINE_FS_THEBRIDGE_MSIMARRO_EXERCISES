import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCartRequest,
  addCartItemRequest,
  removeCartItemRequest,
  checkoutRequest,
} from '../api/cart';

// Guardamos el objeto "cart" completo tal como lo devuelve el backend
// (asumimos { items: [...], total } — ajustar si la forma real es distinta).
const initialState = {
  cart: null,
  order: null, // último pedido confirmado, útil para CheckoutSuccessPage
  loading: false,
  error: null,
};

const extractError = (error, fallback) =>
  error.response?.data?.error || fallback;

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const { cart } = await fetchCartRequest();
      return cart;
    } catch (error) {
      return rejectWithValue(extractError(error, 'Error al cargar el carrito'));
    }
  },
);

export const addCartItem = createAsyncThunk(
  'cart/addCartItem',
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const { cart } = await addCartItemRequest({ productId, quantity });
      return cart;
    } catch (error) {
      return rejectWithValue(extractError(error, 'Error al añadir el producto'));
    }
  },
);

export const removeCartItem = createAsyncThunk(
  'cart/removeCartItem',
  async (itemId, { rejectWithValue }) => {
    try {
      const { cart } = await removeCartItemRequest(itemId);
      return cart;
    } catch (error) {
      return rejectWithValue(extractError(error, 'Error al eliminar el producto'));
    }
  },
);

export const checkout = createAsyncThunk(
  'cart/checkout',
  async (_, { rejectWithValue }) => {
    try {
      const { order } = await checkoutRequest();
      return order;
    } catch (error) {
      return rejectWithValue(extractError(error, 'Error al confirmar el pedido'));
    }
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchCart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // addCartItem
      .addCase(addCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // removeCartItem
      .addCase(removeCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // checkout
      .addCase(checkout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkout.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
        state.cart = null; // tras el pedido, el carrito queda vacío
      })
      .addCase(checkout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;