/* 기능 명세
Todo Class -> 일의 내용, 일의 상태, 메서드changeState
TodoManager Class -> 할 일의 목록을 관리합니다. 할 일을 저장, 할 일의 목록을 보여줌, 할 일의 남은 갯수를 반환
*/

class Todo {
    // 초기화 함수
    constructor(item, finished) {
        this.item = item;
        this.finished = finished;
    }

    changeState() {
        this.finished = !this.finished;
    }
}

class TodoManager {
    constructor() {
        this.todoList = [];
    }

    addItem(item) {
        this.todoList.push(item);
    }

    getItems() {
        return this.todoList;
    }

    //     getLeftTodoCount() {
    //         return
    //     }
}
