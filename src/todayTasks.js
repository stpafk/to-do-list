import tasksObj from "./objTsk";
import { isToday } from "date-fns";

export default function Today() {
    document.querySelector("main").innerHTML = "";

    const main = document.querySelector('main');
        const display = document.createElement("div");
        display.className = "taskObjects";
        main.appendChild(display);

    let index = 0;
    tasksObj.list.forEach((task) => {

        let todayTask = new Date(`${task.due}T00:00`);
        if (isToday(todayTask)) {
            let Node = document.querySelector(".taskObjects");
            let Child = document.createElement("div");
        // for the moment i'll just keep a simple paragraph
            let Text = document.createElement('p');

            let childText = document.createTextNode(`Task: ${task.name}, Due: ${task.due}`);
            Child.setAttribute("data-index", index);

            Child.appendChild(Text);
            Text.appendChild(childText);
            Node.appendChild(Child);
            index++;

            return Node;

        }
    })
    
}