//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [
        {
            text: 'Grocery shopping',
            completed: true
        },
        {
            text: 'Clean yard',
            completed: false
        },
        {
            text: 'Film course',
            completed: false
        }
    ],
    getTasksToDo() {
        // Mine
        // this.tasks.filter((task) => {
        //     if(task.completed == false) {
        //         console.log(task.text);
        //     }
        // });

        // Instructor's
        // 1
        // const tasksToDo = this.tasks.filter((task) => {
        //     return task.completed === false;
        // });
        // return tasksToDo;
        // 2
        // return this.tasks.filter((task) => {
        //     return task.completed === false;
        // });
        // 3
        return this.tasks.filter((task) => task.completed === false);
    }
}

console.log(tasks.getTasksToDo())