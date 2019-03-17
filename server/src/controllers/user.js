import model from '../models';
import Authenticate from '../helpers';

const { users } = model;

class Users {
  /**
   * @description - this method creates a new User
   *
   * @static
   * @param {object} userObj
   * @memberof Users
   */
  static async createUser(req, res) {
    const {
      fullname,
      email,
    } = req.body;
    const hash = Authenticate.hashPassword(req.body.password);
    const newUser = await users.create({
      fullname, email, hash,
    });
    delete newUser.dataValues.password;
    res.status(201).json({
      status: 201,
      data: newUser,
    });
  }
}
export default Users;
