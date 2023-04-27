import './style.css'
import loadPage from './mainPage';

function main() {
    
    const mainSection = loadPage();
    // something like if there is not more than 5 to do stuff, 
    return mainSection;
}

document.body.appendChild(main())