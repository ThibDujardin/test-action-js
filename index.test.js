const { add, subtract, multiply } = require("./math");
const { runner } = require("./action");

 
const core = require('@actions/core');

const process = require('process');
const cp = require('child_process');
const path = require('path');
  
 
test('make sure it returns something', async() => {
  const core = {
    getInput: jest.fn().mockResolvedValue(parseInt(43)),
    debug: jest.fn(),
    info: jest.fn(),
    warning: jest.fn(),
    setFailed: jest.fn(),
    setOutput: jest.fn()
  };
  const math = {
    add: jest.fn().mockReturnValue(1)
  };
    runner(core,math.add,subtract,multiply)
    expect(core.getInput).toHaveBeenCalledTimes(2);
    expect(core.debug).toHaveBeenCalledTimes(2);
    expect(core.info).toHaveBeenCalledTimes(3);
    expect(core.warning).toHaveBeenCalledTimes(1);
    expect(core.setOutput).toHaveBeenCalledTimes(3);
    expect(core.setFailed).toHaveBeenCalledTimes(0);
    expect(math.add).toHaveBeenCalledTimes(1);
  });

describe("simple test", () => {
 
  it('test runs', () => {
    process.env['INPUT_INPUT1'] = 2;
    process.env['INPUT_INPUT2'] = 5;


    const ip = path.join(__dirname, 'index.js');
    const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
    console.log(result);
 
  })
});


describe("simple arithmetic", () => {
  describe("addition", () => {
    test("expect 2 + 3 = 5", () => {
      expect(add(2, 3)).toEqual(5);
    });
  });

  describe("subtract", () => {
    test("expect 5 - 2 = 3", () => {
      expect(subtract(5, 2)).toEqual(3);
    });
  });

  describe("multiply", () => {
    test("expect 2 * 3 = 6", () => {
      expect(multiply(2, 3)).toEqual(6);
    });
  });
});