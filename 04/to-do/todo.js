const fs = require("fs");

let todoList = [];

const saveToDB = () => {
	let data = JSON.stringify(todoList);

	fs.writeFile("db/data.json", data, (err) => {
		if (err) {
			throw new Error("Error on save", err);
			return;
		}
		console.log("The file has been saved!");
	});
};

const loadDB = () => {
	try {
		todoList = require("../db/data.json");
	} catch (error) {
		todoList = [];
	}
};

const getList = () => {
	loadDB();
	return todoList;
};

const updateTask = (desc, status = true) => {
	loadDB();

	let index = todoList.findIndex((task) => task.desc === desc);

	if (index >= 0) {
		todoList[index].completed = status;
		saveToDB();
		return true;
	} else {
		return false;
	}
};

const create = (desc) => {
	loadDB();

	let todo = {
		desc,
		completed: false,
		date: new Date().toLocaleString(),
	};

	todoList.push(todo);
	saveToDB();
	return todo;
};

const deleteTask = desc => {
  loadDB ();

  let newTodo = todoList.filter (value => value.desc !== desc);

  if (newTodo.length === todoList.length) {
    return false;
  } else {
    todoList = newTodo;
    saveToDB ();
  }

  return true;
};


module.exports = {
	create,
	saveToDB,
	getList,
	updateTask,
	deleteTask,
};
