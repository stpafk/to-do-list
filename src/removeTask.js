import displayTasks from "./displayTasks";
import loadTasks from "./loadTasks";
import tasksObj from "./objTsk";

export default function deleteTask(event){

    let index = event.target.data-index
    tasksObj.list.splice(index, 1);
    loadTasks();
    displayTasks();

};