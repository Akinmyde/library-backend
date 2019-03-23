/* eslint-disable no-unused-vars */
import Joi from 'joi';

class middleware {
  static async validateUser(req, res, next) {
    const {
      fullname, email, password,
    } = req.body;
    if (!fullname && !email && !password) {
      return res.status(400).send({
        error: 'All field is required!',
      });
    }
    const schema = Joi.object().keys({
      // eslint-disable-next-line no-useless-escape
      fullname: Joi.string().trim().regex(/^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/)
        .required()
        .error(() => 'fullname is required'),
      email: Joi.string().strict().trim().min(2)
        .required()
        .error(() => 'email is required'),
      password: Joi.string().strict().trim().regex(/^[a-zA-Z0-9]{3,30}$/)
        .min(6)
        .required()
        .error(() => 'Password is required'),
    });
    const { error } = Joi.validate(req.body, schema);
    if (error) {
      return res.status(400).send({
        error: `${error.details[0].message}`,
      });
    }
    return next();
  }
}

export default middleware;
