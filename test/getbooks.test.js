/* eslint-disable no-undef */
import { chai, expect, app } from './index.test';

describe('Get all books route', () => {
  it('should display all books', (done) => {
    chai.request(app)
      .get('/api/v1/books')
      .end((err, res) => {
        const { status, data } = JSON.parse(res.text);
        expect(status).to.be.equal(200);
        expect(data).to.be.a('array');
        done();
      });
  });
});
