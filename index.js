const core = require('@actions/core');
const add = require('./add')
const subtract = require('./subtract')
const multiply = require('./multiply')
 
async function run() {
  try {
    const input1 = core.getInput('input-1');
    const input2 = core.getInput('input-2');
    const start = new Date();
    core.debug('Starting at : ' + start.toTimeString());

    core.info(`Performin addition of : ${input1} & ${input2} ...`);
    const addResult = add(input1,input2)

    core.info(`Performin subtraction of : ${input1} & ${input2} ...`);
    const subtractResult = subtract(input1,input2)

    core.info(`Performin multiplication of : ${input1} & ${input2} ...`);
    const multiplyResult = multiply(input1,input2)
    const end = new Date();
    core.debug('Ending at : ' + end.toTimeString());

    core.warning('It take : ' + (end - start));
 

    core.setOutput('addition', addResult);
    core.setOutput('subtract', subtractResult);
    core.setOutput('multiplication', multiplyResult);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
