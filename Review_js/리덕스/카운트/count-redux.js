import { createStore } from "redux";
// Redux 라이브러리에서 Store를 만드는 함수를 가져옵니다. Store는 앱의 모든 상태를 보관하는 큰 창고라고 생각하면 됩니다.

// 상수
const PRICE = 17500;

// 액션 타입
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
// 상수들을 정의합니다. PRICE는 상품 가격이고 INCREMENT와 DECREMENT는 액션 타입입니다. 액션 타입을 상수로 만드는 이유는 오타를 방지하고 나중에 수정하기 쉽게 하기 위해서이다.

// 액션 생성자
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
// 액션 생성자 함수들입니다. 이 함수들을 호출하면 Redux가 이해할 수 있는 액션 객체를 만들어줍니다. 예를 들어, increment()를 호출하면 { type: 'INCREMENT' } 객체가 만들어집니다.

// 초기 상태
const initialState = {
  count: 0,
  unitPrice: PRICE,
  totalPrice: 0,
};
// 앱이 처음 시작될 때의 초기 상태를 정의합니다. 수량은 0개, 단가는 17500원, 총 가격은 0원으로 시작하죠.

// Reducer
function counterReducer(state = initialState, action) {
  console.log("🔄 Reducer 호출:", action.type, state);
  // Reducer 함수의 시작입니다. 이 함수는 Redux의 핵심이에요. 현재 상태와 액션을 받아서 새로운 상태를 만들어 반환합니다. state = initialState는 상태가 없을 때 초기값을 사용하겠다는 뜻이다.

  switch (action.type) {
    case INCREMENT:
      const newCountInc = state.count + 1;
      return {
        ...state,
        count: newCountInc,
        totalPrice: newCountInc * state.unitPrice,
      };
    // 액션 타입이 INCREMENT일 때의 처리입니다. 기존 수량에서 1을 더하고, 총 가격도 새로 계산합니다. ...state는 [스프레드 연산자]로 기존 상태를 복사하는 겁니다. Redux에서는 기존 상태를 직접 수정하지 않고 새로운 객체를 만들어야 한다.

    // + 스프레드 연산자에 대한 핵심 개념. Redux에서 사용하는 이유를 쉽게 설명해주세요.
    // '...'

    case DECREMENT:
      const newCountDec = Math.max(0, state.count - 1);
      return {
        ...state,
        count: newCountDec,
        totalPrice: newCountDec * state.unitPrice,
      };
    // DECREMENT 액션 처리입니다. Math.max(0, state.count -1)로 수량이 0 밑으로 내려가지 않도록 막습니다.

    default:
      return state;
  }
}

// Store 생성
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// 실제 Redux Store를 생성합니다. 첫 번째 인자는 reducer 함수, 두 번째는 브라우저의 Redux DevTools와 연결하는 코드입니다.

export default store;

// 이 파일은 Redux의 뇌 역할을 하는 곳입니다. 상태 관리의 모든 규칙과 로직이 들어있어요. 21년부터는 Redux Toolkit이라는 것을 권장하고 있어 createStore가 줄이 쳐집니다. 다만 이렇게 했을 경우 각 부분을 하나씩 이해하기 난해 하여 createStore를 사용하도록 하겠습니다. 실무에서는 RTK를 사용합니다. 변경된 코드는 뒤에 첨부 합니다.
