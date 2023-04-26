import './style.css'
import loadPage from './mainPage';

function main() {
    
    const mainSection = loadPage();

    return mainSection;
}

document.body.appendChild(main())