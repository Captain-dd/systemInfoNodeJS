
const os = require('os');

// Get the system name
const systemName = os.hostname();

console.log(`System Name: ${systemName}`);

// const machineId = require('machine-id');

// Get the machine ID
const machineId = require('node-machine-id');

const id = machineId();

console.log(id)