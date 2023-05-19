
const Project = function(name, description=null, list=[]) {
    this.name = name,
    this.description = description,
    this.list = list
};

const projectSet = {

    list: [],
    addProject(name, description) {
        let newProject = new Project(name, description);
        this.list.push(newProject);
        this.saveProject();
    },

    saveProject() {
        localStorage.setItem(`myProjects`, JSON.stringify(this.list))
    },
    
    loadProjects() {
        let stored = localStorage.getItem("myProjects");
        if (stored) {
            this.list = JSON.parse(stored);
        }
    },
    
    pushTaskProject(index, task) {
        let prj = this.list.at(index)
        prj.list.push(task);
        this.saveProject();
    }

}

export default projectSet;