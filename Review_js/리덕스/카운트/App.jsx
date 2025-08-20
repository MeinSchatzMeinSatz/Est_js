// src/App.jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";
// react- redux 에서 두 개의 중요한 HOOK을 가져옵니다.
// useSelector는 Store에서 상태를 읽어오고, useDispatch는 액션을 보내는 역할을 합니다. 그리고 우리가 만든 액션 생성자 함수들도 가져옵니다.

function App() {
  // Redux Store에서 상태 가져오기 useSelector
  const { count, unitPrice, totalPrice } = useSelector((state) => state);
  // useSelector를 사용해서 Redux Store에서 필요한 상태들을 가져옵니다. state => state는 전체 상태를 그대로 가져오겠다는 뜻이에요. 이 Hook은 상태가 바뀔 때마다 컴포넌트를 자동으로 렌더링해 줍니다.

  // 액션 디스패치 함수
  const dispatch = useDispatch();
  // 액션을 보낼 수 있는 dispatch 함수를 가져옵니다. 이 함수를 통해 Redux Store에게 "이런 변화를 원해요"라고 알려줄 수 있습니다.

  // 이벤트 핸들러
  const handleIncrement = () => {
    console.log(" + INCREMENT 액션 디스패치");
    dispatch(increment());
  };
  // PLUS 버튼을 클릭했을 때 실행되는 함수입니다.
  // dispatch(increment())를 호출하면 Redux Store에게 INCREMENT 액션을 보냅니다. 그러면 Store가 자동으로 reducer 함수를 호출해서 상태를 업데이트 해요.

  const handleDecrement = () => {
    console.log(" - DECREMENT 액션 디스패치");
    dispatch(decrement());
  };
  // MINUS 버튼을 클릭했을 때 실행되는 함수입니다. DECREMENT 액션을 보내서 수량을 줇입니다.

  console.log("App 렌더링, 현재 상태:", { count, totalPrice });
  // 컴포넌트가 렌더링 될 때마다 현재 상태를 콘솔에 출력합니다. 상택 어떻게 변하는지 알 수 있어요.

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span>
        <strong>{unitPrice.toLocaleString()}</strong>원
      </span>

      <div>
        <button type="button" disabled={count <= 0} onClick={handleDecrement}>
          MINUS
        </button>
        <span>{count}</span>
        <button type="button" onClick={handleIncrement}>
          Plus
        </button>

        <div>
          총 수량 <strong>{count}</strong>
        </div>
        <div>
          <strong>{totalPrice.toLocaleString()}</strong>원
        </div>
      </div>
    </div>
  );
}

export default App;

// 이렇게 Redux는 액션 -> 디스패치 -> 리듀서 -> 새 상태 -> 컴포넌트 리렌더링의 순환 구조로 동작합니다. 마치 주문서(액션)을 보내면 요리사(리듀서)가 요리(새 상태)를 만들어주는 것과 같습니다.
