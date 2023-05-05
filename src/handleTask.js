import displayTasks from "./displayTasks";
import tasksObj from "./objTsk";

export default function taskHandler() {

    let objProperty = localStorage.getItem("myTasks");

    const add = document.createElement('form'); 
    add.classList = "addTask";

    const addH1 = document.createElement('h3');
    addH1.innerHTML = "Add New Task";

    const labelName = document.createElement('label');
    labelName.classList = "labelTask";
    labelName.innerHTML = "Task Name";

    const nameofTask = document.createElement('input');
    nameofTask.classList = "inputTaskName";

    const labelDue = document.createElement("label");
    labelDue.classList = "labelDue";
    labelDue.innerHTML = "Due To:";

    const dueTo = document.createElement('input');
    dueTo.classList = "inputDueTo";
    dueTo.type = 'date';

    const divButton = document.createElement('input');
    divButton.type = "submit";
    divButton.classList = "taskSubmit";
    divButton.value = "Submit";

    const labelImportance = document.createElement("label");
    labelImportance.classList = "labelImportance";
    labelImportance.innerHTML = "Importancy:";

    let selectionTask = document.createElement("select");
    selectionTask.name = "Importance";
    selectionTask.id = "Dropdown";

    let importanceArray = [["Urgent", 0], ["Important", 1], ["Special Attention", 2], ["Casual", 3], ["Unimportant", 4]];
    for (let i = 0; i < importanceArray.length; i++) {
        let option = document.createElement("option");
        option.value = importanceArray[i][0];
        option.id = importanceArray[i][1];
        option.text = importanceArray[i][0];
        selectionTask.appendChild(option);
    }

    add.appendChild(addH1);
    add.appendChild(labelName);
    add.appendChild(nameofTask);
    add.appendChild(labelDue);
    add.appendChild(dueTo);
    add.appendChild(labelImportance);
    add.appendChild(selectionTask);
    add.appendChild(divButton);

    if (!objProperty) {
        
        const main = document.querySelector('.task-main');

        main.appendChild(add);

        return main

    } else {
        const main = document.querySelector('.task-main');
        main.appendChild(add);
        displayTasks();

        return main
    }

}