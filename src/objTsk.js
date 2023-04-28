import Task from "./Task";
import saveTask from "./saveTasks";

const tasksObj = {
    list: [{"hello": "world"}],
    addTask(tskName, due) {
        let newTask = new Task(tskName, due);
        this.list.push(newTask);
        saveTask();
    }
}

export default tasksObj;