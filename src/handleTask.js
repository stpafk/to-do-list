import displayTasks from "./displayTasks";
import tasksObj from "./objTsk";

export default function taskHandler() {

    let objProperty = localStorage.getItem("myTasks");

    const add = document.createElement('form'); 
    add.classList = "addTask";

    const addH1 = document.createElement('h3');
    addH1.innerHTML = "Add New Task";

    const nameofTask = document.createElement('input');
    nameofTask.classList = "inputTaskName";

    const dueTo = document.createElement('input');
    dueTo.classList = "inputDueTo";
    dueTo.type = 'date';

    const divButton = document.createElement('input');
    divButton.type = "submit";
    divButton.classList = "taskSubmit";
    divButton.value = "Submit";

    add.appendChild(addH1);
    add.appendChild(nameofTask);
    add.appendChild(dueTo);
    add.appendChild(divButton);

    if (!objProperty) {
        
        const main = document.querySelector('main');
        main.appendChild(add);

        return main

    } else {
        const main = document.querySelector("main");
        main.appendChild(add);
        displayTasks()

        return main
    }

}