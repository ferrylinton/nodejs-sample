const todoService = require('./services/todo-service');

async function run() {
    try {
        const create = todoService.create("Create node application");
        console.log(">>> todoService.create()");
        console.log(create);

        const todos = await todoService.find();
        console.log(">>> todoService.find()");
        console.log(todos);

        const findById = await todoService.findById(create.id);
        console.log(">>> todoService.findById()");
        console.log(findById);

        const update = await todoService.update(create.id, {task: 'xxx', done: true});
        console.log(">>> todoService.update()");
        console.log(update);

        // const deleteById = await todoService.deleteById(create.id);
        // console.log(">>> todoService.deleteById()");
        // console.log(deleteById);

    } finally {
        console.log('[APP] exit after 1 second')
        setTimeout(function () { 
            process.exit();
        }, 1000);
    }
}

run().catch(console.dir);