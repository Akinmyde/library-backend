/* eslint-disable no-undef */
import { app, chai, expect } from './index.test';

const bookId = '7139d3af-b8b4-44f6-a49f-9305791700f4';

describe('GET A SINGLE BOOK', () => {
  it('should respond with a single book', (done) => {
    chai.request(app)
      .get(`/api/v1/books/${bookId}`)
      .end((err, res) => {
        const { status, data } = res.body;
        expect(status).to.equal(200);
        if (data.length) {
          expect(data[0]).to.have.property('id');
          expect(data[0]).to.have.property('author');
          expect(data[0]).to.have.property('title');
        }
        done();
      });
  });
});
