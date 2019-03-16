/* eslint-disable no-undef */
import { app, chai, expect } from './index.test';

describe('POST borrow a book', () => {
  it('shoiuld respond with the borrowed book', (done) => {
    chai.request(app)
      .post('/api/v1/books/borrow')
      .send({
        bookid: '7139d3af-b8b4-44f6-a49f-9305791700f4',
        userid: '6517a6ea-662b-4eef-ab9f-20f89bd7099c',
        returnon: '2019-04-09T11:00:00.000Z',
      })
      .end((err, res) => {
        expect(res).to.be.an('object');
        expect(res).to.have.status(202);
        done();
      });
  });

  it('should respond with 400 for empty inputs', (done) => {
    chai.request(app)
      .post('/api/v1/books/borrow')
      .send({
        bookid: '7139d3af-b8b4-44f6-a49f-9305791700f4',
        userid: '',
        returnon: '2019-04-09T11:00:00.000Z',
      })
      .end((error, res) => {
        expect(res).to.be.an('object');
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal('Some values are missing');
        done();
      });
  });

  it('should respond with 400 for invalid id', (done) => {
    chai.request(app)
      .post('/api/v1/books/borrow')
      .send({
        bookid: '7139d3af-b8b4-44f6-a49f-9305791700f4',
        userid: '6517a6ea-662b-4eef-ab9f-20f89bd7099c6677889',
        returnon: '2019-04-09T11:00:00.000Z',
      })
      .end((error, res) => {
        expect(res).to.be.an('object');
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal('Id provided is invalid');
        done();
      });
  });
});
