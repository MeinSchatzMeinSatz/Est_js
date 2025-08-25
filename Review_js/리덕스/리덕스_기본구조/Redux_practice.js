// === 1. 액션 타입 ===
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// === 2. 액션 생성자 (액션을 쉽게 만드는 함수) ===
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text: text,
    done: false,
  },
});

// === 3. 리듀서 ===
const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      // 새 할일 추가
      return {
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        // 할 일 삭제
        todo: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      // 완료/미완료 토글
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };

    default:
      return state;
  }
}

// === 4. React 컴포넌트에서 사용 ===
function TodoApp() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = (text) => {
    dispatch(addTodo(text));
  };

  return (
    <div>
      <button onClick={() => handleAdd("Redux 공부하기")}>할 일 추가</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text} - {todo.done ? "완료!" : "진행중"}
        </div>
      ))}
    </div>
  );
}
