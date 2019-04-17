/*
Navicat MySQL Data Transfer

Source Server         : 192.168.1.6
Source Server Version : 50620
Source Host           : 192.168.1.6:3306
Source Database       : oauth2service

Target Server Type    : MYSQL
Target Server Version : 50620
File Encoding         : 65001

Date: 2019-04-17 09:13:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for login_ticket
-- ----------------------------
DROP TABLE IF EXISTS `login_ticket`;
CREATE TABLE `login_ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `expired` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '状态栏： 0，有效；1，失效；',
  `ticket` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login_ticket
-- ----------------------------
INSERT INTO `login_ticket` VALUES ('1', '1', '2019-02-21 16:19:00', '0', '1f25c56b-5db5-4958-a9e9-f7815acd3a64');
INSERT INTO `login_ticket` VALUES ('2', '1', '2019-02-21 18:44:43', '0', 'bcecdd7f-67dd-43d8-8dd2-2ecca0b7a771');
INSERT INTO `login_ticket` VALUES ('3', '1', '2019-02-22 11:44:26', '0', 'b3422302-5c8e-45f4-8d25-a026e1ec678d');
INSERT INTO `login_ticket` VALUES ('4', '1', '2019-02-22 14:14:42', '0', '69b3affc-f4f2-4a9f-8a60-a48482defa61');
INSERT INTO `login_ticket` VALUES ('5', '1', '2019-02-22 16:41:11', '1', 'ffe24dca-fe48-4e3c-9380-15c7dd810167');
INSERT INTO `login_ticket` VALUES ('6', '2', '2019-02-22 17:11:27', '0', 'b7f710bd-dc00-4038-a4e0-0a61d6db65d5');
INSERT INTO `login_ticket` VALUES ('7', '1', '2019-02-22 17:11:36', '1', '5376b65a-b714-449b-91c8-d8cbae7285f9');
INSERT INTO `login_ticket` VALUES ('8', '1', '2019-02-22 17:11:52', '1', '0a25ace8-872b-4043-9f2b-1e7dc686b070');
INSERT INTO `login_ticket` VALUES ('9', '2', '2019-02-22 17:12:09', '1', '34c8add3-8895-4157-ba27-71b3760277b7');
INSERT INTO `login_ticket` VALUES ('10', '1', '2019-02-22 17:12:20', '1', '3b305be8-050b-478b-b59a-dd0c48d02707');
INSERT INTO `login_ticket` VALUES ('11', '2', '2019-02-22 17:12:38', '1', '70e491f9-3d8c-4456-9b40-d266464bf48f');
INSERT INTO `login_ticket` VALUES ('12', '1', '2019-02-22 17:24:36', '0', '762ffd15-2393-460e-9a50-9619cec0ba2f');
INSERT INTO `login_ticket` VALUES ('13', '1', '2019-02-22 18:00:01', '1', '7ec25ed0-2ad6-45a7-98a9-a273f725d85c');
INSERT INTO `login_ticket` VALUES ('14', '3', '2019-02-22 18:05:17', '0', '9016454e-ce61-4a82-b1a9-73f81f54ab77');
INSERT INTO `login_ticket` VALUES ('15', '1', '2019-02-25 13:48:37', '0', '68add359-edb8-46d4-834c-55b4c01da198');
INSERT INTO `login_ticket` VALUES ('16', '1', '2019-02-25 17:54:58', '0', 'c316c70e-e3f1-4f40-9c5e-e03e0a5318fa');

-- ----------------------------
-- Table structure for sysaccount
-- ----------------------------
DROP TABLE IF EXISTS `sysaccount`;
CREATE TABLE `sysaccount` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userAccount` varchar(20) NOT NULL COMMENT '用户名',
  `userPwd` varchar(255) NOT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sysaccount
-- ----------------------------
INSERT INTO `sysaccount` VALUES ('1', 'admin', '$2a$10$IP/K0os//KEsqvHq4vDpEOSWuP7lhVcHMjqJHfAp83Z8wtv.7anF2');
INSERT INTO `sysaccount` VALUES ('2', 'lyt', '$2a$10$CPyoZp97nfmXP3Zx845xEOS.9.ahKJD4ijtOKi3Wap5Mn1B9ukYN6');
INSERT INTO `sysaccount` VALUES ('3', 'hk', '$2a$10$X0RTyTyXtVzIJZNqVF15FeqZtuO.r4IVsuuellek8B7iGk69t30Ui');

-- ----------------------------
-- Table structure for t_jg
-- ----------------------------
DROP TABLE IF EXISTS `t_jg`;
CREATE TABLE `t_jg` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `jgmc` varchar(50) DEFAULT NULL COMMENT '机构名称',
  `isdelete` varchar(5) DEFAULT '0' COMMENT '是否删除（0，未删；1，已删除；）',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='机构信息表';

-- ----------------------------
-- Records of t_jg
-- ----------------------------
INSERT INTO `t_jg` VALUES ('1', '知上知教育', '0');
INSERT INTO `t_jg` VALUES ('2', '其他', '0');

-- ----------------------------
-- Table structure for t_permission
-- ----------------------------
DROP TABLE IF EXISTS `t_permission`;
CREATE TABLE `t_permission` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `DESCRIPTION` varchar(255) DEFAULT NULL COMMENT '权限描述',
  `URL` varchar(255) DEFAULT NULL COMMENT '权限接口',
  `PID` bigint(5) DEFAULT NULL COMMENT '父id',
  `ICON` varchar(100) DEFAULT NULL COMMENT '图标',
  `SORT` bigint(2) DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_permission
-- ----------------------------
INSERT INTO `t_permission` VALUES ('1', '资料管理', '', '0', 'mdi-account-circle', '1');
INSERT INTO `t_permission` VALUES ('2', 'Excel资料存储', '/pages/my_function/excel_record/excel_record.jsp', '1', 'mdi-content-save', '1');
INSERT INTO `t_permission` VALUES ('4', '系统设置', '', '0', 'mdi-settings', '4');
INSERT INTO `t_permission` VALUES ('5', '用户管理', '/pages/system/useradmin/useradmin.jsp', '4', 'mdi-account-convert', '1');
INSERT INTO `t_permission` VALUES ('6', '角色管理', '/pages/system/role/role.jsp', '4', 'mdi-account-box-outline', '3');
INSERT INTO `t_permission` VALUES ('7', '权限管理', '/pages/system/permission/permission.jsp', '4', 'mdi-account-key', '4');
INSERT INTO `t_permission` VALUES ('9', '资料查看', '/pages/my_function/excel_record/excel_look.jsp', '1', 'mdi-clipboard-text', '2');
INSERT INTO `t_permission` VALUES ('32', '机构管理', '/pages/system/org_admin/org_admin.jsp', '4', 'mdi-account-switch', '2');
INSERT INTO `t_permission` VALUES ('33', '教材管理', '', '0', 'mdi-book-plus', '3');
INSERT INTO `t_permission` VALUES ('34', '专业管理', '/pages/major_admin/major_admin.jsp', '33', 'mdi-bookmark-check', '1');
INSERT INTO `t_permission` VALUES ('35', '课程管理', '', '33', 'mdi-book-open', '2');
INSERT INTO `t_permission` VALUES ('36', '学生管理', '', '0', 'mdi-account-card-details', '2');
INSERT INTO `t_permission` VALUES ('37', '学生信息管理', '', '36', 'mdi-account-card-details', '1');
INSERT INTO `t_permission` VALUES ('38', '教材领取', '', '36', 'mdi-book-multiple-variant', '2');
INSERT INTO `t_permission` VALUES ('40', '教材管理', '', '33', 'mdi-book-plus', '3');

-- ----------------------------
-- Table structure for t_role
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `USERTYPE` varchar(100) NOT NULL COMMENT '用户类型',
  `ORGID` bigint(20) NOT NULL COMMENT '机构id',
  `ISDELETE` varchar(5) DEFAULT NULL COMMENT '是否伪删除,0没有删除，1已经删除',
  `MANAGEMARK` varchar(255) DEFAULT NULL COMMENT '0机构超管，1管理员，2普通员工',
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_role
-- ----------------------------
INSERT INTO `t_role` VALUES ('1', '超级管理员', '1', '0', '0');
INSERT INTO `t_role` VALUES ('2', '行政部管理员', '1', '0', '1');
INSERT INTO `t_role` VALUES ('3', '行政部员工', '1', '0', '2');
INSERT INTO `t_role` VALUES ('4', '总经理', '1', '0', '1');
INSERT INTO `t_role` VALUES ('5', '副总经理', '1', '0', '1');
INSERT INTO `t_role` VALUES ('6', '市场部管理员', '1', '0', '1');
INSERT INTO `t_role` VALUES ('7', '市场部员工', '1', '0', '2');
INSERT INTO `t_role` VALUES ('8', '财务部管理员', '1', '0', '1');
INSERT INTO `t_role` VALUES ('9', '财务部员工', '1', '0', '2');
INSERT INTO `t_role` VALUES ('10', '学历教育事业部管理员', '1', '0', '1');
INSERT INTO `t_role` VALUES ('11', '学历教育事业部员工', '1', '0', '2');
INSERT INTO `t_role` VALUES ('12', '技术研发部管理员', '1', '0', '1');
INSERT INTO `t_role` VALUES ('13', '技术研发部员工', '1', '0', '2');
INSERT INTO `t_role` VALUES ('14', '运维部管理员', '1', '0', '1');
INSERT INTO `t_role` VALUES ('15', '运维部员工', '1', '0', '2');
INSERT INTO `t_role` VALUES ('16', '学生', '1', '0', '3');
INSERT INTO `t_role` VALUES ('17', '学生', '2', '0', '3');

-- ----------------------------
-- Table structure for t_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `t_role_permission`;
CREATE TABLE `t_role_permission` (
  `ROLEID` bigint(20) DEFAULT NULL,
  `PERMISSIONID` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_role_permission
-- ----------------------------
INSERT INTO `t_role_permission` VALUES ('1', '2');
INSERT INTO `t_role_permission` VALUES ('1', '5');
INSERT INTO `t_role_permission` VALUES ('1', '6');
INSERT INTO `t_role_permission` VALUES ('1', '7');
INSERT INTO `t_role_permission` VALUES ('1', '4');
INSERT INTO `t_role_permission` VALUES ('1', '9');
INSERT INTO `t_role_permission` VALUES ('1', '1');
INSERT INTO `t_role_permission` VALUES ('2', '4');
INSERT INTO `t_role_permission` VALUES ('2', '5');
INSERT INTO `t_role_permission` VALUES ('15', '1');
INSERT INTO `t_role_permission` VALUES ('14', '1');
INSERT INTO `t_role_permission` VALUES ('13', '1');
INSERT INTO `t_role_permission` VALUES ('12', '1');
INSERT INTO `t_role_permission` VALUES ('11', '1');
INSERT INTO `t_role_permission` VALUES ('10', '1');
INSERT INTO `t_role_permission` VALUES ('9', '1');
INSERT INTO `t_role_permission` VALUES ('8', '1');
INSERT INTO `t_role_permission` VALUES ('7', '1');
INSERT INTO `t_role_permission` VALUES ('6', '1');
INSERT INTO `t_role_permission` VALUES ('5', '1');
INSERT INTO `t_role_permission` VALUES ('4', '1');
INSERT INTO `t_role_permission` VALUES ('15', '2');
INSERT INTO `t_role_permission` VALUES ('14', '2');
INSERT INTO `t_role_permission` VALUES ('13', '2');
INSERT INTO `t_role_permission` VALUES ('12', '2');
INSERT INTO `t_role_permission` VALUES ('11', '2');
INSERT INTO `t_role_permission` VALUES ('10', '2');
INSERT INTO `t_role_permission` VALUES ('9', '2');
INSERT INTO `t_role_permission` VALUES ('8', '2');
INSERT INTO `t_role_permission` VALUES ('7', '2');
INSERT INTO `t_role_permission` VALUES ('6', '2');
INSERT INTO `t_role_permission` VALUES ('5', '2');
INSERT INTO `t_role_permission` VALUES ('4', '2');
INSERT INTO `t_role_permission` VALUES ('15', '9');
INSERT INTO `t_role_permission` VALUES ('14', '9');
INSERT INTO `t_role_permission` VALUES ('13', '9');
INSERT INTO `t_role_permission` VALUES ('12', '9');
INSERT INTO `t_role_permission` VALUES ('11', '9');
INSERT INTO `t_role_permission` VALUES ('10', '9');
INSERT INTO `t_role_permission` VALUES ('9', '9');
INSERT INTO `t_role_permission` VALUES ('8', '9');
INSERT INTO `t_role_permission` VALUES ('7', '9');
INSERT INTO `t_role_permission` VALUES ('6', '9');
INSERT INTO `t_role_permission` VALUES ('5', '9');
INSERT INTO `t_role_permission` VALUES ('4', '9');
INSERT INTO `t_role_permission` VALUES ('3', '1');
INSERT INTO `t_role_permission` VALUES ('2', '1');
INSERT INTO `t_role_permission` VALUES ('3', '9');
INSERT INTO `t_role_permission` VALUES ('2', '9');
INSERT INTO `t_role_permission` VALUES ('17', '9');
INSERT INTO `t_role_permission` VALUES ('16', '9');
INSERT INTO `t_role_permission` VALUES ('17', '1');
INSERT INTO `t_role_permission` VALUES ('16', '1');
INSERT INTO `t_role_permission` VALUES ('3', '2');
INSERT INTO `t_role_permission` VALUES ('2', '2');
INSERT INTO `t_role_permission` VALUES ('1', '32');
INSERT INTO `t_role_permission` VALUES ('1', '35');
INSERT INTO `t_role_permission` VALUES ('1', '34');
INSERT INTO `t_role_permission` VALUES ('1', '33');
INSERT INTO `t_role_permission` VALUES ('1', '36');
INSERT INTO `t_role_permission` VALUES ('1', '37');
INSERT INTO `t_role_permission` VALUES ('1', '38');
INSERT INTO `t_role_permission` VALUES ('1', '40');

-- ----------------------------
-- Table structure for t_user_role
-- ----------------------------
DROP TABLE IF EXISTS `t_user_role`;
CREATE TABLE `t_user_role` (
  `USERID` bigint(20) DEFAULT NULL,
  `ROLEID` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user_role
-- ----------------------------
INSERT INTO `t_user_role` VALUES ('1', '1');
INSERT INTO `t_user_role` VALUES ('2', '2');
INSERT INTO `t_user_role` VALUES ('3', '16');
