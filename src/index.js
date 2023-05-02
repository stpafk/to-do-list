import './style.css'
import loadPage from './mainPage';
import taskHandler from './handleTask';
import addTasks from './addTasks';
import loadTasks from './loadTasks';
import displayTasks from './displayTasks';
import Week from './weekTasks';
import Today from './todayTasks.js'

function main() {
    
    const mainSection = loadPage();
    const taskSection = taskHandler();
    mainSection.appendChild(taskSection);
    return mainSection;
}

const elementId = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('.inputTaskName').value;
        const date = document.querySelector('.inputDueTo').value;
        addTasks(task, date);
        //it does append to the local sotrage
    };


    document.querySelector(".allBtn").addEventListener('click', function() {
        location.reload()
    });

    document.querySelector(".todayBtn").addEventListener('click', function() {
        Today();
    });

    document.querySelector(".weekBtn").addEventListener('click', function() {
        Week();
    });

    loadTasks();
    displayTasks();

    return false

});


document.body.appendChild(main())
