import tasksObj from "./objTsk";
import { isThisWeek } from "date-fns";

export default function Week() {
    document.querySelector("main").innerHTML = "";

    const main = document.querySelector('main');
        const display = document.createElement("div");
        display.className = "taskObjects";
        main.appendChild(display);

    let index = 0;
    tasksObj.list.forEach((task) => {

        let thisWeek = new Date(task.due);
        if (isThisWeek(thisWeek)) {
            let Node = document.querySelector(".taskObjects");
            let Child = document.createElement("div");
        // for the moment i'll just keep a simple paragraph
            let Text = document.createElement('p');

            let childText = document.createTextNode(`Task: ${task.name}, Due: ${task.due}, ${task.importance}`);
            Child.setAttribute("data-index", index);

            Child.appendChild(Text);
            Text.appendChild(childText);
            Node.appendChild(Child);
            index++;

            return Node;

        }
    })
    
}