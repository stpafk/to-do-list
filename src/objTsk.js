import saveTask from "./saveTasks";

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
        saveTask();
    },
    removeTask(index) {
       this.list.splice(index, 1);
       saveTask();
       location.reload();
    }
}

export default tasksObj;