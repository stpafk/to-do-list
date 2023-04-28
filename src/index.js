import './style.css'
import loadPage from './mainPage';
import taskHandler from './handleTask';
import addTasks from './addTasks';
import tasksObj from './objTsk';
import loadTasks from './loadTasks';
console.log(tasksObj.list)

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
    loadTasks()
})

document.body.appendChild(main())


