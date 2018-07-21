const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33,11);
  expect(res).toBe(44).toBeA('number');
});

it('shoud square two numbers', () => {
  var res = utils.square(4);
  expect(res).toBe(16).toBeA('number');
})

it('shoudl add two numbers', (done) => {
  utils.asyncAdd(4,3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});
it('shoudl square two numbers', (done) => {
  utils.asyncSquare(4, (sum) => {
    expect(sum).toBe(16).toBeA('number');
    done();
  });
});

it('should expect some values', () => {
  expect(12).toNotBe(13);
});
