
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { createFile, tableList } = require('./multiply/multiply');
const { _, base, limit} = argv;

let command = _[0];

switch (command) {
    case 'listing':
        console.log('listing')
        tableList(base, limit)
        .then((values) => console.log(values))
        .catch((err) => console.error(err));
        break;
    case 'create':
        console.log('creating');
        createFile(base, limit)
        .then(file => console.log(`file created ${colors.green(file)}`))
        .catch((err) => console.error(err));
        break;
    default:
        console.log('Command not found')
        break;
}



