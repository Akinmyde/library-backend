import Joi from 'joi';
import model from '../models';

const { Books } = model;


class Book {
  static async validateId(req, res, next) {
    const schema = Joi.string().guid({
      version: [
        'uuidv4',
      ],
    });

    const { error } = Joi.validate(req.params.id, schema);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: 'Please input a valid id',
      });
    }
    return next();
  }

  static async checkForBook(req, res, next) {
    const book = await Books.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!book) {
      return res.status(404).json({
        error: 'No book found',
      });
    }

    req.data = book;
    return next();
  }
}

export default Book;
