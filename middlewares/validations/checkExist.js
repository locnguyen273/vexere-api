const checkExist = (Model) => {
  return async (req, res, next) => {
    // kiểm tra xem station có tồn tại hay không
    const { id } = req.params;
    const station = await Model.findOne({
      where: { id },
    });
    if (station) {
      next();
    } else {
      res.status(404).send({
        message: `Không tìm thấy bến xe có id là ${id}`,
      });
    }
  };
};

module.exports = {
  checkExist,
};
