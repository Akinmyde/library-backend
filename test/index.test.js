/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/src/app';

const userId = '57c515a1-890d-412f-8ca1-0a5395123dca';
const invalidUserId = '57c515a1-890d-412f-8ca1-';
const userIdNotFound = 'eb165925-1b8a-4573-89db-4b83c4d5df72';
const userWithNoRecord = '859f29ae-f451-437e-b727-b19857ebfff2';

chai.use(chaiHttp);

describe('HOMEPAGE', () => {
  it('should respond with welcome title', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should respond with error for wrong route', (done) => {
    chai.request(app)
      .get('/thisIsNotARoute')
      .end((err, res) => {
        expect(res).to.have.status(404);
        const { status, error } = res.body;
        expect(status).to.equal(404);
        expect(error).to.equal('Sorry, the page you tried cannot be found');
        done();
      });
  });
});

export {
  chai,
  expect,
  app,
  userId,
  invalidUserId,
  userIdNotFound,
  userWithNoRecord,
};
