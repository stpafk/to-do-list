export default function tasksObj() {
    const list = []

    return list;
}

function Task(tskName, due, date) {
    this.name = tskName,
    this.due = due,
    this.date = date;
};