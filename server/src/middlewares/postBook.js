import Joi from 'joi';

import validate from '../helpers/validateInput';

const postBook = (req, res, next) => {
  const data = req.body;

  const schema = Joi.object().keys({
    title: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    fileurl: Joi.string().max(100).required(),
    coverimageurl: Joi.string().max(100).required(),
    description: Joi.string().min(10).max(200).required(),
  });

  Joi.validate(data, schema, err => validate(err, res, next));
};

export default postBook;
