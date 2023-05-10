import tasksObj from "./objTsk"
import deleteTask from "./removeTask";

function displayTasks() {

        const main = document.querySelector('.task-main');
        const display = document.createElement("div");
        display.className = "taskObjects";
        main.appendChild(display);

        let index = 0;
        tasksObj.list.forEach((task) => {

            let Node = document.querySelector(".taskObjects");
            let Child = document.createElement("div");
            Child.classList = `task-obj-${index}`
            

            const divForLabel = document.createElement("div");
            divForLabel.classList = "for-label";

            let taskName = document.createElement("h3");
            taskName.classList = `title-task`;
            taskName.innerHTML = "Task: " + task.name;

            let taskDue = document.createElement("p");
            taskDue.classList = "due-task";
            taskDue.innerHTML = "Due to: " + task.due;

            let taskImportance = document.createElement("p");
            taskImportance.classList = "importance-task";
            taskImportance.innerHTML = "Importance: " + task.importance;


            Child.setAttribute("data-index", index);

            let delButton = document.createElement('button');
            delButton.classList = "delBtn";
            delButton.setAttribute("data-index", index);
            delButton.id = index;
            delButton.innerHTML = "Done Task";

            delButton.addEventListener('click', (event) => {
                const index = event.target.id;
                deleteTask(index);
            });

            
            Node.appendChild(Child);
            Child.appendChild(divForLabel);
            divForLabel.appendChild(taskName);
            Child.appendChild(taskDue);
            Child.appendChild(taskImportance);
            Child.appendChild(delButton);
            index++;

            return Node;

    })
}

export default displayTasks;