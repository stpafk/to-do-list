import tasksObj from "./objTsk";

export default function addTasks(tskName, due) {

    tasksObj.addTask(tskName, due)
    console.log(tasksObj.list)
};