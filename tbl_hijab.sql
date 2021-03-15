-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2021 at 04:57 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kudhung`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_hijab`
--

CREATE TABLE `tbl_hijab` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `harga` int(11) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `id_warna` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `id_jenis` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_hijab`
--

INSERT INTO `tbl_hijab` (`id`, `nama`, `harga`, `deskripsi`, `id_warna`, `img`, `id_jenis`) VALUES
(26, 'pashmina', 120000, 'nyaman', 11, 'ty', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_hijab`
--
ALTER TABLE `tbl_hijab`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jenis` (`id_jenis`),
  ADD KEY `id_warna` (`id_warna`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_hijab`
--
ALTER TABLE `tbl_hijab`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_hijab`
--
ALTER TABLE `tbl_hijab`
  ADD CONSTRAINT `tbl_hijab_ibfk_1` FOREIGN KEY (`id_jenis`) REFERENCES `tbl_jenis` (`jenis_id`),
  ADD CONSTRAINT `tbl_hijab_ibfk_2` FOREIGN KEY (`id_warna`) REFERENCES `tbl_warna` (`warna_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
