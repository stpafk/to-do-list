import './style.css'
import loadPage from './mainPage';
import taskHandler from './handleTask';
import addTasks from './addTasks';
import loadTasks from './loadTasks';
import displayTasks from './displayTasks';

function main() {
    
    const mainSection = loadPage();
    taskHandler();
    return mainSection;
}

const elementId = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('.inputTaskName').value;
        const date = document.querySelector('.inputDueTo').value;
        const importance = document.querySelector("#Dropdown").value
        addTasks(task, new Date(date), importance);
        //it does append to the local sotrage
    };


    document.querySelector(".allBtn").addEventListener('click', function() {
        location.reload()
    });

    document.querySelector(".todayBtn").addEventListener('click', function() {
        displayTasks(1);
    });

    document.querySelector(".weekBtn").addEventListener('click', function() {
        displayTasks(2);
    });

    loadTasks();
    displayTasks(0);

    return false

});


document.body.appendChild(main())
