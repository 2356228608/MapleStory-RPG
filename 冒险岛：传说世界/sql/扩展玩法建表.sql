-- ----------------------------
-- 起源之塔
-- ----------------------------
CREATE TABLE IF NOT EXISTS `oz_tower` (
`characterid` int(11) NOT NULL DEFAULT '0' COMMENT '角色ID',
`charactername` varchar(100) NOT NULL DEFAULT '无名' COMMENT '角色名称',
`maxlevel` int(11) NOT NULL DEFAULT '0' COMMENT '最佳纪录通过层数',
`time` int(11) NOT NULL DEFAULT '0' COMMENT '最佳纪录通过时间',
`slots` int(11) NOT NULL DEFAULT '1' COMMENT '朦胧石栏位数量',
`slot_stone_1` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.1',
`slot_stone_2` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.2',
`slot_stone_3` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.3',
`slot_stone_4` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.4',
`slot_stone_5` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.5',
PRIMARY KEY (`characterid`)
) ;
-- ----------------------------
-- 勋章融合
-- ----------------------------
CREATE TABLE IF NOT EXISTS `combine_medal` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`characterid` int(11) NOT NULL DEFAULT '0',
`medalid` int(11) NOT NULL DEFAULT '0',
`str` smallint(6) NOT NULL DEFAULT '0',
`dex` smallint(6) NOT NULL DEFAULT '0',
`int` smallint(6) NOT NULL DEFAULT '0',
`luk` smallint(6) NOT NULL DEFAULT '0',
`hp` smallint(6) NOT NULL DEFAULT '0',
`mp` smallint(6) NOT NULL DEFAULT '0',
`PAD` smallint(6) NOT NULL DEFAULT '0',
`MAD` smallint(6) NOT NULL DEFAULT '0',
`PDD` smallint(6) NOT NULL DEFAULT '0',
`speed` smallint(6) NOT NULL DEFAULT '0',
`jump` smallint(6) NOT NULL DEFAULT '0',
`BDR` int(3) NOT NULL DEFAULT '0' COMMENT 'BOSS伤害百分比',
`IMDR` int(3) NOT NULL DEFAULT '0' COMMENT '无视怪物防御百分比',
`DamR` int(3) NOT NULL DEFAULT '0' COMMENT '总伤害百分比增加',
`StatR` int(3) NOT NULL DEFAULT '0' COMMENT '所有属性百分比增加',
PRIMARY KEY (`id`)
) ;