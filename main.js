const btnCreateTask = document.querySelector("[data-btn-task]");
const createTask = (event) => {
    event.preventDefault;
    const inputTarea = document.querySelector("[data-input-task]");
    const value = inputTarea.value;
    inputTarea.value = "";
    const list = document.querySelector("[data-list]");
    const task = document.createElement("div");
    list.appendChild(task);
    const content = ` 
            <label for="">
                <input type="checkbox">
                ${value}
            </label>
            <img src="./images/bin.png" class="closeBtn">
            `
    task.innerHTML = content;
    task.classList.add("task-container")    
}

btnCreateTask.addEventListener("click", createTask);






