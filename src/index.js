import './style.css'
import loadPage from './mainPage';
import taskHandler from './addTask';

function main() {
    
    const mainSection = loadPage();
    // something like if there is not more than 5 to do stuff, load this 

    const taskSection = taskHandler();
    mainSection.appendChild(taskSection);

    return mainSection;
}

document.body.appendChild(main())