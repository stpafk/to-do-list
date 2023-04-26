import './style.css'
import loadPage from './mainPage';

function main() {

    const mainSection = loadPage()

    return mainSection;
}

const elementId = document.querySelector('#content');

document.body.appendChild(main())