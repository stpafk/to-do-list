import tasksObj from "./objTsk"

function saveTask() {
    localStorage.setItem("myTasks", JSON.stringify(tasksObj.list))
}

export default saveTask;