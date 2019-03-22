/* eslint-disable no-unused-vars */
import Joi from 'joi';
import model from '../models';

const { Bookhistory, Books, Users } = model;

class middleware {
  static async verifyId(req, res, next) {
    const schema = Joi.string().guid({
      version: [
        'uuidv4',
      ],
    });

    const { error } = Joi.validate(req.params.id, schema);
    if (error) {
      return res.status(400).send({
        error: {
          message: 'Please input a valid id',
        },
      });
    }
    return next();
  }

  static async checksIfUserExists(req, res, next) {
    const user = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!user) {
      return res.status(404).send({
        error: {
          message: 'This user does not exist',
        },
      });
    }
    return next();
  }

  static async checksIfhistoryExist(req, res, next) {
    const bookHistory = await Bookhistory.findOne({
      where: {
        userid: req.params.id,
      },
    });

    if (!bookHistory) {
      return res.status(404).send({
        error: {
          message: 'User Record not found',
        },
      });
    }
    return next();
  }

  static async checkParamsId(req, res, next) {
    if (!req.params.id) {
      return res.status(400).send({
        error: {
          message: 'Id is required',
        },
      });
    }
    return next();
  }
}

export default middleware;
