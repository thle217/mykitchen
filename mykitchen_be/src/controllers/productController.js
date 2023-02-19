import db, { sequelize } from '../models/index'

let getAllProducts = async (req, res) => {
    const sql = "SELECT * FROM brands " +
    "JOIN products ON brands.brand_id = products.brand_id " +
    "JOIN categories ON products.category_id = categories.category_id " +
    "ORDER BY product_id ASC";

    const [results, metadata] = await sequelize.query(sql);
    return res.status(200).json({
        data: results
    })
}

module.exports = {
    getAllProducts
}