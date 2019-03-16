import Joi from 'joi';
import model from '../models';

const { Books, Users } = model;


class BorrowBook {
/**
 * Validates UUID
 *
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @returns {object} HTTP response
 */
  static async idValidation(req, res, next) {
    const schema = Joi.string().guid({
      version: [
        'uuidv4',
      ],
    });
    const { bookid, userid } = req.body;

    if (!bookid || !userid) {
      return res.status(400).send({
        status: 400,
        error: 'Some values are missing',
      });
    }

    const { error } = Joi.validate(userid, schema);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: 'Id provided is invalid',
      });
    }
    return next();
  }

  /**
 * Verifies bookid existence
 *
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @returns {object} HTTP response
 */
  static async checkBookId(req, res, next) {
    const { bookid } = req.body;
    if (!bookid) {
      return res.status(400).send({
        status: 400,
        error: 'Bookid cannot be empty',
      });
    }
    const book = await Books.findOne({
      where: {
        id: bookid,
      },
    });

    if (!book) {
      return res.status(404).json({
        status: 404,
        error: 'No book was found',
      });
    }

    req.data = book;
    return next();
  }

  /**
 * Verifies a userid existence
 *
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @returns {object} HTTP response
 */
  static async checkUserId(req, res, next) {
    const user = await Users.findOne({
      where: {
        id: req.body.userid,
      },
    });

    if (!user) {
      return res.status(404).json({
        error: 'Signup or signin to borrow this book',
      });
    }

    req.data = user;
    return next();
  }
}

export default BorrowBook;
