const helpMsg = {
  create: 'to create a new task created',
  update: 'to update a selected task',
  completed: 'to complete a task',
  listing: 'to list TO DO tasks',
  delete: 'to list TO DO tasks',
};

const description = {
  demand: true,
  alias: 'd',
  desc: 'task description',
};

const completed = {
  alias: 'c',
  desc: 'TO-DO task completed',
  default: true,
};

const listing = {
  alias: 'l',
  desc: 'created tasks list',
};


const argv = require ('yargs')
  .command ('create', helpMsg.create, {description})
  .command ('listing', helpMsg.listing, {listing})
  .command ('update', helpMsg.update, {description, completed})
  .command ('delete', helpMsg.delete, {description})
  .help ().argv;

module.exports = {
  argv,
};
