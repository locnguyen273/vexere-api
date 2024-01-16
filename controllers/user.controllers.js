const { User } = require("../models");

const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  try {
    const newUser = await User.create({
      name,
      email,
      password,
      numberPhone,
      type: "client",
    });
    res.status(201).send({
      message: "Đã tạo người dùng mới thành công!",
      data: newUser,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  register,
};
