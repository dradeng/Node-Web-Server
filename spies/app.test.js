const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy', () => {
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });
  it('should call saveUser with user object', () => {
    var email = 'andrew@gmail.com';
    var password = '123445';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalled({email, password});
  });
});
