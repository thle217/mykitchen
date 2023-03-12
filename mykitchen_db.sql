-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th3 07, 2023 lúc 07:31 AM
-- Phiên bản máy phục vụ: 5.7.36
-- Phiên bản PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `mykitchen_db`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE IF NOT EXISTS `brands` (
  `brand_id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) NOT NULL,
  `url` text,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `brands`
--

INSERT INTO `brands` (`brand_id`, `brand_name`, `url`) VALUES
(1, 'BLUESTONE', 'https://i.imgur.com/XTVsrjV.jpeg'),
(2, 'BOSCH', 'https://i.imgur.com/K6O0DsK.jpeg'),
(3, 'CUCKOO', 'https://i.imgur.com/237VUgv.jpeg'),
(4, 'ELECTROLUX', 'https://i.imgur.com/U7ti0Lm.jpeg'),
(5, 'ELMICH', 'https://i.imgur.com/j69ge1X.jpeg'),
(6, 'LOCK&LOCK', 'https://i.imgur.com/60XvYiw.jpeg'),
(7, 'MAGIC', 'https://i.imgur.com/h3tgpaL.jpeg'),
(8, 'MIDEA', 'https://i.imgur.com/sBdIDy6.jpeg'),
(9, 'PANASONIC', 'https://i.imgur.com/yXbjhRc.jpeg'),
(10, 'PHILIPS', 'https://i.imgur.com/Cd7e3Jb.jpeg'),
(11, 'RINNAI', 'https://i.imgur.com/pKs6JMe.jpeg'),
(12, 'REHANG', 'https://i.imgur.com/YOLJxKH.jpeg'),
(13, 'SHARP', 'https://i.imgur.com/DPAAo8V.jpeg'),
(14, 'SUNHOUSE', 'https://i.imgur.com/1p4gn6r.jpeg'),
(15, 'TOSHIBA', 'https://i.imgur.com/A70bCAK.jpeg'),
(16, 'DELONGHI', 'https://i.imgur.com/0Z96AlI.jpeg'),
(17, 'FIVESTAR', 'https://i.imgur.com/00YTxz6.jpeg'),
(18, 'HAFELE', 'https://i.imgur.com/L9mbasw.jpeg'),
(19, 'HAWONKOO', 'https://i.imgur.com/o1AWy3t.jpeg'),
(20, 'JUNGER', 'https://i.imgur.com/QHxV6AL.jpeg'),
(21, 'TEFAL', 'https://i.imgur.com/JnAAy0R.jpeg'),
(22, 'PERFETTO', 'https://i.imgur.com/93BZUXR.jpeg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `carts`
--

DROP TABLE IF EXISTS `carts`;
CREATE TABLE IF NOT EXISTS `carts` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `fk_carts_users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `carts`
--

INSERT INTO `carts` (`cart_id`, `user_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `carts_products`
--

DROP TABLE IF EXISTS `carts_products`;
CREATE TABLE IF NOT EXISTS `carts_products` (
  `cart_product_id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`cart_product_id`),
  KEY `fk_carts_products_carts` (`cart_id`),
  KEY `fk_carts_products_products` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `carts_products`
--

INSERT INTO `carts_products` (`cart_product_id`, `cart_id`, `product_id`, `quantity`, `price`) VALUES
(1, 1, 2, 4, 2001);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`) VALUES
(1, 'Bếp ga'),
(2, 'Bếp từ'),
(3, 'Bình đun siêu tốc'),
(4, 'Bộ chảo'),
(5, 'Bộ hộp đựng'),
(6, 'Bộ nồi'),
(7, 'Dụng cụ ăn uống'),
(8, 'Lò nướng'),
(9, 'Lò vi sóng'),
(10, 'Máy pha cà phê'),
(11, 'Máy xay - máy ép'),
(12, 'Nồi áp suất'),
(13, 'Nồi chiên không dầu'),
(14, 'Nồi cơm điện');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discounts`
--

DROP TABLE IF EXISTS `discounts`;
CREATE TABLE IF NOT EXISTS `discounts` (
  `discount_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `percent` int(11) NOT NULL,
  `condition` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`discount_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `discount_id` int(11) NOT NULL,
  `subtotal_price` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date DEFAULT NULL,
  `street` varchar(255) NOT NULL,
  `ward` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `receiver` varchar(255) NOT NULL,
  `phone` char(10) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_user_order` (`user_id`),
  KEY `fk_discount_order` (`discount_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders_details`
--

DROP TABLE IF EXISTS `orders_details`;
CREATE TABLE IF NOT EXISTS `orders_details` (
  `order_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(50) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`order_detail_id`),
  KEY `fk_order_order_detail` (`order_id`),
  KEY `fk_product_order_detail` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `size` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `description` text,
  `capacity` varchar(255) DEFAULT NULL,
  `wattage` varchar(255) DEFAULT NULL,
  `url` text,
  PRIMARY KEY (`product_id`),
  KEY `fk_categories_products` (`category_id`),
  KEY `fk_brands_products` (`brand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`product_id`, `brand_id`, `category_id`, `product_name`, `size`, `weight`, `material`, `country`, `price`, `status`, `description`, `capacity`, `wattage`, `url`) VALUES
(2, 11, 1, 'Bếp ga RINNAI RV-6DOUBLE GLASS', '000mm - 000mm - 000mm', '00kg', 'Inox', 'Trung Quốc', 2900000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '4000W', 'https://i.imgur.com/BdWXGjo.jpeg'),
(3, 4, 2, 'Bếp từ Electrolux EHI7023BA', '000mm - 000mm - 000mm', '00kg', 'Kính', 'Nhật Bản', 5190000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '4300W', 'https://i.imgur.com/SIKUdhg.jpeg'),
(4, 19, 2, 'Bếp từ Hawonkoo CEH-201-IF', '000mm - 000mm - 000mm', '00kg', 'Kính', 'Nhật Bản', 4200000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '4000W', 'https://i.imgur.com/tGBx5d1.jpeg'),
(5, 20, 2, 'Bếp từ Junger IS-19', '000mm - 000mm - 000mm', '00kg', 'Kính', 'Thụy Điển', 4090000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '3900W', 'https://i.imgur.com/qwXYiYd.jpeg'),
(6, 8, 2, 'Bếp từ Midea MI-B2015DE', '000mm - 000mm - 000mm', '00kg', 'Kính', 'Nhật Bản', 3500000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '4100W', 'https://i.imgur.com/QS7Chxk.jpeg'),
(7, 14, 2, 'Bếp từ Sunhouse SHD6017', '000mm - 000mm - 000mm', '00kg', 'Kính', 'Việt Nam', 3700000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '3900W', 'https://i.imgur.com/F7ZOHAw.jpeg'),
(8, 18, 3, 'Bình đun siêu tốc Hafele T-602C', '000mm - 000mm - 000mm', '00kg', 'Thủy tinh', 'Trung Quốc', 510000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '2200W', 'https://i.imgur.com/cja1jaW.jpeg'),
(9, 17, 6, 'Bộ nồi FIVESTAR FS08CG1', '000mm - 000mm - 000mm', '00kg', 'Kính', 'Nhật Bản', 3190000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '000W', 'https://i.imgur.com/IW2vMO1.jpeg'),
(10, 15, 8, 'Lò nướng Toshiba 35 lít TL-MC35Z', '000mm - 000mm - 000mm', '00kg', 'Chất liệu chống dính', 'Trung Quốc', 6350000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '1600W', 'https://i.imgur.com/z2hZps7.jpeg'),
(11, 13, 9, 'Lò vi sóng Sharp 23 lít R-G302VN', '000mm - 000mm - 000mm', '00kg', 'Chất liệu chống dính', 'Nhật Bản', 2890000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '1200W', 'https://i.imgur.com/rFhdrwj.jpeg'),
(12, 1, 12, 'Nồi áp suất Bluestone PCB-5763', '000mm - 000mm - 000mm', '00kg', 'Hợp kim', 'Thụy Điển', 2190000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '920W', 'https://i.imgur.com/FgLC3rD.jpeg'),
(13, 10, 12, 'Nồi áp suất Philips 6L HD213765', '000mm - 000mm - 000mm', '00kg', 'Hợp kim', 'Trung Quốc', 1990000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '900W', 'https://i.imgur.com/90BW3W6.jpeg'),
(14, 3, 14, 'Nồi cơm điện Cuckoo 1.8L CRP-LHTR1009F', '000mm - 000mm - 000mm', '00kg', 'Chất liệu chống dính', 'Hàn Quốc', 2190000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '760W', 'https://i.imgur.com/EjGkfsu.jpeg'),
(15, 15, 14, 'Nồi cơm điện Toshiba 1.8L RC-18IX1PV', '000mm - 000mm - 000mm', '00kg', 'Chất liệu chống dính', 'Trung Quốc', 1890000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '750W', 'https://i.imgur.com/GxEq9Uo.jpeg'),
(16, 13, 14, 'Nồi cơm điện Sharp 2.2L KSH-D22V', '000mm - 000mm - 000mm', '00kg', 'Chất liệu chống dính', 'Nhật Bản', 2550000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '700W', 'https://i.imgur.com/AKuMeVz.jpeg'),
(17, 16, 10, 'Máy pha cà phê Delonghi EC9355.M', '000mm - 000mm - 000mm', '00kg', 'Inox cao cấp', 'Ý', 29900000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '1450W', 'https://i.imgur.com/0I1mvoj.jpeg'),
(18, 16, 10, 'Máy pha cà phê Delonghi ICM12011.BK', '000mm - 000mm - 000mm', '00kg', 'Inox cao cấp', 'Ý', 1390000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '750W', 'https://i.imgur.com/Tfj9M5X.jpeg'),
(19, 16, 10, 'Máy pha cà phê Delonghi EC785.GY', '000mm - 000mm - 000mm', '00kg', 'Inox cao cấp', 'Ý', 8290000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '1300W', 'https://i.imgur.com/ZBJi7yL.jpeg'),
(20, 22, 10, 'Máy pha cà phê Espresso Perfetto P.08 Đỏ', '000mm - 000mm - 000mm', '00kg', 'Inox cao cấp', 'Trung Quốc', 3390000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '1260W', 'https://i.imgur.com/QjGDeD5.jpeg'),
(21, 22, 10, 'Máy pha cà phê Espresso Perfetto P.08 Đen', '000mm - 000mm - 000mm', '00kg', 'Inox cao cấp', 'Trung Quốc', 3390000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '1260W', 'https://i.imgur.com/lR6SL8V.jpeg'),
(22, 10, 13, 'Nồi chiên không dầu 6.2 lít Philips HD9270', '000mm - 000mm - 000mm', '00kg', 'Kim loại chống dính', 'Trung Quốc', 4690000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '6.2L', '2000W', 'https://i.imgur.com/o559EuU.jpeg'),
(23, 7, 13, 'Nồi chiên không dầu Magic 6 lít AC-110', '000mm - 000mm - 000mm', '00kg', 'Kim loại', 'Thái Lan', 3990000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '6L', '1800W', 'https://i.imgur.com/1VY6v6t.jpeg'),
(24, 21, 13, 'Nồi chiên không dầu Tefal 4.2 lít EY501D15', '380 x 380 x 430 mm', '3,8 kg', 'Chất liệu chống dính', 'Trung Quốc', 1990000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '4.2L', '1550W', 'https://i.imgur.com/D1UD3sJ.jpeg'),
(25, 14, 13, 'Nồi chiên không dầu Sunhouse 4.5 lít SHD4086W', '000mm - 000mm - 000mm', '00kg', 'Kim loại', 'Việt Nam', 2940000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '4.5L', '1500W', 'https://i.imgur.com/2iTlp54.jpeg'),
(26, 4, 11, 'Máy xay sinh tố Electrolux ESTM5417S', '000mm - 000mm - 000mm', '00kg', 'Inox', 'Trung Quốc', 1590000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '700W', 'https://i.imgur.com/h20O48W.jpeg'),
(27, 2, 11, 'Máy xay cầm tay Bosch HMH.MSM26130', '000mm - 000mm - 000mm', '00kg', 'Nhựa', 'Slovenia', 1990000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '600W', 'https://i.imgur.com/7C0aVbN.jpeg'),
(28, 21, 11, 'Máy ép chậm Tefal ZC420E38', '000mm - 000mm - 000mm', '00kg', 'Nhựa', 'Trung Quốc', 3690000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '150W', 'https://i.imgur.com/7mfa0ea.jpeg'),
(29, 9, 11, 'Máy ép trái cây Panasonic MJ-H100WRA', '000mm - 000mm - 000mm', '00kg', 'Thép không gỉ', 'Malaysia', 1780000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '1.7L', '400W', 'https://i.imgur.com/NdwD0v0.jpeg'),
(30, 6, 5, 'Bộ hộp bảo quản thủy tinh Lock&Lock Top Class LBG', '000mm - 000mm - 000mm', '00kg', 'thủy tinh', 'Hàn Quốc', 150000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '000W', 'https://i.imgur.com/wcCZw1i.jpeg'),
(31, 6, 5, 'Bộ 6 Hộp Bảo Quản Lock&Lock Classic HPL826S6', '000mm - 000mm - 000mm', '00kg', 'Nhựa', 'Hàn Quốc', 241000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '000W', 'https://i.imgur.com/hGmf9yW.jpeg'),
(32, 5, 4, 'Chảo inox 2 lớp đáy liền Elmich Tri-Max 28cm', '28cm', '00kg', 'inox', 'Việt Nam', 890000, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '000W', 'https://i.imgur.com/9cenXL3.jpeg'),
(33, 12, 7, 'Muỗng Ăn Inox Rehang Stainless 829B', '000mm - 000mm - 000mm', '00kg', 'Inox', 'Trung Quốc', 17900, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '000W', 'https://i.imgur.com/qIO2ASx.jpeg'),
(34, 12, 7, 'Nĩa Ăn Inox Rehang 823', '000mm - 000mm - 000mm', '00kg', 'Inox', 'Trung Quốc', 19900, 'Active', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', '00L', '000W', 'https://i.imgur.com/oEuQVqp.jpeg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `role_id` int(5) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`) VALUES
(1, 'Khách hàng'),
(2, 'Nhân viên'),
(3, 'Quản trị viên');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `phone` char(10) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `ward` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `phone` (`phone`),
  KEY `fk_roles_users` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`user_id`, `role_id`, `user_name`, `gender`, `dob`, `phone`, `street`, `ward`, `district`, `city`, `username`, `password`, `email`) VALUES
(1, 1, 'test user', 'Nữ', '2001-02-27', '0901234567', '456 Nguyễn Trãi', 'phường 2', 'quận 5', 'TPHCM', 'testuser', '$2b$10$ZYS9vrNdh8izft9GRp97f.RtK3OJ4ShmaJ6Cv8njnAVXiQ2ykS1Fq', NULL);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `fk_carts_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Các ràng buộc cho bảng `carts_products`
--
ALTER TABLE `carts_products`
  ADD CONSTRAINT `fk_carts_products_carts` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_id`),
  ADD CONSTRAINT `fk_carts_products_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_discount_order` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`discount_id`),
  ADD CONSTRAINT `fk_user_order` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Các ràng buộc cho bảng `orders_details`
--
ALTER TABLE `orders_details`
  ADD CONSTRAINT `fk_order_order_detail` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `fk_product_order_detail` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_brands_products` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`brand_id`),
  ADD CONSTRAINT `fk_categories_products` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_roles_users` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
