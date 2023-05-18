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

        let i = 0;

        array.forEach((project) => {

            const Node = document.querySelector(".projectObjects");
            const Child = document.createElement("div");
            Child.classList = "project-obj";
            Node.appendChild(Child);

            Child.innerHTML = project;

            return Node;

        })
    }

    function loadProjects() {
        return 0 
    }

    return {
        loadHtml,
        loadProjects
    }
}

export default projectHandler;