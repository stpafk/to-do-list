function tasksObj() {
    const list = []

    return list;
}

function Task(tskName, due, date) {
    this.name = tskName,
    this.due = due,
    this.date = date;
};

function addTasks() {

    let newTask = new Task(tskName, due, date);
    tasksObj.push(newTask);
    saveTasks();

};

export default function taskHandler() {

    if (tasksObj().length < 5) {
        const add = document.createElement('div');
        add.classList = "addTask";

        const nameofTask = document.createElement('input');
        nameofTask.classList = "inputTaskName";

        const dueTo = document.createElement('input');
        dueTo.classList = "inputDueTo";

        const divButton = document.createElement('input');
        divButton.type = "submit";
        divButton.classList = "taskSubmit";

        add.appendChild(nameofTask);
        add.appendChild(dueTo);
        add.appendChild(divButton);

        const main = document.querySelector('main');
        main.appendChild(add);

        return main
    } else {
        console.log('error');
    }

}