import './style.css'
import loadPage from './mainPage';
import tasksObj from './objTsk';
import displayTasks from './displayTasks';

function main() {
    
    const mainSection = loadPage();
    return mainSection;
}

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector(".allBtn").addEventListener('click', function() {
        location.reload()
    });

    document.querySelector(".todayBtn").addEventListener('click', function() {
        displayTasks(1);
    });

    document.querySelector(".weekBtn").addEventListener('click', function() {
        displayTasks(2);
    });

    tasksObj.loadTasks();
    displayTasks(0);

    const mainObj = document.querySelector(".taskObjects");
    if (!mainObj.textContent) {
        let objText = document.createElement('h3');
        objText.innerHTML = "It seems that you don't have any task yet!";
        mainObj.appendChild(objText);
    }   

    return false

});


document.body.appendChild(main())
