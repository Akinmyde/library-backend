/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/src/app';

chai.use(chaiHttp);

const postBook = {
  title: 'test book post',
  author: 'mchardex',
  fileurl: 'file/sim/sim.sim/mchardex',
  coverimageurl: 'cover/sim/sim/sim/mchardex',
  description: 'testing book post is on of the ..',
};

const postBookRoute = '/api/v1/bookss';

describe('POST A BOOK', () => {
  it('should respond with the created book', (done) => {
    chai.request(app)
      .post(postBookRoute)
      .send(postBook)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });

  it('should respond with error message on duplicate book post', (done) => {
    chai.request(app)
      .post(postBookRoute)
      .send(postBook)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal('title must be unique');
        done();
      });
  });

  it('should respond with 422 with incomplete payload(title)', (done) => {
    chai.request(app)
      .post(postBookRoute)
      .send({
        author: 'mchardex',
        fileurl: 'file/sim/sim.sim/mchardex',
        coverimageurl: 'cover/sim/sim/sim/mchardex',
        description: 'testing book post is on of the ..',
      })
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res.body.error).to.equal('title is required');
        done();
      });
  });

  it('should respond with 422 with incomplete payload(author)', (done) => {
    chai.request(app)
      .post(postBookRoute)
      .send({
        title: 'test book post',
        fileurl: 'file/sim/sim.sim/mchardex',
        coverimageurl: 'cover/sim/sim/sim/mchardex',
        description: 'testing book post is on of the ..',
      })
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res.body.error).to.equal('author is required');
        done();
      });
  });

  it('should respond with 422 with incomplete payload(fileurl)', (done) => {
    chai.request(app)
      .post(postBookRoute)
      .send({
        title: 'test book post',
        author: 'mchardex',
        coverimageurl: 'cover/sim/sim/sim/mchardex',
        description: 'testing book post is on of the ..',
      })
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res.body.error).to.equal('fileurl is required');
        done();
      });
  });

  it('should respond with 422 with incomplete payload(coverimageurl)', (done) => {
    chai.request(app)
      .post(postBookRoute)
      .send({
        title: 'test book post',
        author: 'mchardex',
        fileurl: 'file/sim/sim.sim/mchardex',
        description: 'testing book post is on of the ..',
      })
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res.body.error).to.equal('coverimageurl is required');
        done();
      });
  });

  it('should respond with 422 with incomplete payload(description)', (done) => {
    chai.request(app)
      .post(postBookRoute)
      .send({
        title: 'test book post',
        author: 'mchardex',
        fileurl: 'file/sim/sim.sim/mchardex',
        coverimageurl: 'cover/sim/sim/sim/mchardex',
      })
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res.body.error).to.equal('description is required');
        done();
      });
  });
});

export {
  chai,
  expect,
  app,
};
