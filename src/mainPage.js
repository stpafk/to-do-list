export default function loadPage() {

    const element = document.querySelector("#content");
    const createText = document.createElement('div');
    createText.innerHTML = "Test";

    element.appendChild(createText);
    
    return element

}