import { SomeClass } from '../src/someModule';

it('should test', () => {
    var obj = new SomeClass();
    const message = obj.sayHello();
    expect(message).toEqual('Hello!');
});
