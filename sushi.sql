-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2014 at 11:04 AM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sushi`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE IF NOT EXISTS `article` (
`id` int(11) unsigned NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `alias` varchar(255) NOT NULL DEFAULT '',
  `introtext` mediumtext NOT NULL,
  `fulltext` mediumtext NOT NULL,
  `status` tinyint(3) NOT NULL DEFAULT '0',
  `catid` int(11) unsigned NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_by` int(11) unsigned NOT NULL DEFAULT '0',
  `modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modified_by` int(11) unsigned NOT NULL DEFAULT '0',
  `hits` int(11) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `title`, `alias`, `introtext`, `fulltext`, `status`, `catid`, `created`, `created_by`, `modified`, `modified_by`, `hits`) VALUES
(1, 'Menu', '', '', '<p><span style="color:#FF0000"><strong><span style="font-size:28px">Soạn Th&ocirc;ng tin menu</span></strong></span></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n', 1, 0, '2014-09-24 13:56:12', 1, '2014-10-03 00:33:42', 2, 0),
(2, 'About', '', '', '<p><span style="color:rgb(255, 0, 0)"><strong><span style="font-size:28px">Soạn Th&ocirc;ng tin ABOUT</span></strong></span></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n', 1, 0, '2014-09-24 15:41:37', 1, '2014-10-03 00:36:28', 2, 0),
(3, 'Footer', '', '', '<p><span style="color:rgb(255, 0, 0)"><strong><span style="font-size:28px">Soạn Th&ocirc;ng tin FOOTER</span></strong></span></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n', 1, 0, '2014-09-24 15:47:25', 1, '2014-10-03 00:53:12', 2, 0),
(4, 'Mecorp tuyển dụng nhiều vị trí Android và IOS', '', '', '<p>Với tốc độ ph&aacute;t triển nhanh ch&oacute;ng, ME lu&ocirc;n c&oacute; nhu cầu tuyển dụng nhiều vị tr&iacute; ở c&aacute;c bộ phận kh&aacute;c nhau: Bộ phận CSKH, bộ phận H&agrave;nh ch&aacute;nh, Nh&acirc;n sự, Bộ phận Marketing, Bộ phận Lập tr&igrave;nh, Bộ phận Thiết kế v.v.<br />\r\nNếu bạn c&oacute; niềm đam m&ecirc; v&agrave; tinh thần cầu tiến, năng động, trung thực, kiến thức chuy&ecirc;n m&ocirc;n li&ecirc;n quan đến c&aacute;c bộ phận kể tr&ecirc;n; H&Atilde;Y ĐẾN VỚI CH&Uacute;NG T&Ocirc;I!</p>\r\n\r <p><img alt="" src="/assets/images/news/images/img_tuyendung.png"  /></p>\r\n', 1, 0, '2014-09-24 15:51:09', 1, '2014-09-24 15:54:10', 1, 0),
(5, 'Điều khoản ME', '', '', '<p><span >Với những chiến lược cụ thể, s&aacute;ng tạo, đột ph&aacute;, định hướng kinh doanh đ&uacute;ng mục ti&ecirc;u n&ecirc;n từ ng&agrave;y th&agrave;nh lập đến nay, C&ocirc;ng ty cổ phần Giải Tr&iacute; Di Động (ME corp) đang chiếm một vị tr&iacute; vững chắc trong ng&agrave;nh nội dung số Việt Nam. Ri&ecirc;ng đối với lĩnh vực di động số, ME corp được Q&uacute;y đối t&aacute;c v&agrave; kh&aacute;ch h&agrave;ng nhận định l&agrave; nh&agrave; cung cấp dịch vụ giải tr&iacute; tr&ecirc;n di động h&agrave;ng đầu Việt Nam.</span></p>\r\n\r <p><span >M&ocirc;i trường l&agrave;m việc mở, th&acirc;n thiện c&ugrave;ng c&aacute;c chế độ ch&iacute;nh s&aacute;ch đ&atilde;i ngộ hiền t&agrave;i, ME corp đ&atilde; thu h&uacute;t v&agrave; tạo niềm tin cho nhiều bạn trẻ khi l&agrave;m việc tại đ&acirc;y. Từ 2 th&agrave;nh vi&ecirc;n s&aacute;ng lập, giờ đ&acirc;y ME corp c&oacute; trong tay một đội ngũ nh&acirc;n sự h&ugrave;ng hậu (độ tuổi trung b&igrave;nh từ 25), năng động, nhiệt huyết v&agrave; gi&agrave;u kinh nghiệm đ&atilde; tạo ra nhiều sản phẩm mang t&iacute;nh giải tr&iacute; cao v&agrave; ứng dụng hữu &iacute;ch được cộng đồng c&ocirc;ng nghệ y&ecirc;u th&iacute;ch v&agrave; giới trẻ đ&oacute;n nhận nồng nhiệt.</span></p>\r\n\r <p><span >ME corp hiểu rằng &ldquo;Th&agrave;nh c&ocirc;ng đạt được chỉ l&agrave; động lực, kinh nghiệm s&aacute;ng tạo mới l&agrave; nền tảng&rdquo; để ME vững bước tr&ecirc;n con đường m&igrave;nh đ&atilde; chọn. ME cam kết mang lại nhiều lợi &iacute;ch v&agrave; chia sẻ nhiều hơn nữa những sản phẩm mới đến với cộng đồng.</span></p>\r\n', 1, 0, '2014-09-24 15:57:27', 1, '0000-00-00 00:00:00', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `function`
--

CREATE TABLE IF NOT EXISTS `function` (
`id_function` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `name_display` varchar(200) DEFAULT NULL,
  `alias` varchar(45) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `url` text,
  `order` int(11) DEFAULT NULL,
  `is_leaf` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `function`
--

INSERT INTO `function` (`id_function`, `name`, `name_display`, `alias`, `parent_id`, `url`, `order`, `is_leaf`, `create_time`, `update_time`) VALUES
(1, 'add', 'Thêm Menu', 'backend-menu-add', 3, '/backend/menu/add', 1, 1, '2014-08-29 10:10:00', '2014-08-29 10:10:00'),
(2, 'index', 'Danh sách menu', 'backend-menu-index', 3, '/backend/menu/index', 1, 1, '2014-08-29 10:10:00', '2014-08-29 10:10:00'),
(3, 'group', 'Nhóm menu', 'backend-menu-group', 3, '/backend/menu/group', NULL, 1, NULL, NULL),
(4, 'addgroup', 'Thêm nhóm menu', 'backend-menu-addgroup', 3, '/backend/menu/addgroup', NULL, 1, NULL, NULL),
(5, 'index', 'Danh sách User', 'backend-account-index', 2, '/backend/account/index', NULL, 1, NULL, NULL),
(6, 'add', 'Thêm User', 'backend-account-add', 2, '/backend/account/add', NULL, 1, NULL, NULL),
(7, 'index', 'Danh sách bài viết', 'backend-newsevent-index', 4, '/backend/newsevent/index', NULL, 1, NULL, NULL),
(8, 'add', 'Thêm bài viết', 'backend-newsevent-add', 4, '/backend/newsevent/add', NULL, 1, NULL, NULL),
(9, 'category', 'Danh mục bài viết', 'backend-newsevent-category', 4, '/backend/newsevent/category', NULL, 1, NULL, NULL),
(10, 'addcategory', 'Thêm danh mục bài viết', 'backend-newsevent-addcategory', 4, '/backend/newsevent/addcategory', NULL, 1, NULL, NULL),
(11, 'index', 'Danh sách game', 'backend-game-index', 1, '/backend/game/index', NULL, 1, NULL, NULL),
(12, 'add', 'Thêm game', 'backend-game-add', 1, '/backend/game/add', NULL, 1, NULL, NULL),
(13, 'gallery', 'Thư viện hình ảnh', 'backend-system-gallery', 5, '/backend/system/gallery', NULL, 1, NULL, NULL),
(14, 'category', 'Thể loại game', 'backend-game-category', 1, '/backend/game/category', NULL, 1, '2014-09-03 02:49:07', '2014-09-03 08:44:18'),
(15, 'addcategory', 'Thêm thể loại game', 'backend-game-addcategory', 1, '/backend/game/addcategory', NULL, 1, '2014-09-03 02:50:21', '2014-09-03 08:44:39'),
(16, 'publisher', 'Nhà phát hành', 'backend-game-publisher', 1, '/backend/game/publisher', NULL, 1, '2014-09-03 08:45:52', NULL),
(17, 'addpublisher', 'Thêm nhà phát hành', 'backend-game-addpublisher', 1, '/backend/game/addpublisher', NULL, 1, '2014-09-03 08:46:58', NULL),
(18, 'icon', 'Quản lý icons', 'backend-system-icon', 5, '/backend/system/icon', NULL, 1, '2014-09-06 09:06:40', '2014-09-06 10:15:39'),
(19, 'Platform', 'Quản lý Platform', 'backend-game-platform', 1, '/backend/game/platform', NULL, 1, '2014-09-09 15:34:30', '2014-09-09 16:48:41'),
(20, 'add platform', 'Thêm Platform', 'backend-game-add_platform', 1, '/backend/game/add_platform', NULL, 1, '2014-09-09 15:35:03', '2014-09-09 16:48:49'),
(24, 'index', 'Bài viết', 'backend-article-index', 6, '/backend/article/index', NULL, 1, '2014-09-24 12:11:01', '2014-09-24 13:35:43'),
(25, 'add', 'Thêm bài viết', 'backend-article-add', 6, '/backend/article/add', NULL, 1, '2014-09-24 13:37:30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `function_group`
--

CREATE TABLE IF NOT EXISTS `function_group` (
`id` int(11) NOT NULL,
  `display_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `order` int(11) DEFAULT '1',
  `class` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alias` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_display` int(2) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `function_group`
--

INSERT INTO `function_group` (`id`, `display_name`, `order`, `class`, `alias`, `is_display`) VALUES
(2, 'Quản lý Tài khoản', 2, NULL, 'account', 1),
(3, 'Quản lý Menu', 3, NULL, 'menu', 1),
(6, 'Quản lý bài viết', 6, '', 'article', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id_admin` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `full_name` varchar(45) DEFAULT NULL,
  `description` text,
  `status` varchar(45) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `permission` varchar(45) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_admin`, `username`, `password`, `full_name`, `description`, `status`, `create_time`, `update_time`, `permission`) VALUES
(2, 'duocnt', 'e10adc3949ba59abbe56e057f20f883e', 'Ngô Thành Được', NULL, '1', '2014-08-29 00:00:00', '2014-09-25 15:49:34', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_has_function`
--

CREATE TABLE IF NOT EXISTS `user_has_function` (
  `id_admin` int(11) NOT NULL,
  `id_function` int(11) NOT NULL,
  `allow` text,
  `create_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_has_function`
--

INSERT INTO `user_has_function` (`id_admin`, `id_function`, `allow`, `create_date`) VALUES
(2, 1, NULL, NULL),
(2, 2, NULL, NULL),
(2, 3, NULL, NULL),
(2, 4, NULL, NULL),
(2, 5, NULL, NULL),
(2, 6, NULL, NULL),
(2, 7, NULL, NULL),
(2, 8, NULL, NULL),
(2, 9, NULL, NULL),
(2, 10, NULL, NULL),
(2, 11, NULL, NULL),
(2, 12, NULL, NULL),
(2, 13, NULL, NULL),
(2, 14, NULL, NULL),
(2, 15, NULL, NULL),
(2, 16, NULL, NULL),
(2, 17, NULL, NULL),
(2, 18, NULL, NULL),
(2, 19, NULL, NULL),
(2, 20, NULL, NULL),
(2, 24, NULL, NULL),
(2, 25, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `function`
--
ALTER TABLE `function`
 ADD PRIMARY KEY (`id_function`), ADD UNIQUE KEY `alias_UNIQUE` (`alias`), ADD KEY `parent_id` (`parent_id`);

--
-- Indexes for table `function_group`
--
ALTER TABLE `function_group`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id_admin`), ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- Indexes for table `user_has_function`
--
ALTER TABLE `user_has_function`
 ADD PRIMARY KEY (`id_admin`,`id_function`), ADD KEY `fk_user_has_function_function1_idx` (`id_function`), ADD KEY `fk_user_has_function_user1_idx` (`id_admin`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `function`
--
ALTER TABLE `function`
MODIFY `id_function` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `function_group`
--
ALTER TABLE `function_group`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_has_function`
--
ALTER TABLE `user_has_function`
ADD CONSTRAINT `user_has_function_ibfk_1` FOREIGN KEY (`id_admin`) REFERENCES `user` (`id_admin`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `user_has_function_ibfk_2` FOREIGN KEY (`id_function`) REFERENCES `function` (`id_function`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
