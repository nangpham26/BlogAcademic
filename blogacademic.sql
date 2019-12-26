-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 26, 2019 at 07:29 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogacademic`
--

-- --------------------------------------------------------

--
-- Table structure for table `dangky`
--

DROP TABLE IF EXISTS `dangky`;
CREATE TABLE IF NOT EXISTS `dangky` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dangky`
--

INSERT INTO `dangky` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES
(1, 'Pháº¡m', 'NÄƒng', 'itsrealnp@gmail.com', '12345'),
(2, 'pham', 'nang', 'nangpham26@gmail.com', 'nangpham'),
(3, 'pham', 'nang', 'nangpham26@gmail.com', 'nangpham'),
(4, 'pham', 'nang', 'nangpham26@gmail.com', 'nangpham'),
(5, 'pham', 'nang', 'nangpham26@gmail.com', 'nangpham'),
(6, 'pham', 'nang', 'nangpham26@gmail.com', 'nangpham'),
(7, 'pham', 'nang', 'nangpham26@gmail.com', 'nangpham'),
(8, 'nang', 'pham', 'Justinbieber@gmail.com', '12345'),
(9, 'nang', 'pham', 'Justinbieber@gmail.com', '12345'),
(10, 'Pháº¡m', 'NÄƒng', 'nangpham268@gmail.com', '12345'),
(11, 'Pháº¡m', 'NÄƒng', 'nangpham268@gmail.com', '12345'),
(12, 'Pháº¡m', 'NÄƒng', 'nangpham268@gmail.com', '12345'),
(13, 'Pháº¡m', 'NÄƒng', 'nangpham268@gmail.com', '12345'),
(14, 'Pháº¡m', 'NÄƒng', 'haha@gmail.com', 'admin'),
(15, 'Pháº¡m', 'NÄƒng', 'haha@gmail.com', '12345'),
(44, 'Pháº¡m', 'NÄƒng', 'np26@gmail.com', '12345'),
(21, 'Pháº¡m', 'NÄƒng', 'itsrealnp@gmail.com', '12345'),
(22, 'Pháº¡m', 'NÄƒng', 'itsrealnp@gmail.com', '12345'),
(23, 'Pháº¡m', 'NÄƒng', 'nang@gmail.com', '12345'),
(24, 'Pháº¡m', 'NÄƒng', 'nang@gmail.com', '12345'),
(25, 'Pháº¡m', 'NÄƒng', 'nang@gmail.com', '12345'),
(26, 'nang', 'NÄƒng', 'nang@gmail.com', '12345'),
(27, 'nang', 'NÄƒng', 'nang@gmail.com', '12345'),
(28, 'Pháº¡m', 'NÄƒng', 'haha@gmail.com', '12345'),
(29, 'Pháº¡m', 'NÄƒng', 'haha@gmail.com', '12345'),
(30, 'Pháº¡m', 'NÄƒng', 'haha@gmail.com', '12345'),
(31, 'Pháº¡m', 'NÄƒng', 'hahahahahahaha@gmail.com', '12345'),
(32, 'Pháº¡m', 'NÄƒng', 'hahahahahahaha@gmail.com', '12345'),
(33, '', '', '', ''),
(34, '', '', '', ''),
(35, 'Pháº¡m', 'NÄƒng', 'nang44@gmail.com', '12345'),
(36, 'Pháº¡m', 'NÄƒng', 'nang44@gmail.com', '12345'),
(37, '', '', '', ''),
(38, '', '', '', ''),
(39, '', '', '', ''),
(40, '', '', '', ''),
(41, '', '', '', ''),
(42, '', '', '', ''),
(43, 'Pháº¡m', 'NÄƒng', 'haha@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `dangnhap`
--

DROP TABLE IF EXISTS `dangnhap`;
CREATE TABLE IF NOT EXISTS `dangnhap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
