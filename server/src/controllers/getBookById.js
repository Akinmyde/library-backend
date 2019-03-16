class getBook {
  static async getBookById(req, res) {
    return res.status(200).json({
      status: 200,
      data: [req.data],
    });
  }
}

export default getBook;
