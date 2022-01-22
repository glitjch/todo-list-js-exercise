function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markCompleted: function () {
      console.log(`❗️ Updating status of ${this.title}.`);
      this.complete = true;
    },
    logState: function () {
      console.log(`${this.complete ? "🐵" : "🙈"} ${this.title} has${this.complete ? " " : " not "}been completed`);
    },
  };
  return task;
};


// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 ouf of the litter box");
const task2 = newTask("Do Laundry", "☠️");
const tasks = [task1, task2]


task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);
