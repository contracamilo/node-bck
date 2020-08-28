let employees = [
	{
		id: 1,
		name: "Django",
	},
	{
		id: 2,
		name: "Cristina",
	},
	{
		id: 3,
		name: "Camilo",
	},
];

let salaries = [
	{
		id: 1,
		salary: 100,
	},
	{
		id: 2,
		salary: 200,
	},
];

let getSalary = (employee) => {
	return new Promise((resolve, reject) => {
		let salaryDB = salaries.find((salary) => salary.id === employee.id);

        !salaryDB
            ? reject(`Salary does not exist for this employee: ${employee.name}`) 
            : resolve({
                name: employee.name,
                salary: salaryDB.salary,
                id: employee.id
            });
	});
};

let getEmployee = (id) => {
	return new Promise((resolve, reject) => {
		let employeeDB = employees.find((employee) => employee.id === id);

		!employeeDB ? reject(`employees does not exist with the id ${id}`) : resolve(employeeDB);
	});
};




getEmployee(10)
	.then((employee) => {
       return getSalary(employee);  
    })
    .then((res) => {
        console.log(res)
    })
	.catch((err) => {
		console.error(err);
	});
