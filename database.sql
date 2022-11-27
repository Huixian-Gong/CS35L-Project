-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2022-11-27 03:09:20
-- 服务器版本： 10.4.27-MariaDB
-- PHP 版本： 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `login_sys`
--

-- --------------------------------------------------------

--
-- 表的结构 `course_log`
--

CREATE TABLE `course_log` (
  `id` int(11) NOT NULL,
  `lecture` text NOT NULL,
  `course_name` text NOT NULL,
  `email` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `course_log`
--

INSERT INTO `course_log` (`id`, `lecture`, `course_name`, `email`) VALUES
(4, 'lecture', 'course', 'email@l'),
(5, '1a', '11111', 'fewa@fewf'),
(6, '3p', '11111', 'fesfa@g'),
(7, 'ffeff', 'pppp', 'fjiowa@fjeiwo'),
(8, '', '11111', 'qq@q'),
(9, '', '11111', 'ee@e');

-- --------------------------------------------------------

--
-- 表的结构 `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `sender` text NOT NULL,
  `receiver` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `message`
--

INSERT INTO `message` (`id`, `sender`, `receiver`, `message`) VALUES
(3, 'ee@e', 'fewa@fewf', '2'),
(4, 'ee@e', 'fewa@fewf', '3'),
(5, 'ee@e', 'fewa@fewf', '4'),
(6, 'ee@e', 'fewa@fewf', '5'),
(7, 'ee@e', 'fewa@fewf', '6'),
(8, 'ee@e', 'fewa@fewf', '7'),
(9, 'ee@e', 'fewa@fewf', '8'),
(10, 'qq@q', 'qq@q', 'fewfsdf');

-- --------------------------------------------------------

--
-- 表的结构 `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `cont` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `post`
--

INSERT INTO `post` (`id`, `cont`) VALUES
(1, ' fewafdsa'),
(2, ' awefdsafe'),
(3, ' fewafdsa'),
(4, ' fewaadsfgrfdx'),
(5, ' shenme'),
(6, ' feadsafe'),
(7, ' qfedsaf'),
(8, ' afeadsf'),
(9, ' fewafdsaff'),
(10, ' feadf'),
(11, ' aaaaaaa');

-- --------------------------------------------------------

--
-- 表的结构 `post_time`
--

CREATE TABLE `post_time` (
  `id` int(11) NOT NULL,
  `cont` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `post_time`
--

INSERT INTO `post_time` (`id`, `cont`, `time`) VALUES
(3, ' eadfeadf', '2022-11-26 07:10:36'),
(4, ' ewqfasga', '2022-11-26 07:11:58'),
(5, ' htrej hgngf', '2022-11-26 07:12:01'),
(6, ' es gdsfbfjtyej', '2022-11-26 07:12:03'),
(7, ' d grehybf v ds', '2022-11-26 07:12:06'),
(8, ' fewafsjdiofjlemwaf', '2022-11-26 07:31:12'),
(9, ' eggert', '2022-11-26 11:30:12');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fullname` varchar(125) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `fullname`, `email`, `password`) VALUES
(3, 'testing', 'test@gmail.com', '$2b$10$H44.ADUZ9z3WY2JkQwITOOQUK2MbxqBqPl/mhR3YvbA4TBOIR6M0u'),
(4, 'jweioafe', 'qqq@gmail.com', '$2b$10$HEAiI8BjK29hNgdC1pXXBu3yNL1cN4RfPN598grDBFIo27WILfzcG'),
(5, 'test', 'iop@gmail.com', '$2b$10$AirWHwnUX8w51SQ6cYUJeei7lYgcGPbowAXWTvj99g/zhSJ5GELMK'),
(6, 'Test User', 'ee@e', '$2b$10$QpNRTVVsBkl5VEPN88KqSujb/V0wMpDOlJxMgmReNtkxjRZAotE.a'),
(7, 'brge', 'htrh@fe', '$2b$10$LiwiFos7wvee/ZT07y.RUOrCWzbMvtVgG7SadQNSGQk5ZdKXoX3AC'),
(8, 'fewaf', 'fwead@efq', '$2b$10$EEJRhPv42Jc8hVcHvyme1eNh0YpxvkwE6GdwBrboI8z7Cr/kkn4v6'),
(9, 'fewf', 'dvas@fewgr', '$2b$10$7Q9YDhMZ6k8hXopT5Gt6.urN61mLN6eYGLWvHmFttW.dxTUYg2qI2'),
(11, 'fewa', 'qq@q', '$2b$10$JmcfcNJdJm3zbN6nX4ou/ODXmYwO/aAry7eEH1LEfS/GlPKBKOr36');

--
-- 转储表的索引
--

--
-- 表的索引 `course_log`
--
ALTER TABLE `course_log`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `post_time`
--
ALTER TABLE `post_time`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `course_log`
--
ALTER TABLE `course_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- 使用表AUTO_INCREMENT `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用表AUTO_INCREMENT `post_time`
--
ALTER TABLE `post_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
