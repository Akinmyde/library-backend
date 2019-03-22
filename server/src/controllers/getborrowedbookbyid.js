import model from '../models';

const { Bookhistory } = model;

class BorrowedBook {
  static async getById(req, res) {
    const borrowedBooks = await Bookhistory.findAll({
      where: {
        userid: req.params.id,
      },
    });

    return res.status(200).json({
      message: 'book Retrieved',
      data: borrowedBooks,
    });
  }
}

export default BorrowedBook;
