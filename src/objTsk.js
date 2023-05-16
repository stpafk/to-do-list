import Task from "./Task";
import saveTask from "./saveTasks";

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