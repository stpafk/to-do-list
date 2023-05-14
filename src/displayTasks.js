import tasksObj from "./objTsk"
import deleteTask from "./removeTask";
import { isThisWeek } from "date-fns";
import { isToday } from "date-fns";


function displayTasks(event) {

        if (event === 1) {
            let arr = tasksObj.list;
            let nArr = arr.filter((data) => isToday(data.due));
            console.log(arr);
            console.log(nArr);
            document.querySelector(".task-main").innerHTML = "";
            create(nArr);

        } else if (event === 2) {
            let arr = tasksObj.list.filter((date) => isThisWeek(date));
            document.querySelector(".task-main").innerHTML = "";
            create(arr);
        } else {
            let arr = tasksObj.list;
            create(arr);

        }

        function create(data) {

            const main = document.querySelector('.task-main');
            const display = document.createElement("div");
            display.className = "taskObjects";
            main.appendChild(display);

            let index = 0;
            data.forEach((task) => {

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
}

export default displayTasks;