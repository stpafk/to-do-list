import Task from "./Task";
import saveTasks from "./saveTasks";

const tasksObj = {
    list: [],
    addTask(tskName, due) {
        let newTask = new Task(tskName, due);
        this.list.push(newTask);
        saveTasks();
    }
}

export default tasksObj;