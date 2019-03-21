import model from '../models';
import Authenticate from '../helpers';

const { Users } = model;

class User {
  /**
   * @description - this method creates a new User
   *
   * @static
   * @param {object} userObj
   * @memberof User
   */
  static async createUser(req, res) {
    const {
      fullname,
      email,
    } = req.body;
    const hash = Authenticate.hashPassword(req.body.password);
    const newUser = await Users.create({
      fullname, email, hash,
    });
    delete newUser.dataValues.password;
    res.status(201).json({
      status: 201,
      data: newUser,
    });
  }
}
export default User;
