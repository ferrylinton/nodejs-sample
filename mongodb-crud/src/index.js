const todoService = require('./services/todo-service');

async function run() {
    try {
        const todo = {
            task: "Create node application",
            done: false
        }

        const todos = await todoService.find();
        console.log(">>> todoService.find()");
        console.log(todos);

        todos.forEach(async todo => {
            todoService.deleteById(todo._id)
        });

        const create = await todoService.create(todo);
        console.log(">>> todoService.create()");
        console.log(create);
        todo._id = create._id;

        const findById = await todoService.findById(todo._id);
        console.log(">>> todoService.findById()");
        console.log(findById);

        const update = await todoService.update(todo._id, {done: true});
        console.log(">>> todoService.update()");
        console.log(update);

        const deleteById = await todoService.deleteById(todo._id);
        console.log(">>> todoService.deleteById()");
        console.log(deleteById);

    } finally {
        console.log('[APP] exit after 1 second')
        setTimeout(function () { 
            process.exit();
        }, 1000);
    }
}

run().catch(console.dir);