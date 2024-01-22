const { where } = require("sequelize");
const { User, sequelize } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatarUrl = require("gravatar");

const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  try {
    //tạo ra 1 chuỗi ngẫu nhiên
    const avatarUrl = gravatarUrl.url(email, { protocol: "https", s: "100" });
    const salt = bcrypt.genSaltSync(10);
    //mã hóa chuỗi ngẫu nhiên salt + pass
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      numberPhone,
      avatar: avatarUrl,
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
    const { name, email, numberPhone, avatar, type } = user;
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
          name,
          email,
          numberPhone,
          avatar,
          type,
          token,
        },
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

const uploadAvatar = async (req, res) => {
  const { file } = req;
  const { user } = req;
  const urlImage = `http://localhost:3000/${file.path}`;
  const userFound = await User.findOne({
    email: user.email,
  });
  userFound.avatar = urlImage;
  await userFound.save();
  res.status(200).send({ message: "Đã upload ảnh thành công!" });
};

const getAllTrip = async (req, res) => {
  try {
    const [result, metadata] = await sequelize.query(`
    select vexere_db.users.name as userName, fromSta.name as fromStation, toSta.name as toStation from vexere_db.users
    inner join vexere_db.tickets on vexere_db.users.id = vexere_db.tickets.user_id
    inner join vexere_db.trips on vexere_db.trips.id = vexere_db.tickets.trip_id
    inner join vexere_db.stations as fromSta on fromSta.id = vexere_db.trips.fromStation
    inner join vexere_db.stations as toSta on toSta.id = vexere_db.trips.toStation;
  `);
    res.status(200).send({
      data: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  register,
  login,
  uploadAvatar,
  getAllTrip,
};
