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

let getEmployee = async (id) => {
    let employeeDB = employees.find((employee) => employee.id === id);;
   
	if(!employeeDB) {
        throw new Error(`employees does not exist with the id ${id}`);
    }
	else {
        return employeeDB;
	}	
};

let getInfo = async (id) => {
    let employee = await getEmployee(id);
    let resp = await getSalary(employee);

    return `${resp.name} have a salary amount of ${resp.salary}`
}

getInfo(2)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error('error =>', err);
    });
