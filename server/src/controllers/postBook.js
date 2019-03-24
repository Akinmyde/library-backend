import model from '../models';

const { Books } = model;

class bookController {
  /**
   * @description - post a book
   * @param{object} req - api request
   * @param{onject} res - response from database
   * @return{json}
   */

  static async post(req, res) {
    try {
      const book = await Books.create(req.body);

      res.status(201).json({
        status: 201,
        data: [book],
      });
    } catch (error) {
      res.status(400).json({
        error: error.errors[0].message,
      });
    }
  }
}

export default bookController;
