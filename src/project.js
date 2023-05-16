
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
        this.saveProject(name);
    },

    saveProject(name) {
        localStorage.setItem(`${name}`, JSON.stringify(this.list))
    },

    loadProjects(name) {
        let stored = localStorage.getItem(`${name}`);
        if (stored) {
            this.list[`${name}`] = JSON.parse(stored);
        }
    },

    pushTaskProject(name, task) {
        let p = this.list[`${name}`];
        p.list.push(task);
    }

}

export default projectSet;