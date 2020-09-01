const argv = require("./config/yargs").argv;
const colors = require('colors');
const { create, getList,  updateTask,  deleteTask } = require("./to-do/todo");



const {_, description, completed} = argv;

let command = _[0];

switch (command) {
	case "create":
		let task = create(description);
		break;
	case "listing":
		let tasks = getList();

		for (const task of tasks) {
			console.log('============TO-DO==========='.green);
			console.log(task.desc);
			console.log(task.completed);
			console.log('============================'.green);
		}

		break;
	case "update":
		let updated =  updateTask(description, completed);
		console.log('updated', updated);
		break;
	case "delete":
		let deleted =  deleteTask(description);
		console.log('erased', deleted);
		break;
	default:
		console.log("command not found");
		break;
}
