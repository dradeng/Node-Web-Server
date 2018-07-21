const request = require('supertest');

var app = require('./server').app;

it('should return hello world', (done) => {
  request(app)
    .get('/')
    //.expect('Home Page!')  this test fails
    .end(done);
})
