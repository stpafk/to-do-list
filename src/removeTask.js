import displayTasks from "./displayTasks";
import tasksObj from "./objTsk";
import saveTask from "./saveTasks";

export default function deleteTask(index){

    tasksObj.list.splice(index, 1);
    saveTask();   
    location.reload()
};