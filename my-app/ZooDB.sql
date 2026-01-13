-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 13, 2026 at 08:45 AM
-- Server version: 8.0.44-0ubuntu0.24.04.2
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DataBase`
--

-- --------------------------------------------------------

--
-- Table structure for table `alimentation`
--

CREATE TABLE `alimentation` (
  `id_alimentation` int NOT NULL,
  `id_animal` int NOT NULL,
  `quantite` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type_nourriture` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `horaire` time DEFAULT NULL,
  `date_alimentation` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `animaux`
--

CREATE TABLE `animaux` (
  `id_animal` int NOT NULL,
  `sexe` enum('Male','Femelle','Inconnu') COLLATE utf8mb4_general_ci DEFAULT 'Inconnu',
  `age` int DEFAULT NULL,
  `id_utilisateur` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `environnement`
--

CREATE TABLE `environnement` (
  `id_environnement` int NOT NULL,
  `id_animal` int NOT NULL,
  `temperature` decimal(5,2) DEFAULT NULL,
  `humidite` decimal(5,2) DEFAULT NULL,
  `date_mesure` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hygiene`
--

CREATE TABLE `hygiene` (
  `id_hygiene` int NOT NULL,
  `id_animal` int NOT NULL,
  `nettoyage_enclos` tinyint(1) DEFAULT '0',
  `verification_clotures` tinyint(1) DEFAULT '0',
  `date_hygiene` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notes_utilisateur`
--

CREATE TABLE `notes_utilisateur` (
  `id_note` int NOT NULL,
  `id_animal` int NOT NULL,
  `id_utilisateur` int NOT NULL,
  `note` text COLLATE utf8mb4_general_ci,
  `date_note` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sante`
--

CREATE TABLE `sante` (
  `id_sante` int NOT NULL,
  `id_animal` int NOT NULL,
  `etat_general` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `appetit` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `date_dernier_controle` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id_utilisateur` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `mot_de_passe` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nom` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `photo_profil` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alimentation`
--
ALTER TABLE `alimentation`
  ADD PRIMARY KEY (`id_alimentation`),
  ADD KEY `id_animal` (`id_animal`);

--
-- Indexes for table `animaux`
--
ALTER TABLE `animaux`
  ADD PRIMARY KEY (`id_animal`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Indexes for table `environnement`
--
ALTER TABLE `environnement`
  ADD PRIMARY KEY (`id_environnement`),
  ADD KEY `id_animal` (`id_animal`);

--
-- Indexes for table `hygiene`
--
ALTER TABLE `hygiene`
  ADD PRIMARY KEY (`id_hygiene`),
  ADD KEY `id_animal` (`id_animal`);

--
-- Indexes for table `notes_utilisateur`
--
ALTER TABLE `notes_utilisateur`
  ADD PRIMARY KEY (`id_note`),
  ADD KEY `id_animal` (`id_animal`),
  ADD KEY `id_utilisateur` (`id_utilisateur`);

--
-- Indexes for table `sante`
--
ALTER TABLE `sante`
  ADD PRIMARY KEY (`id_sante`),
  ADD KEY `id_animal` (`id_animal`);

--
-- Indexes for table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id_utilisateur`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alimentation`
--
ALTER TABLE `alimentation`
  MODIFY `id_alimentation` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `animaux`
--
ALTER TABLE `animaux`
  MODIFY `id_animal` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `environnement`
--
ALTER TABLE `environnement`
  MODIFY `id_environnement` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hygiene`
--
ALTER TABLE `hygiene`
  MODIFY `id_hygiene` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notes_utilisateur`
--
ALTER TABLE `notes_utilisateur`
  MODIFY `id_note` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sante`
--
ALTER TABLE `sante`
  MODIFY `id_sante` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id_utilisateur` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alimentation`
--
ALTER TABLE `alimentation`
  ADD CONSTRAINT `alimentation_ibfk_1` FOREIGN KEY (`id_animal`) REFERENCES `animaux` (`id_animal`) ON DELETE CASCADE;

--
-- Constraints for table `animaux`
--
ALTER TABLE `animaux`
  ADD CONSTRAINT `animaux_ibfk_2` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id_utilisateur`) ON DELETE SET NULL;

--
-- Constraints for table `environnement`
--
ALTER TABLE `environnement`
  ADD CONSTRAINT `environnement_ibfk_1` FOREIGN KEY (`id_animal`) REFERENCES `animaux` (`id_animal`) ON DELETE CASCADE;

--
-- Constraints for table `hygiene`
--
ALTER TABLE `hygiene`
  ADD CONSTRAINT `hygiene_ibfk_1` FOREIGN KEY (`id_animal`) REFERENCES `animaux` (`id_animal`) ON DELETE CASCADE;

--
-- Constraints for table `notes_utilisateur`
--
ALTER TABLE `notes_utilisateur`
  ADD CONSTRAINT `notes_utilisateur_ibfk_1` FOREIGN KEY (`id_animal`) REFERENCES `animaux` (`id_animal`) ON DELETE CASCADE,
  ADD CONSTRAINT `notes_utilisateur_ibfk_2` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id_utilisateur`) ON DELETE CASCADE;

--
-- Constraints for table `sante`
--
ALTER TABLE `sante`
  ADD CONSTRAINT `sante_ibfk_1` FOREIGN KEY (`id_animal`) REFERENCES `animaux` (`id_animal`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
