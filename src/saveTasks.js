import tasksObj from "./objTsk"

export default function saveTasks() {
    localStorage.setItem("myTasks", JSON.stringify(tasksObj.list));
}