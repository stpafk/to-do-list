import tasksObj from "./objTsk";
import saveTasks from "./saveTasks";

export default function addTasks() {

    let newTask = new Task(tskName, due, date);
    tasksObj.push(newTask);
    saveTasks();

};