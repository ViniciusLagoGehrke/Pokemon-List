const debounce = require("./debounce");
const sinon = require("sinon");//required to mock timeout

let clock;

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

test('debounce', () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 100);

  // Call it immediately
  debouncedFunc();
  expect(func).toHaveBeenCalledTimes(0); // func not called

  // Call it several times with 50ms between each call
  for(let i = 0; i < 10; i++) {
    clock.tick(50);
    debouncedFunc();
  }
  expect(func).toHaveBeenCalledTimes(0); // func not called

  // wait 100ms
  clock.tick(100);
  expect(func).toHaveBeenCalledTimes(1);  // func called
});