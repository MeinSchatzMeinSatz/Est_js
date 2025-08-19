# 뤼덕스!

우선 앞에서 배운 React와 Redux의 개념을 한 번 정리하고 가자.

- React는 UI 컴포넌트를 사용자 정의 요소로 표현하기 위한 JS 라이브러리.
- Redux는 데이터를 단순하고, 엄격하게 관리함으로서 앱을 예측 가능하게 만들기 위한 JS 라이브러리.
- 공통점: 복잡한 프로젝트에서 복잡도를 낮춰줌

## Redux의 흐름

[현재 예제에서의 흐름]

사용자가 버튼을 클릭 -> onclick 이벤트 발생 -> store.dispatch 호출 -> Redux Store가 액션을 받음 -> Redux가 자동으로 reducer 함수 호출

-> 현재 state가 undefined 인가?

YES! -> 초기 상태 반환 -> store의 상태 업데이트

NO! -> action.type이 CHANGE_COLOR인가?
1.-> YES -> 새로운 상태의 객체 생성
2.-> NO -> 기존 상태 반환

-> Store의 상태 업데이트 -> 상태 변경 감지 -> subscribe로 등록된 모든 함수들 자동 실행 -> blue 함수 호출 -> getState로 새로운 상태 가져옴 -> Blue컴포넌트 DOM 업데이트 -> 화면에 새로운 배경색 표시.

## 비유를 통한 예시

어렵다...! 비유를 통해 살펴보자.

- 손님: 프로그래머와 유저
- 점원: Redux의 기본 메서드들

1. store 만들기: 카페에 바리스타(reducer)가 없으면 안된다. 스토어에는 저장하고 싶은 사용자의 상태를 저장한다. `createStore` 함수를 사용하여 만들 수 있으며, `한 개의 프로젝트 당 하나의 store만 가질 수 있습니다.`

어떤 컴포넌트에서든지 변화가 일어날 데이터(상태값)는 모두 하나의 스토어에 넣습니다. 데이터를 한 곳에 모아놓기 때문에 에러가 발생했을 때 각각의 컴포넌트에 가서 값을 확인할 필요없이 데이터가 저장되어 있는 store에 가서 확인하면 됩니다.

스토어만 관리하면 되는 것이죠.

2. reducer 만들기: 바리스타를 통하지 않고 고객이(프로그래머가) 직접 커피를(데이터)를 만들(조작할) 수 없습니다.

리듀서를 통하지 않고 프로그래머가 직접 데이터를 조작할 수 없습니다.

```javascript
function reducer(state, action) {
  // 커피 제조!
}
```

state는 reducer를 통해서만 값을 처리할 수 있습니다.

reducer는 전달된 액션(action)과 이전 state값을 갖고 어떻게 값을 처리해줘야할지 결정합니다. 실제 값의 변경이 일어나서 reducer가 호출되면 액션(action)에 따라서 값이 바뀌게 되고 새로운 새로운 state값을 반환합니다.

예를 들어 아래의 코드에서는 "ADD"라는 action.type이 reducer에게 전달되었을 때, ADD에 해당하는 값을 수정한 뒤 반환합니다.

만약 액션이 "ADD"와 "DELETE"가 아니라면 기존 상태 값을 반환합니다.

```javascript
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "DELETE":
      return state - 1;
    default:
      return state;
  }
};
```

reducer의 첫번째 매개변수인 state는 처음 호출될 때, undefined가 됩니다. 그래서 초기값을 지정해줘야 합니다.

3. render 만들기(서빙 점원) : 실제 화면에 뿌려주는 역할을 합니다. 이때 서빙 점원은 `var state = store.getState();`를 통해 데이터를 받아야 합니다.

```javascript
function red() {
  var state = store.getState();
  // render(innerHTML로 구현)
}
function blue() {
  var state = store.getState();
  // render(innerHTML로 구현)
}
function green() {
  var state = store.getState();
  // render(innerHTML로 구현)
}
```

4. subscribe : 굳이 비유를 하자면, 진동벨입니다. 주문이 완료되면 진동벨이 울리고 점원들 통해 구독했던 모든 컴포넌트의 state값이 교체됩니다.

```javascript
function red() { ... 중략 ... }
store.subscribe(red); // 이 red는 구독한 함수, 값 X

function blue() {  ...중략... }
store.subscribe(blue);

function green() { ... 중략 ... }
store.subscibe(green);
```

subscribe 함수는 액션에 의해 상태가 업데이트 될 때마다 실행됩니다.

5. action과 dispatch: 주문서(action)로 점원에게 주문을 (dispatch) 하면 바리스타(reducer)에게 주문서를 넘기는 역할을 합니다.

```javascript
function red() {
  // store.dispatch({type:"CHANGE_COLOR", color: "red"})
}
```

`액션 객체는 type 필드를 반드시 가지고 있어야 합니다`. reducer 함수가 이 type 필드값과 이전 state값을 참고해서 새로운 state를 만들기 때문입니다.

이렇게 매번 객체를 전달해주는 것은 여간 번거로운 일이 아닐 것입니다. 그래서 객체로 만들어주는 `액션 생성 함수`를 만들어 사용합니다. 이는 실수를 줄여 보다 견고한 코드를 작성할 수 있게 만듭니다.

```javascript
const addNumber = () => {
  return { type: "ADD" };
};
```

디스패치는 스토어의 내장 함수 중 하나로 dispatch를 통해 reducer 함수를 동작시킵니다. reducer 함수에게 state값과 action을 넘겨주려면 dispatch를 사용하여 넘겨주면 됩니다.

파라미터로는 액션 객체를 넣어줍니다. 이때 액션 객체를 직접 선언하는 대신 기존에 만든 액션 생성 합수(액션 객체를 변환하는 함수)를 넣어서 실행시켜도 됩니다.

```javascript
store.dispatch(addNumber); // store.dispatch({type:"ADD"})
```

6. getState: 커피(데이터)를 가져오는 점원!

getState를 사용하면 store 안에 있는 현재의 state 값을 가져올 수 있습니다. subscribe 함수와 함께 사용하면 업데이트 된 state값을 확인할 수 있습니다.(subscribe는 상태가 업데이트 될 때 실행됩니다.)

```javascript
store.getState();
```

### 정리

(action -> dispatch -> reducer -> state 변경 -> subscribe -> render -> getState -> state)

1. dispatch가 일어납니다.
2. subscribe으로 해당 action이 들어옵니다.
3. state를 수정합니다.
4. subscribe을 통하여 값이 subscribe에 등록된 모든 요소에 state가 수정되었음을 전파합니다.
5. render에서 getState를 통해 값을 새로 받아옵니다.
6. 다시 render합니다.

- replaceReducer() 리듀서를 변경할 때 사용되며 잘 사용하지 않는 함수입니다. 하나의 스토어에 반드시 하나의 리듀서만 있어야 하는 것은 아니며, 리듀서를 '변경할 수도 있다' 정도로만 캐치하고 넘어가 주시기 바랍니다.

## 데이터는 어떻게 변경될까요?

React에서 상태 값을 바꿀 때는 useState가 제공하는 setState를 사용하였습니다. 하지만 앞으로 사용할 redux에서는 state 자체에 접근하는 것도 직접 수정하는 것도 불가능합니다. 대신 Reducer 함수에게 수정 요청합니다.

```javascript
const reducer = (state = 0, action) => {
  switch (
    action.type // action.type이 "PLUS"라면 state 값을 1 더할 것입니다.
  ) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state; // 기존 state 반환.
    // action.type이 "PLUS, MINUS" 모두 아니라면 state 값의 변화는 없습니다.
  }
};
```
