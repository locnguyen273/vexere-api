const { where } = require("sequelize");
const { Trip, Station } = require("../models");

const createTrip = async (req, res) => {
  const { fromStation, toStation, startTime, price } = req.body;
  const newTrip = await Trip.create({
    fromStation,
    toStation,
    startTime,
    price,
  });
  res.status(201).send({
    message: "Đã tạo chuyến đi thành công!",
    data: newTrip,
  });
};

const getAllTrip = async (req, res) => {
  const tripList = await Trip.findAll({
    include: [
      { model: Station, as: "from" },
      { model: Station, as: "to" },
    ],
  });
  res.status(200).send({
    data: tripList,
  });
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  await Trip.destroy({
    where: { id },
  });
  res.send({ message: `Đã xóa chuyến đi có id là ${id}` });
};

const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { fromStation, toStation, startTime, price } = req.body;
  await Trip.update(
    { fromStation, toStation, startTime, price },
    { where: { id } }
  );
  res.send({ message: `Đã cập nhật chuyến đi thành công có id là ${id}!` });
};

module.exports = {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip,
};
