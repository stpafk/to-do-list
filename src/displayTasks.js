import tasksObj from "./objTsk"

function displayTasks() {

        const main = document.querySelector('main');
        const display = document.createElement("div");
        display.className = "taskObjects";
        main.appendChild(display);

        let index = 0;
        tasksObj.list.forEach((task) => {

            let Node = document.querySelector(".taskObjects");
            let Child = document.createElement("div");
            // for the moment i'll just keep a simple paragraph
            let Text = document.createElement('p');

            let childText = document.createTextNode(`Task: ${task.name}, Due: ${task.due}`);
            Child.setAttribute("data-index", index)

            Child.appendChild(Text);
            Text.appendChild(childText);
            Node.appendChild(Child);
            index++;

            return Node;

    })
}

export default displayTasks;