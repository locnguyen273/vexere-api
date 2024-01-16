const { where, Op } = require("sequelize");
const { Station } = require("../models");

const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  try {
    const newStation = await Station.create({ name, address, province });
    res.status(201).send({
      message: "Đã tạo bến xe thành công!",
      data: newStation,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllStation = async (req, res) => {
  const { name } = req.query;
  let stationList;
  try {
    if(name) {
      stationList = await Station.findAll({
        where: {
          name : {
            [Op.like] : `%${name}%`
          }
        }
      });
    } else {
      stationList = await Station.findAll();
    }
    res.status(200).send({
      data: stationList,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailStation = async (req, res) => {
  const { id } = req.params;
  try {
    const detailStation = await Station.findOne({
      where: {
        id,
      },
    });
    res.status(200).send({
      data: detailStation,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  try {
    const detailStation = await Station.findOne({
      where: {
        id,
      },
    });

    detailStation.name = name;
    detailStation.address = address;
    detailStation.province = province;
    detailStation.save();

    res.status(200).send({
      message: "Cập nhật bến xe thành công!",
      data: detailStation,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  try {
    await Station.destroy({
      where: {
        id,
      }
    })
    res.status(200).send({
      message: "Xóa bến xe thành công!",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
};
