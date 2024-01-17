const authorize = (arrType) => (req, res, next) => {
  const { user } = req;
  if (arrType.findIndex((ele) => ele === user.type) > -1) {
    next();
  } else {
    res.status(403).send({ message: "Bạn không có quyền truy cập hoặc token hết hạn!" });
  }
};

module.exports = {
  authorize,
};
