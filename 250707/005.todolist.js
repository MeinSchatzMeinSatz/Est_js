// TodoItem 클래스
// 할 일 항목을 표현합니다.
// 프로퍼티
// todo: 문자열로 된 할 일 내용
// isDone: 완료 여부 (기본값 false)
// 메서드
// changeStatus() : 완료 여부를 토글합니다.

// 1. TodoItem 클래스 만들기
class TodoItem {
    constructor(todo, isDone = false) {
        this.todo = todo;
        this.isDone = isDone;
        // this.id
    }

    changeStatus() {
        // 토글이란?
        this.idDone = !this.isDone;
        return this.isDone;
    }
}

// TodoList 클래스
// 할 일 항목들을 담는 리스트입니다.
// 프로퍼티
// items: 할 일들을 담는 배열
// 메서드
// addItem(text) : 새로운 할 일 항목을 추가하고 반환
// getItems() : 전체 할 일 목록을 반환
// removeItem(index) : 해당 인덱스의 할 일을 삭제, 삭제 여부에 따라 불리언 값 반환
// getLeftTodoCount() : 아직 완료되지 않은 할 일 개수를 반환
// [실습] 투두리스트 만들기

// 2. TodoList 클래스 만들기
class TodoList {
    constructor(items) {
        // 여기에 코드 작성
        this.items = [];
    }

    addItem(text) {
        // 여기에 코드 작성
        const newTodo = new TodoItem(text, false);
        this.items.push(newTodo);
        return newTodo;
    }

    getItems() {
        // 여기에 코드 작성
        return this.items;
    }

    removeItem(index) {
        // 여기에 코드 작성
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    getLeftTodoCount() {
        return this.items.filter((item) => !item.isDone).length;
    }
}

// 내가 만든 클래스가 제대로 동작하는지 확인해보세요!
const myTodoList = new TodoList();
const item1 = myTodoList.addItem("자바스크립트 복습하기");
const item2 = myTodoList.addItem("청소하기");
const item3 = myTodoList.addItem("공복에 물 한잔");

console.log("할 일 목록 :", myTodoList.getItems());
item1.changeStatus();
console.log("남은 할 일 개수 :", myTodoList.getLeftTodoCount());

myTodoList.removeItem(0);
console.log("할 일 목록 :", myTodoList.getItems());
console.log("남은 할 일 개수 :", myTodoList.getLeftTodoCount());
