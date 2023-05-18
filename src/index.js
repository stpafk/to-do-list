import './style.css'
import loadPage from './mainPage';
import tasksObj from './objTsk';
import displayTasks from './displayTasks';
import projectSet from './project';

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

    document.querySelector(".project-btn").addEventListener("click", function() {
        projectSet.loadProjects();
    })

    tasksObj.loadTasks();
    displayTasks(0);   

    return false

});


document.body.appendChild(main())
