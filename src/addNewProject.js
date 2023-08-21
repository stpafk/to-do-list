import projectSet from "./project";

function handleProject() {

    let prjArr = localStorage.getItem("myProjects");

    const add = document.createElement('form'); 
    add.classList = "addTask";

    const addH1 = document.createElement('h3');
    addH1.innerHTML = "Add New Project";

    const labelName = document.createElement('label');
    labelName.classList = "labelTask";
    labelName.innerHTML = "Project Name:";

    const nameofTask = document.createElement('input');
    nameofTask.classList = "inputTaskName";

    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerHTML = "Description:";

    const description = document.createElement("input");
    description.classList = "inputPrjDescription";

    const divButton = document.createElement('input');
    divButton.type = "submit";
    divButton.classList = "taskSubmit";
    divButton.value = "Submit";

    const closeButton = document.createElement("button");
    closeButton.classList = "close-btn";
    closeButton.innerHTML = "X";

    closeButton.addEventListener("click", function() {
        const form = document.querySelector("form");
        const buttonDisable = document.querySelector(".form-button");
        buttonDisable.disabled = false;
        buttonDisable.style = "cursor: pointer;"
        
        form.remove();
    })

    add.appendChild(addH1);
    add.appendChild(labelName);
    add.appendChild(nameofTask);
    add.appendChild(description);
    add.appendChild(divButton);
    add.appendChild(closeButton);

    add.onsubmit = (event) => {
        
        event.preventDefault();
        const prj = document.querySelector('.inputTaskName').value;
        const description = document.querySelector(".inputPrjDescription").value;

        if (prj === "") {
            let lTask = document.querySelector(".labelTask");
            lTask.innerHTML = "Please input some project name!";
            lTask.style = "color: red;"
            return;
        }

        projectSet.addProject(prj, description);
        location.reload()
        }

        if (!prjArr) {
        
            const main = document.querySelector('.task-main');
    
            main.appendChild(add);
            
            return;

        } else {
            const main = document.querySelector('.task-main');
            main.appendChild(add);
            const buttonDisable = document.querySelector(".add-project");
            buttonDisable.disabled = true;
            buttonDisable.style = "cursor: not-allowed;";
    
    
            return main
        }
        //it does append to the local sotrage
    };

export default handleProject;