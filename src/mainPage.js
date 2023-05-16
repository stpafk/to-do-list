import taskHandler from "./handleTask";

export default function loadPage() {

        // Create the navbar element
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    // Create the webLogo element
    const webLogo = document.createElement("div");
    webLogo.classList.add("webLogo");
    navbar.appendChild(webLogo);

    const navButtons = document.createElement("div");
    navButtons.classList = "nav-buttons";
    navbar.appendChild(navButtons);

    const formButton = document.createElement("button");
    formButton.classList = "form-button";
    formButton.innerHTML = "New Task";

    formButton.addEventListener("click", function() {
        taskHandler();
    })

    navButtons.appendChild(formButton);

    // Create the h1 element
    const h1 = document.createElement("h1");
    h1.textContent = "To-do-List";
    webLogo.appendChild(h1);

    // Create the sidebar element
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    // Create the tasks element
    const tasks = document.createElement("div");
    tasks.classList.add("tasks");
    sidebar.appendChild(tasks);

    // Create the allTasks element
    const allTasks = document.createElement("div");
    allTasks.classList.add("allTasks");
    tasks.appendChild(allTasks);

    // Create the allBtn element
    const allBtn = document.createElement("button");
    allBtn.classList.add("allBtn");
    allBtn.textContent = "All Tasks";
    allTasks.appendChild(allBtn);

    // Create the todayTasks element
    const todayTasks = document.createElement("div");
    todayTasks.classList.add("todayTasks");
    tasks.appendChild(todayTasks);

    // Create the todayBtn element
    const todayBtn = document.createElement("button");
    todayBtn.classList.add("todayBtn");
    todayBtn.textContent = "Today Tasks";
    todayTasks.appendChild(todayBtn);

    // Create the weekTasks element
    const weekTasks = document.createElement("div");
    weekTasks.classList.add("weekTasks");
    tasks.appendChild(weekTasks);

    // Create the weekBtn element
    const weekBtn = document.createElement("button");
    weekBtn.classList.add("weekBtn");
    weekBtn.textContent = "This Week Tasks";
    weekTasks.appendChild(weekBtn);

    // Create the main element
    const main = document.createElement("main");

    // Create the h1 element
    const mainh1 = document.createElement("h1");
    mainh1.classList = "main-h1";
    mainh1.textContent = "Your Tasks";
    main.appendChild(mainh1);

    // create this to solve the problem of grid
    const taskMain = document.createElement("div");
    taskMain.classList = "task-main";
    main.appendChild(taskMain);

    const content = document.querySelector("#content");
    content.appendChild(navbar);
    content.appendChild(sidebar);
    content.appendChild(main);

    return content;
}
