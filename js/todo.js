const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// 로컬 저장소에 배열 String 으로 바꾸어 저장
function saveToDos() {
    // JSON.stringify -> Object를 String으로 바꾸어서 저장해줌
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 삭제 버튼 동작 처리 함수
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // .filter -> 필터 내 조건 만족하는 Arrray만 다시 리턴해줌!
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id));
    saveToDos();
}

// 화면에 페인팅하는 함수, 삭제 버튼도 생성
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// 제출 버튼 동작 처리 함수, 화면에 페인팅한 후, 배열에 저장
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    // local storage에 text와 id를 가진 object를 저장!
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    // JSON.parse -> String to 배열
    const parsedToDos = JSON.parse(savedToDos);
    // 원래 저장되어 있는 배열 보존
    toDos = parsedToDos;
    // forEach -> 배열 각각의 원소에 대해 실행!
    parsedToDos.forEach(paintToDo);
}