import db, { sequelize } from '../models/index';
const { QueryTypes } = require('sequelize');

let getAllProducts = async (req, res) => {

    const sql = `SELECT products.product_id, products.brand_id, products.category_id, product_name, size, weight,
    material, country, price, status, description, capacity, wattage, products.url, brand_name, category_name
    FROM brands JOIN products ON brands.brand_id = products.brand_id
    JOIN categories ON products.category_id = categories.category_id
    ORDER BY products.product_id ASC
    `;

    const results = await sequelize.query(sql, {type: QueryTypes.SELECT});
    return res.status(200).json({
        data: results
    })
}

let createProduct = async (req, res) => {
    const sql1 = `SELECT * FROM products WHERE product_name = "${req.body.product_name}"`;
    const product = await sequelize.query(sql1, {type: QueryTypes.SELECT});

    if(product.length > 0) {
        return res.status(400).json({
            message: "Sản phẩm đã tồn tại",
            data: product
        });
    }
    else {
        const sql2 = `INSERT INTO products
        VALUES(DEFAULT, '${req.body.brand_id}', '${req.body.category_id}', '${req.body.product_name}', '${req.body.size}',
        '${req.body.weight}', '${req.body.material}', '${req.body.country}', '${req.body.price}', '${req.body.status}',
        '${req.body.description}', '${req.body.capacity}', '${req.body.wattage}', '${req.body.url}')`;

        await sequelize.query(sql2, {type: QueryTypes.INSERT});

        return res.status(201).json({
            message: "Thêm sản phẩm thành công"
        });
    }
}

let deleteProduct = async (req, res) => {
    const sql1 = `SELECT * FROM products WHERE product_id = '${req.params.product_id}'`;
    const product = await sequelize.query(sql1, {type: QueryTypes.SELECT});

    if(product.length > 0) {
        const sql2 = `DELETE FROM products WHERE product_id = '${req.params.product_id}'`;
        await sequelize.query(sql2, {type: QueryTypes.DELETE});

        return res.status(200).json({
            message: "Xóa sản phẩm thành công"
        })
    }
    else {
        return res.status(404).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct,
}