/* eslint-disable no-undef */
import {
  app, chai, expect, userId, invalidUserId, userIdNotFound, userWithNoRecord,
} from './index.test';

describe('GET A BORROWED BOOK HISTORY', () => {
  it('should respond with a history of users borrowed books', (done) => {
    chai.request(app)
      .get(`/api/v1/books/borrowed/${userId}`)
      .end((err, res) => {
        const { message, data } = res.body;
        const {
          bookid,
          userid,
          bookreturned,
          borrowedon,
          createdAt,
          id,
          isexpired,
          returnon,
          updatedAt,
        } = data[0];
        expect(message).to.equal('book Retrieved');
        expect(res).to.have.status(200);
        expect(data).to.be.a('array');
        expect(res.body.data[0]).contains({
          id, bookid, userid, bookreturned, isexpired, borrowedon, returnon, createdAt, updatedAt,
        });
        done();
      });
  });


  it('should respond with a 404 when user does not exist', (done) => {
    chai.request(app)
      .get(`/api/v1/books/borrowed/${userIdNotFound}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error.message).to.equal('This user does not exist');
        done();
      });
  });

  it('should respond with a 404 when user does not have any borrowed book history', (done) => {
    chai.request(app)
      .get(`/api/v1/books/borrowed/${userWithNoRecord}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.error.message).to.equal('User Record not found');
        done();
      });
  });

  it('should respond with a 400 when invalid user id is provided', (done) => {
    chai.request(app)
      .get(`/api/v1/books/borrowed/${invalidUserId}`)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error.message).to.equal('Please input a valid id');
        done();
      });
  });
});
