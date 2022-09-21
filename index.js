const { runner } = require("./action");
const core = require('@actions/core');
const { add, subtract, multiply } = require("./math");
 
async function run() {
  runner(core,add,subtract,multiply)
}

run();
