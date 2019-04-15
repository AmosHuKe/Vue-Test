/*
Navicat MySQL Data Transfer

Source Server         : 192.168.1.6
Source Server Version : 50620
Source Host           : 192.168.1.6:3306
Source Database       : oauth2service

Target Server Type    : MYSQL
Target Server Version : 50620
File Encoding         : 65001

Date: 2019-04-02 14:15:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for sysaccount
-- ----------------------------
DROP TABLE IF EXISTS `sysaccount`;
CREATE TABLE `sysaccount` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userAccount` varchar(20) NOT NULL COMMENT '用户名',
  `userPwd` varchar(255) NOT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sysaccount
-- ----------------------------
INSERT INTO `sysaccount` VALUES ('1', 'admin', '$2a$10$IP/K0os//KEsqvHq4vDpEOSWuP7lhVcHMjqJHfAp83Z8wtv.7anF2');
