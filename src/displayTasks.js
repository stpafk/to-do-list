import tasksObj from "./objTsk"
import { isThisWeek } from "date-fns";
import { isToday } from "date-fns";


function displayTasks(event) {

        if (event === 1) {
            const h1 = document.querySelector('.main-h1');
            h1.innerHTML = "Today Tasks";

            let arr = tasksObj.list;
            let nArr = arr.filter((data) => isToday(new Date(`${data.due}T00:00`)));
            document.querySelector(".task-main").innerHTML = "";
            create(nArr);

        } else if (event === 2) {

            const h1 = document.querySelector('.main-h1');
            h1.innerHTML = "This Week Tasks";

            let arr = tasksObj.list.filter((data) => isThisWeek(new Date(data.due)));
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

            if (data.length === 0) {
                let objText = document.createElement('h3');
                objText.innerHTML = "It seems that you don't have any task yet!";
                display.appendChild(objText);
                return;
                }

            let index = 0;
            data.forEach((task) => {

                let Node = document.querySelector(".taskObjects");
                let Child = document.createElement("div");
                Child.classList = `task-obj-${index}`
                

                const divForLabel = document.createElement("div");
                divForLabel.classList = "for-label";

                let taskName = document.createElement("h3");
                taskName.classList = `title-task`;
                taskName.innerHTML = task.name;

                let taskDue = document.createElement("p");
                taskDue.classList = "due-task";
                taskDue.innerHTML = "Due to: " + task.due.slice(5, task.due.length);

                let taskImportance = document.createElement("p");
                taskImportance.classList = "importance-task";
                taskImportance.id = task.importance;
                taskImportance.innerHTML = task.importance;


                Child.setAttribute("data-index", index);

                let delButton = document.createElement('button');
                delButton.classList = "delBtn";
                delButton.setAttribute("data-index", index);
                delButton.id = index;
                delButton.innerHTML = "Done Task";

                delButton.addEventListener('click', (event) => {
                    const index = event.target.id;
                    tasksObj.removeTask(index);
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