const { where } = require("sequelize");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  try {
    //tạo ra 1 chuỗi ngẫu nhiên
    const salt = bcrypt.genSaltSync(10);
    //mã hóa chuỗi ngẫu nhiên salt + pass
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      numberPhone,
    });
    res.status(201).send({
      message: "Đã tạo người dùng mới thành công!",
      data: newUser,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) {
      const token = jwt.sign(
        { email: user.email, type: user.type },
        "center-keyboard-shop",
        { expiresIn: 60 * 60 }
      );
      res.status(200).send({
        message: "Đăng nhập thành công!",
        data: {
          token
        }
      });
    } else {
      res.status(500).send({
        message: "Tài khoản hoặc mật khẩu không đúng!",
      });
    }
  } else {
    res.status(404).send({
      message: "Không tìm thấy email phù hợp!",
    });
  }
};

module.exports = {
  register,
  login,
};
