const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../');

chai.use(chaiHttp);
chai.should();

describe('Students', function() {
    describe('GET /', function() {
        it('should get student records', function(done) {
            chai.request(app)
                .get('/')
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
            });
        });

        it('should get single student record', function(done) {
            let id = 1;
            chai.request(app)
                .get(`/${id}`)
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
            });
        });

        it('should get a 404 not found for nonexistent record', function(done) {
            let id = 9999;
            chai.request(app)
                .get(`/${id}`)
                .end(function(err, res) {
                    res.should.have.status(404);
                    done();
            });
        });
    });
});

