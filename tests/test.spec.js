var sayHello = require('../src/testModule.js');

test('adds 1 + 2 to equal 3', () => {
    expect(sayHello.test()).toBe('Hello world!');
});
