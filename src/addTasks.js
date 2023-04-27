import tasksObj from "./objTsk";
import saveTasks from "./saveTasks";
import Task from "./Task";

export default function addTasks(tskName, due) {

    let newTask = new Task(tskName, due);
    tasksObj.push(newTask);
    saveTasks();

};