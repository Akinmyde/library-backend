import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

class Authenticate {
  /**
   * @description - this method hash a password
   *
   * @static
   * @param {object} userObj
   * @returns {string} hash
   * @memberof Authenticate
   */
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }

  /**
   * @description - this method encode a token
   *
   * @static
   * @param {object} userObj
   * @returns {string} token
   * @memberof Authenticate
   */
  static encode(userObj) {
    const secret = process.env.SECRET;
    const token = jwt.sign({ userObj }, secret, { expiresIn: '72h' });
    return token;
  }

  /**
   * @description - this method decoded a token
   *
   * @static
   * @param {string} token
   * @returns {object} isVerify
   * @memberof Authenticate
   */
  static decode(token) {
    const isVerify = jwt.verify(token, process.env.SECRET);
    return isVerify;
  }
}

export default Authenticate;
