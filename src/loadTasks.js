
export default function loadTasks() {
    let storedLibrary = localStorage.getItem("myTasks"); // retrieve the myLibrary array from local storage as a JSON string
    if (storedTasks) {
        myLibrary = JSON.parse(storedLibrary); // convert the JSON string back to a JavaScript object
    }
}