const fs = require("fs");


const tableList = async (base, limit=0) => {
	if(!Number(base)) {
		throw new Error('Not a number');
	}

	console.log('==================='.green);
	console.log(`== Tabla of ${base} ==`.green);
	console.log('==================='.green);

	let data = "";

	for (let i = 1; i <= limit; i++) {
		const result = base * i;
		data += `${base} * ${i} = ${result} \n`;
	}

	return data;
}



const createFile = (base,  limit=10) => {
	return new Promise((resolve, reject) => {
        
        
        if(!Number(base)) {
            reject('Not a number');
            return;
        }
        
        let data = "";

		for (let i = 1; i <= limit; i++) {
			const result = base * i;
			data += `${base} * ${i} = ${result} \n`;
		}

		fs.writeFile(`tables/table-${base}-until-${limit}.txt`, data, "utf-8", (err) => {
			if (err) reject(err);
			else resolve(`tabla-${base}-until-${limit}.txt`);
		});
	});
};

module.exports = {
	createFile,
	tableList
};
