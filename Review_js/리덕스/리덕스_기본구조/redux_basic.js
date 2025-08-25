/* Part1.

Redux의 3가지 규칙(암기)
1. Single Source of Truth (단일 진실의 근원)
- 모든 데이터는 하나의 Store에만 있다.
- 여기저기 흩어져 있지 않다.

2. State is Read-only (State는 읽기 전용)
- state를 직접 수정하면 안 돼요.
- 변경하려면 Action을 보내야 한다.

3. Changes are made with Pure Functions (순수 함수로 변경)
- Reducer는 순수 함수여야 한다.
- 같은 입력 -> 항상 같은 출력
*/

// Part 2: Redux 기본 구조 (핵심!)

// STEP 1: Action Types 정의
// "어떤 일들이 일어날 수 있을지" 미리 정의한다.
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

// STEP 2: Action Types 정의
// "주문서를 만드는 함수"
const addToCart = (product) => {
  return {
    type: ADD_TO_CART, // 무엇을 할지 type으로 지정.
    payload: product, // 필요한 데이터
  };
};

// 사용 예:
// dispatch(addToCart({id: 1, name: '콜라', price: 1000}))

// STEP 3: Initial State (초기 상태)
// "처음 상태는 어떤지" 정의
const initialState = {
  items: [], // 장바구니 상품들
  totalPrice: 0, // 총 가격
};

// Step 4: Reducer (리듀서)
// "실제로 상태를 변경하는 함수"
// (현재 상태, 액션) => 새로운 상태
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // 중요: state를 직접 수정하지 않고 새 객체 반환!
      return {
        ...state, // 기존 state 복사
        items: [...state.items, action.payload], // 새 상품 추가
        totalPrice: state.totalPrice + action.payload.price,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        item: state.items.filter((item) => item.id !== action.payload),
        totalPrice:
          state.totalPrice -
          state.items.find((item) => item.id === action.payload).price,
      };

    case CLEAR_CART:
      return initialState; // 초기 상태로 리셋

    default:
      return state; // 모르는 액션은 현재 상태 그대로 반환
  }
};

// Step 5: Store 생성
import { createStore } from "redux";
const store = createStore(cartReducer);

// Step 6: React와 연결
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <YourApp />
    </Provider>
  );
}

// Part 3. 컴포넌트에서 Redux 사용하기

import { useSelector, useDispatch } from "react-redux";

// 장바구니 컴포넌트
function ShoppingCart() {
  // 1. useSelector로 state 가져오기
  const items = useSelector((state) => state.items);
  const totalPrice = useSelector((state) => state.totalPrice);

  // 2. useDispatch로 액션 보내기 준비
  const dispatch = useDispatch();

  // 3. 상품 제거 함수
  const handleRemove = (productId) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });
  };

  return (
    <div>
      <h2>장바구니</h2>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.price}원</span>
          <button onClick={() => handleRemove(item.id)}>삭제</button>
        </div>
      ))}
      <h3>총 금액: {totalPrice}원</h3>
    </div>
  );
}

// 상품 목록 컴포넌트
function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "콜라", price: 1000 },
    { id: 2, name: "사이다", price: 1000 },
    { id: 3, name: "커피", price: 1500 },
  ];

  const handleAddToCart = (product) => {
    // 액션 디스패치!
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>상품 목록</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <span>{product.price}원</span>
          <button onClick={() => handleAddToCart(product)}>
            장바구니 담기
          </button>
        </div>
      ))}
    </div>
  );
}
