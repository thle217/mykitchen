const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mykitchen_db", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connet = async () => {
  try {
    await sequelize.authenticate();
    console.log("kết nối thánh công");
  } catch (e) {
    console.error("kêt nói thất bại");
  }
};
export default connet;
