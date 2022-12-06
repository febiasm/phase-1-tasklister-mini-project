
 

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
 
  const renderTodoItem = function (e) {
    e.preventDefault();
    const todoItemInput = document.querySelector("#new-task-description").value;
    const todoList = document.querySelector("#tasks");
    const item = document.createElement("li");
    item.textContent = todoItemInput;
 
    todoList.prepend(item);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    item.append(deleteBtn);
    const deleteTodo = function () {
      item.remove()
    };
    deleteBtn.addEventListener("click", deleteTodo);
  };

  form.addEventListener("submit", renderTodoItem);
});


