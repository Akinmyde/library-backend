import models from '../models';

const { Books } = models;

class AllBooks {
  /**
  * @description - this method returns all books in the library
  * @param {*} req - Request object
  * @param {*} res - Response object
  * @returns {object} - Return data
  * @memberof Books
  */
  static async getAllBooks(req, res) {
    const book = await Books.findAll({
      attributes: ['title', 'author', 'fileurl', 'coverimageurl', 'description'],
    });

    return res.status(200).json({
      status: 200,
      data: book,
    });
  }
}

export default AllBooks;
