import './style.css'
import loadPage from './mainPage';
import taskHandler from './handleTask';

function main() {
    
    const mainSection = loadPage();
    // something like if there is not more than 5 to do stuff, load this 

    const taskSection = taskHandler();
    mainSection.appendChild(taskSection);

    return mainSection;
}

const elementId = document.querySelector('#content');

document.body.appendChild(main())

document.querySelector('form').onsubmit = () => {
    console.log('yes')
}
