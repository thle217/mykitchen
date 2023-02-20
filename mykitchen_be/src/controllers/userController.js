import bcrypt from "bcrypt";
import { DataTypes } from "sequelize";
import db, { sequelize } from "../models/index";
const saltRounds = 10;

let getAllUser = async (req, res) => {
  const sql = `select * from users`;
  const data = await sequelize.query(sql, {
    type: sequelize.QueryTypes.SELECT,
  });
  return res.status(200).json({ data });
};

let getUserById = async (req, res) => {
  const sql = `select * from users where user_id = "${req.params.id}"`;
  const data = await sequelize.query(sql, {
    type: sequelize.QueryTypes.SELECT,
  });
  if (data.length > 0) {
    return res.status(200).json({ data });
  } else {
    return res.status(404).json({ result: "User not found" });
  }
};

let creatUser = async (req, res) => {
  const sql1 = `select * from users where username = "${req.body.username}"`;
  const user = await sequelize.query(sql1, {
    type: sequelize.QueryTypes.SELECT,
  });
  if (user.length > 0) {
    return res.status(400).json({ result: "User already exists" });
  } else {
    if (
      req.body.role === undefined ||
      req.body.username === undefined ||
      req.body.password === undefined
    ) {
      return res.status(400).json({ result: "incomplete information" });
    } else {
      const hashPass = await hashPassword(req.body.password);
      const sql = `INSERT INTO users(role_id, username,password)
            VALUES ('${req.body.role}','${req.body.username}','${hashPass}')`;
      await sequelize.query(sql, {
        type: sequelize.QueryTypes.INSERT,
      });
      return res.status(200).json({ result: "Create successful" });
    }
  }
};

let UpdateUser = async (req, res) => {
  const sql1 = `select * from users where user_id = "${req.params.id}"`;
  const user = await sequelize.query(sql1, {
    type: sequelize.QueryTypes.SELECT,
  });
  if (user.length > 0) {
    const sql = `UPDATE users SET ${
      req.body.username
        ? "user_name='" + req.body.username + "',"
        : "user_name='" + user[0].user_name + "',"
    }${
      req.body.gender
        ? "gender='" + req.body.gender + "',"
        : "gender='" + user[0].gender + "',"
    }${
      req.body.dob
        ? "dob='" + req.body.dob + "',"
        : "dob='" + user[0].dob + "',"
    }${
      req.body.phone
        ? "phone='" + req.body.phone + "',"
        : "phone='" + user[0].phone + "',"
    }${
      req.body.street
        ? "street='" + req.body.street + "',"
        : "street='" + user[0].street + "',"
    }${
      req.body.ward
        ? "ward='" + req.body.ward + "',"
        : "ward='" + user[0].ward + "',"
    }${
      req.body.district
        ? "district='" + req.body.district + "',"
        : "district='" + user[0].district + "',"
    }${
      req.body.city
        ? "city='" + req.body.city + "',"
        : "city='" + user[0].city + "',"
    }${
      req.body.email
        ? "email='" + req.body.email + "',"
        : "email='" + user[0].email + "'"
    }WHERE user_id =${req.params.id}`;

    const [result, update] = await sequelize.query(sql, {
      type: sequelize.QueryTypes.UPDATE,
    });
    if (update) {
      return res.status(200).json({ result: "Update successful" });
    } else {
      return res.status(400).json({ result: "Update failed" });
    }
  }
};

let DeleteUser = async (req, res) => {
  const sql1 = `select * from users where user_id = "${req.params.id}"`;
  const user = await sequelize.query(sql1, {
    type: sequelize.QueryTypes.SELECT,
  });
  if (user.length > 0) {
    const sql = `DELETE FROM users where user_id = '${req.params.id}'`;
    await sequelize.query(sql);
    return res.status(200).json({ result: "Delete successful" });
  } else {
    return res.status(400).json({ result: "User does not exist" });
  }
};

let hashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hash = await bcrypt.hash(password, saltRounds);
      resolve(hash);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { getAllUser, creatUser, getUserById, UpdateUser, DeleteUser };
