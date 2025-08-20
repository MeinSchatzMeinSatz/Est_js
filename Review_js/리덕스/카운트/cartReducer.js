export const ADD_TO_CART = "cart/ADD_TO_CART";
export const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";
export const CLEAR_CART = "cart/CLEAR_CART";

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
export const clearCart = () => ({ type: CLEAR_CART });

const initialState = {
  items: [], // {id, name, price}
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const exists = state.items.some((item) => item.id === action.payload.id);

      if (exists) return state;

      return { ...state, items: [...state.items, action.payload] };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return { ...state, items: [] };
  }
}

// 장바구니에 담긴 상품 전체 배열 반환하는 함수
export const selectCartItems = (state) => state.cart.items;

// 장바구니에 담긴 상품 갯수
export const selectCartCount = (state) => state.cart.items.length;

// 모든 상품의 가격을 합산한 총 금액
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => {
    sum + item.price;
  }, 0);
