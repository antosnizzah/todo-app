document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todoInput");
    const addBtn = document.getElementById("addBtn");
    const todoList = document.getElementById("addtask");


    function addTodoItem() {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const label = document.createElement("label");
        label.textContent = todoText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("deleteBtn");

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = "";
        updateItemsLeft();
      }
    }

    
    function deleteTodoItem(event) {
      if (event.target.classList.contains("deleteBtn")) {
        const li = event.target.parentElement;
        todoList.removeChild(li);
        updateItemsLeft();
      }
    }

 
    function updateItemsLeft() {
      const itemsLeft = document.querySelector(".filters span");
      const totalItems = todoList.querySelectorAll("li").length;
      itemsLeft.textContent = `${totalItems} items left`;
    }


    addBtn.addEventListener("click", addTodoItem);

 
    todoList.addEventListener("click", deleteTodoItem);


    updateItemsLeft();
  });