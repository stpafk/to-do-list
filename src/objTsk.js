

function Task(tskName, due, importance) {
    this.name = tskName,
    this.due = due,
    this.importance = importance
};

const tasksObj = {

    list: [],
    addTask(tskName, due, importance) {
        let newTask = new Task(tskName, due, importance);
        this.list.push(newTask);
        this.saveTask();
    },

    removeTask(index) {
       this.list.splice(index, 1);
       this.saveTask();
       location.reload();
    },

    loadTasks() {
        let storedTasks = localStorage.getItem("myTasks"); // retrieve the myLibrary array from local storage as a JSON string
        if (storedTasks) {
            this.list = JSON.parse(storedTasks); // convert the JSON string back to a JavaScript object
        }
    },

    addTasks(tskName, due, importance) {

        this.addTask(tskName, due, importance);
        
    },
    saveTask() {
        localStorage.setItem("myTasks", JSON.stringify(tasksObj.list));
    }

}

export default tasksObj;