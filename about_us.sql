-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2019 at 07:40 AM
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
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`id`, `title`, `description`, `phone`, `email`, `address`, `createdAt`, `updatedAt`) VALUES
(2, 'Our Story', 'Since our founding in 1999, we committed to the shawarma as the centrepiece of our menu. That will never change. With shawarma, we share a common history. A shared love of the most desirable sandwich in the Arab world and a token of the tradition, generosity and good taste of our people. What makes Shawarmer unique is our drive to make the perfect shawarma. To take a traditional street food and through innovation, creativity and experimentation, constantly modernize and interpret shawarma with new flavours and sauces and variations in wraps and sandwich styles. What started with the now famous “Shawarmer’s Plate” has evolved time and again over the years. Just as our customers’ tastes have evolved and changed. Our chefs travel the world exploring new ways to surprise our customers with beef and chicken sandwiches presented in creative new ways and with a variety of flavours, like adding pomegranate molasses. The attractive names of our meals indicate the ingredients and the way they are presented, like “Arabo” our Arabic sharing plate, “Shat’shaweesh” which is a spicy Shawarma, and “Bites” which is 6 pieces of small Shawarma sandwiches. Our dedication to the modern shawarma is equalled by our commitment to using only the highest quality, fresh and natural ingredients. It’s a cornerstone of the Shawarmer experience that enables us to maintain absolute consistency in flavour in our handmade sauces and marinades while ensuring the highest quality of meat in our cones that our customers expect and demand. From our founding mission to spread joy and happiness through our shared love of shawarma, we have grown to more than 90 restaurants and counting. As Shawarmer continues to grow and evolve, our customers can be sure of two things: The beloved shawarma will always be the hero of our menu. And our customers can always expect more surprises in new Shawarmer flavours, sauces, ingredients and sandwich styles we offer.\n\nOur Values ...\n\nInnovation … Innovation is at the core of everything we do every day. From our menu to our open kitchens to our restaurant designs and how we talk to and listen to our customers, being fresh, different and striving for continuous improvement is in the Shawarmer DNA.\n\nHospitality … Our success is all about our customers and our people. We are dedicated to making our customers feel welcomed, appreciated and at home at Shawarmer. That starts with our people genuinely feeling like they are part of the Shawarmer family.\n\nExcellence … Delivering on our commitment to Excellence starts with absolute consistency in the fresh and natural ingredients we source, the meals we make and in our customer service. Then going two steps beyond to surprise and delight our customers. In every shawarma we create. In every meal we serve. In every experience we share.\n\nTransparency …  Opening our kitchens for all to see the quality and care we bring to our food preparation is the last mile in our commitment to Transparency. But Transparency starts at the very beginning of the food chain, in how we train our people, how we select our suppliers and partners and our food handling and safety processes that are the foundation of the Shawarmer promise.', '(00971) 2 5838346', 'info@shawarmastation.ae', 'Shamekha ADNOC Petrol Station – Abu Dhabi - UAE', '2019-12-09 06:27:03', '2019-12-09 06:40:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
