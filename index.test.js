const { add, subtract, multiply } = require("./math");
const { runner } = require("./action");

 
const core = require('@actions/core');

const process = require('process');
const cp = require('child_process');
const path = require('path');
  
 
test('make sure it returns something', async() => {
  const core = {
    getInput: jest.fn().mockReturnValue(1),
    setFailed: jest.fn().mockReturnValue("foo"),
  };
  const math = {
    add: jest.fn().mockReturnValueOnce(1)
  };
    runner(core,add,subtract,multiply)
    expect(core.getInput).toHaveBeenCalledTimes(2);
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