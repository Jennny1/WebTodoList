const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos"



function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);

    saveToDos();
}



function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button)
    todoList.appendChild(li);
}


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //Filter 역할 해당 id를 가진 값을 제외
    saveToDos()
}


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// function Filter(){
//     return true
// }


todoForm.addEventListener("submit", handleToDoSubmit);


// function sayHello(item){
//     console.log("this is turn of ", item);
// }


const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos;
    // parsedTodos.forEach(sayHello); // 각각의 item을 수행
    parsedTodos.forEach(paintToDo); 
}