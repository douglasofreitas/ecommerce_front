
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../app/server');

describe("routes : index", function() {
  describe('GET /', () => {
    it('should render the index', (done) => {
      chai.request(server)
      .get('/')
      .end((err, res) => {
        res.redirects.length.should.equal(0);
        res.status.should.equal(200);
        res.type.should.equal('text/html');
        //res.text.should.contain('<h1>Welcome to Express!</h1>');
        done();
      });
    });
  });
});