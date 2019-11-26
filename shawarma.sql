-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2019 at 08:38 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shawarma`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `createdAt`, `updatedAt`) VALUES
(5, 'Chicken Meal Station', 'uploads/categories/2511201912353.jpg', '2019-11-25 07:35:03', '2019-11-25 07:35:03'),
(7, 'Falafal Station', 'uploads/categories/25112019123534.jpg', '2019-11-25 07:35:34', '2019-11-25 07:35:34'),
(8, 'Fries Station', 'uploads/categories/25112019123556.jpg', '2019-11-25 07:35:56', '2019-11-25 07:35:56');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `cat_id` varchar(255) DEFAULT NULL,
  `subcat_id` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `nutrition` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `cat_id`, `subcat_id`, `description`, `nutrition`, `price`, `image`, `createdAt`, `updatedAt`) VALUES
(4, 'Chicken Classicia Meal', '5', NULL, 'safafa', 'asfasfas', 'asfasfas', 'uploads/images/25112019123631.jpg', '2019-11-25 07:36:31', '2019-11-25 07:36:31'),
(5, 'Chicken Francia Meal', '5', NULL, 'safasfa', 'xfasfa', 'fasfasf', 'uploads/images/25112019123648.jpg', '2019-11-25 07:36:48', '2019-11-25 07:36:48'),
(6, 'Falafel Arabia', '7', NULL, 'sfaasf', 'asfasf', 'asfasf', 'uploads/images/2511201912377.jpg', '2019-11-25 07:37:07', '2019-11-25 07:37:07'),
(7, 'Falafel Halabia', '7', NULL, 'sfasf', 'asfsafa', 'asfasfa', 'uploads/images/25112019123724.jpg', '2019-11-25 07:37:24', '2019-11-25 07:37:24'),
(8, 'Falafel Platters', '7', NULL, 'safasfa', 'safasf', 'asfasfa', 'uploads/images/25112019123741.jpg', '2019-11-25 07:37:41', '2019-11-25 07:37:41'),
(9, 'Fries Normal', '8', NULL, 'sfasfas', 'asfsafa', 'safasfas', 'uploads/images/2511201912382.jpg', '2019-11-25 07:38:02', '2019-11-25 07:38:02'),
(10, 'Fries Shawarma', '8', NULL, 'sfasfas', 'asfsafasa', 'fasfasf', 'uploads/images/25112019123817.jpg', '2019-11-25 07:38:17', '2019-11-25 07:38:17'),
(11, 'Fries with Cheese', '8', NULL, 'safasfa', 'asfasfas', 'asfasfas', 'uploads/images/25112019123840.jpg', '2019-11-25 07:38:40', '2019-11-25 07:38:40'),
(12, 'Shawarma Shake', '8', NULL, 'sfaf', 'asfasfa', 'asfafa', 'uploads/images/25112019123857.jpg', '2019-11-25 07:38:57', '2019-11-25 07:38:57');

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `cat_id` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
