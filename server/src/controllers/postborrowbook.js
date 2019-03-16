import models from '../models';

const { Bookhistory } = models;

class PostBorrowBook {
  /**
   *
   * @param {Values} req - request values into keys
   * @param {Object} res - response object
   * @returns {array} - returns all properties in array
   */
  static async borrowBook(req, res) {
    const { bookid, userid, returnon } = req.body;

    try {
      const borrowedBook = await Bookhistory.create({
        bookid,
        userid,
        returnon,
      });
      return res.status(202).send({
        message: 'Book successfully borrowed',
        data: borrowedBook,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        error: 'internal server error',
      });
    }
  }
}
export default PostBorrowBook;
