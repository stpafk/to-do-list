import projectSet from "./project";

function projectHandler() {

    function loadHtml() {
        document.querySelector(".task-main").innerHTML = ""
        const array = projectSet.list;
        const main = document.querySelector(".task-main");
        const projectDiv = document.createElement("div");

        projectDiv.classList = "projectObjects";

        main.appendChild(projectDiv);

        if (array.length === 0 ) {
            
            const h3 = document.createElement("h3");
            h3.innerHTML = "It seems that you don't have any projects yet.";
            projectDiv.appendChild(h3);
            return;
        }

        console.log(array);
        for (let i = 0; i < array.length; i++) {
            
            const Node = document.querySelector(".projectObjects");
            const Child = document.createElement("div");
            Child.classList = "project-obj";
            Child.id = `${i}`;

            const projectH1 = document.createElement("h1");
            projectH1.classList = "project-h1";
            projectH1.innerHTML = array[i].name;
        
            const prjDescription = document.createElement("p");
            prjDescription.classList = "project-description";
            prjDescription.innerHTML = array[i].description;

            const prjContainer = document.createElement("div");
            prjContainer.classList = "list-container";

            const prjUl = document.createElement("ul");
            prjUl.classList = "prj-ul";

            Node.appendChild(Child);
            Child.appendChild(projectH1)
            Child.appendChild(prjDescription);
            Child.appendChild(prjContainer);
            prjContainer.appendChild(prjUl);
        }
    }

    function newProject() {
        return 0 
    }

    return {
        loadHtml,
        newProject
    }
}

export default projectHandler;