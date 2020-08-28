const helpMsg = 'print the table on console';
const createMsg = 'create a new file with the args';
const commandConfig = {
  base: {
    demand: true,
    alias: 'b',
  },
  limit: {
    alias: 'l',
    default: 10,
  },
};

const argv = require ('yargs')
  .command ('listing', helpMsg, commandConfig)
  .command ('create', createMsg, commandConfig)
  .help ().argv;

module.exports = {
  argv,
};
