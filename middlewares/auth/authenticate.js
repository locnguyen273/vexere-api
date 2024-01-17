const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "center-keyboard-shop");
    console.log(decode);
    if(decode) {
      req.user = decode;
      return next();
    } else {
      res.status(401).send({ message: "Bạn chưa đăng nhập!"});
    }
  } catch (error) {
    res.status(401).send({ message: "Bạn chưa đăng nhập!"});
  }
}

module.exports = {
  authenticate,
}
