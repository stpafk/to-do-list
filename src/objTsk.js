import Task from "./Task";
import loadTasks from "./loadTasks";

const tasksObj = {
    list: [],
    addTask(tskName, due) {
        let newTask = new Task(tskName, due);
        this.list.push(newTask);
        loadTasks();
    }
}

export default tasksObj;