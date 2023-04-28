import tasksObj from "./objTsk";

export default function loadTasks() {
    let storedTasks = localStorage.getItem("myTasks"); // retrieve the myLibrary array from local storage as a JSON string
    if (storedTasks) {
        tasksObj.list = JSON.parse(storedTasks); // convert the JSON string back to a JavaScript object
    }
}