/*
 *  功能：勋章融合
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array();	// 记录每一轮的选择
// 材料
var 通用强化材料 = 3800747;
var 吸收材料 = 3800747;
// UI图片
var z = "#fEffect/ItemEff/1112811/0/0#"; //"+z+"//美化
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var itemIcon = "#fUI/Basic.img/Cursor/32/0#";

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	// type: 0 = (sendNext, sendOk, sendNextPrev) 1 = (sendYesNo) 12 = (sendAcceptDecline) 3 = (sendGetNumber) 4 = (askMenu)
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(askMenu/sendGetNumber时，结束对话)
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	// 初次对话
	if (status == 0) {
		对话首页();
	} else { // 后续对话
		switch (selectionLog[1]) {
		case 1:
			勋章吸收();
			break;
		case 2:
			勋章注灵();
			break;
		case 3:
			勋章记录();
			break;
		default:
			cm.askMenu("啊你说什么？没听清楚。");
			cm.dispose(); // 结束
			break;
		}
	}
}

function 对话首页() {
	text = "#k勋章是独一无二的成就的象征。不过我有一些独特的技巧，可以教你将勋章的力量完美地融合在一起。\r\n\r\n";
	text += "#L1#" + "#v1142483#" + "#b勋章吸收\r\n#l";
	text += "#L2#" + "#v3800747#" + "#b勋章注灵\r\n#l";
	text += "#L3#" + "#v1142477#" + "#b勋章记录\r\n#l";
	cm.askMenu(text);
}

function 勋章吸收() {
	var item = cm.getInventory(1).getItem(1);

	text = "#k将勋章放在#r装备栏第一格#k，我就可以帮助你吸收它的力量。\r\n";
	text += "#k勋章的力量会继续存留在你的身体里，直到你将它们注入到#b另一枚勋章上#k才会发挥效力。\r\n";
	if (item != null && item.getItemId() >= 1140000 && item.getItemId() < 1150000) {
		var itemId = item.getItemId();
		var toDrop = cm.getItemInfo().getEquipById(itemId);
		var count = getMedalCount();
		if (status == 1) {
			if (findMedal(item) > 0) { // 已经有了
				text += "\r\n#k看上去你已经吸收过#i" + toDrop.getItemId() + "##e#r#z" + toDrop.getItemId() + "##n#k的力量了。每一枚勋章只能吸收一次。\r\n";
				cm.askMenu(text);
				cm.dispose(); // 结束
				return;
			}
			var attrSum = getAttrSum();
			text += "\r\n#k你已经吸收了 #b#e" + count + "枚 #k#n勋章的力量。吸收新的一枚勋章需要材料：\r\n";
			text += "#v" + 吸收材料 + "#" + "#b空白的奖牌#e #k× " + count + " / #n现有 #c" + 吸收材料 + "# 个\r\n\r\n";
			text += "吸收#i" + toDrop.getItemId() + "##e#r#z" + toDrop.getItemId() + "##n#k的力量可以为你带来这些额外力量：\r\n";
			if (toDrop.getPAD() > 0) {
				text += "#r◆攻击力 #k- " + attrSum[7] + "#e -> " + (toDrop.getPAD() + attrSum[7]) + "#g\t↑" + toDrop.getPAD() + "#n#k\r\n";
			}
			if (toDrop.getMAD() > 0) {
				text += "#r◆魔法力 #k- " + attrSum[8] + "#e -> " + (toDrop.getMAD() + attrSum[8]) + "#g\t↑" + toDrop.getMAD() + "#n#k\r\n";
			}
			if (toDrop.getStr() > 0) {
				text += "#b◇ 力量  #k- " + attrSum[1] + "#e -> " + (toDrop.getStr() + attrSum[1]) + "#g\t↑" + toDrop.getStr() + "#n#k\r\n";
			}
			if (toDrop.getDex() > 0) {
				text += "#b◇ 敏捷  #k- " + attrSum[2] + "#e -> " + (toDrop.getDex() + attrSum[2]) + "#g\t↑" + toDrop.getDex() + "#n#k\r\n";
			}
			if (toDrop.getInt() > 0) {
				text += "#b◇ 智力  #k- " + attrSum[3] + "#e -> " + (toDrop.getInt() + attrSum[3]) + "#g\t↑" + toDrop.getInt() + "#n#k\r\n";
			}
			if (toDrop.getLuk() > 0) {
				text += "#b◇ 幸运  #k- " + attrSum[4] + "#e -> " + (toDrop.getLuk() + attrSum[4]) + "#g\t↑" + toDrop.getLuk() + "#n#k\r\n";
			}
			if (toDrop.getMaxHP() > 0) {
				text += "#b◇ 生命值 #k- " + attrSum[5] + "#e -> " + (toDrop.getMaxHP() + attrSum[5]) + "#g\t↑" + toDrop.getMaxHP() + "#n#k\r\n";
			}
			if (toDrop.getMaxMP() > 0) {
				text += "#b◇ 魔法值 #k- " + attrSum[6] + "#e -> " + (toDrop.getMaxMP() + attrSum[6]) + "#g\t↑" + toDrop.getMaxMP() + "#n#k\r\n";
			}
			if (toDrop.getPDD() > 0) {
				text += "#b◇ 防御  #k- " + attrSum[9] + "#e -> " + (toDrop.getPDD() + attrSum[9]) + "#g\t↑" + toDrop.getPDD() + "#n#k\r\n";
			}
			if (toDrop.getSpeed() > 0) {
				text += "#b◇ 速度  #k- " + attrSum[10] + "#e -> " + (toDrop.getSpeed() + attrSum[10]) + "#g\t↑" + toDrop.getSpeed() + "#n#k\r\n";
			}
			if (toDrop.getJump() > 0) {
				text += "#b◇ 跳跃  #k- " + attrSum[11] + "#e -> " + (toDrop.getJump() + attrSum[11]) + "#g\t↑" + toDrop.getJump() + "#n#k\r\n";
			}
			if (toDrop.getBDR() > 0) {
				text += "#b◇首领伤害#k- " + attrSum[12] + "#e -> " + (toDrop.getBDR() + attrSum[12]) + "#g\t↑" + toDrop.getBDR() + "#n#k\r\n";
			}
			if (toDrop.getIMDR() > 0) {
				text += "#b◇无视防御#k- " + attrSum[13] + "#e -> " + (toDrop.getIMDR() + attrSum[13]) + "#g\t↑" + toDrop.getIMDR() + "#n#k\r\n";
			}
			if (toDrop.getDamR() > 0) {
				text += "#b◇整体伤害#k- " + attrSum[14] + "#e -> " + (toDrop.getDamR() + attrSum[14]) + "#g\t↑" + toDrop.getDamR() + "#n#k\r\n";
			}
			if (toDrop.getStatR() > 0) {
				text += "#b◇所有属性#k- " + attrSum[15] + "#e -> " + (toDrop.getStatR() + attrSum[15]) + "#g\t↑" + toDrop.getStatR() + "#n#k\r\n";
			}
			cm.askMenu(text);
		} else if (status == 2) {
			if (cm.haveItem(吸收材料, count)) {
				cm.gainItem(吸收材料, -count);
				// 添加记录，删除道具
				addMedal(toDrop);
				updateMedalRecord(toDrop);
				cm.removeSlot(1, 1, 1);
				var count = getMedalCount();
				text = "#k勋章吸收成功了！现在你已经吸收了 #b#e" + count + "枚 #k#n勋章的力量。\r\n";
			} else {
				text = "#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n";
			}
			cm.askMenu(text);
			cm.dispose(); // 结束
		}
	} else {
		cm.askMenu(text);
		cm.dispose(); // 结束
	}
}

function 勋章注灵() {
	var item = cm.getInventory(1).getItem(1);

	text = "#k我可以帮你把你所吸收过的勋章的力量可以注入到#b任意一枚勋章#k上，让它拥有额外的属性。\r\n";
	text += "#k将准备注灵的勋章放在#r装备栏第一格#k，我就可以帮助你注入力量。\r\n";
	if (item != null && item.getItemId() >= 1140000 && item.getItemId() < 1150000) {
		var itemId = item.getItemId();
		var count = getMedalCount();
		var attrSum = getAttrSum();
		if (status == 1) {
			text += "\r\n#k你已经吸收了 #b#e" + count + "枚 #k#n勋章的力量。#r注灵「" + count + "」重#k需要材料：\r\n";
			text += "#v" + 通用强化材料 + "#" + "#b空白的奖牌#e #k× " + count + " / #n现有 #c" + 通用强化材料 + "# 个\r\n\r\n";
			text += "为#i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k注灵后将获得这些额外属性：\r\n";
			if (item.getPAD() < attrSum[7]) {
				text += "#r◆攻击力 #k- " + item.getPAD() + "#e -> " + (attrSum[7]) + "#g\t↑" + (attrSum[7] - item.getPAD()) + "#n#k\r\n";
			}
			if (item.getMAD() < attrSum[8]) {
				text += "#r◆魔法力 #k- " + item.getMAD() + "#e -> " + (attrSum[8]) + "#g\t↑" + (attrSum[8] - item.getMAD()) + "#n#k\r\n";
			}
			if (item.getStr() < attrSum[1]) {
				text += "#b◇ 力量  #k- " + item.getStr() + "#e -> " + (attrSum[1]) + "#g\t↑" + (attrSum[1] - item.getStr()) + "#n#k\r\n";
			}
			if (item.getDex() < attrSum[2]) {
				text += "#b◇ 敏捷  #k- " + item.getDex() + "#e -> " + (attrSum[2]) + "#g\t↑" + (attrSum[2] - item.getDex()) + "#n#k\r\n";
			}
			if (item.getInt() < attrSum[3]) {
				text += "#b◇ 智力  #k- " + item.getInt() + "#e -> " + (attrSum[3]) + "#g\t↑" + (attrSum[3] - item.getInt()) + "#n#k\r\n";
			}
			if (item.getLuk() < attrSum[4]) {
				text += "#b◇ 幸运  #k- " + item.getLuk() + "#e -> " + (attrSum[4]) + "#g\t↑" + (attrSum[4] - item.getLuk()) + "#n#k\r\n";
			}
			if (item.getMaxHP() < attrSum[5]) {
				text += "#b◇ 生命值 #k- " + item.getMaxHP() + "#e -> " + (attrSum[5]) + "#g\t↑" + (attrSum[5] - item.getMaxHP()) + "#n#k\r\n";
			}
			if (item.getMaxMP() < attrSum[6]) {
				text += "#b◇ 魔法值 #k- " + item.getMaxMP() + "#e -> " + (attrSum[6]) + "#g\t↑" + (attrSum[6] - item.getMaxMP()) + "#n#k\r\n";
			}
			if (item.getPDD() < attrSum[9]) {
				text += "#b◇ 防御  #k- " + item.getPDD() + "#e -> " + (attrSum[9]) + "#g\t↑" + (attrSum[9] - item.getPDD()) + "#n#k\r\n";
			}
			if (item.getSpeed() < attrSum[10]) {
				text += "#b◇ 速度  #k- " + item.getSpeed() + "#e -> " + (attrSum[10]) + "#g\t↑" + (attrSum[10] - item.getSpeed()) + "#n#k\r\n";
			}
			if (item.getJump() < attrSum[14]) {
				text += "#b◇ 跳跃  #k- " + item.getJump() + "#e -> " + (attrSum[11]) + "#g\t↑" + (attrSum[11] - item.getJump()) + "#n#k\r\n";
			}
			if (item.getBDR() < attrSum[12]) {
				text += "#b◇首领伤害#k- " + item.getBDR() + "#e -> " + (attrSum[12]) + "#g\t↑" + (attrSum[12] - item.getBDR()) + "#n#k\r\n";
			}
			if (item.getIMDR() < attrSum[13]) {
				text += "#b◇无视防御#k- " + item.getIMDR() + "#e -> " + (attrSum[13]) + "#g\t↑" + (attrSum[13] - item.getIMDR()) + "#n#k\r\n";
			}
			if (item.getDamR() < attrSum[14]) {
				text += "#b◇整体伤害#k- " + item.getDamR() + "#e -> " + (attrSum[14]) + "#g\t↑" + (attrSum[14] - item.getDamR()) + "#n#k\r\n";
			}
			if (item.getStatR() < attrSum[15]) {
				text += "#b◇所有属性#k- " + item.getStatR() + "#e -> " + (attrSum[15]) + "#g\t↑" + (attrSum[15] - item.getStatR()) + "#n#k\r\n";
			}
			cm.askMenu(text);
		} else if (status == 2) {
			if (cm.haveItem(通用强化材料, count)) {
				cm.gainItem(通用强化材料, -count);
				// 覆盖属性
				var toDrop = item.copy();
				toDrop.setTitle("注灵「" + count + "」重");
				toDrop.setPAD(Math.max(item.getPAD(), attrSum[7]));
				toDrop.setMAD(Math.max(item.getMAD(), attrSum[8]));
				toDrop.setStr(Math.max(item.getStr(), attrSum[1]));
				toDrop.setDex(Math.max(item.getDex(), attrSum[2]));
				toDrop.setInt(Math.max(item.getInt(), attrSum[3]));
				toDrop.setLuk(Math.max(item.getLuk(), attrSum[4]));
				toDrop.setMaxHP(Math.max(item.getMaxHP(), attrSum[5]));
				toDrop.setMaxMP(Math.max(item.getMaxMP(), attrSum[6]));
				toDrop.setPDD(Math.max(item.getPDD(), attrSum[9]));
				toDrop.setSpeed(Math.max(item.getSpeed(), attrSum[10]));
				toDrop.setJump(Math.max(item.getJump(), attrSum[11]));
				toDrop.setBDR(Math.max(item.getBDR(), attrSum[12]));
				toDrop.setIMDR(Math.max(item.getIMDR(), attrSum[13]));
				toDrop.setDamR(Math.max(item.getDamR(), attrSum[14]));
				toDrop.setStatR(Math.max(item.getStatR(), attrSum[15]));
				cm.removeSlot(1, 1, 1);
				cm.addFromDrop(cm.getClient(), toDrop, false);
				text = "#k为#i" + toDrop.getItemId() + "#注灵成功了！查看一下它的新力量吧。\r\n";
			} else {
				text = "#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n";
			}
			cm.askMenu(text);
			cm.dispose(); // 结束
		}
	} else {
		cm.askMenu(text);
		cm.dispose(); // 结束
	}
}

function 勋章记录() {
	var num = 2; // 每行 2 个勋章
	var list = getMedalList();
	if (list.length <= 0) {
		text = "#k你还没有吸收任何一枚勋章的力量。快去收集吧！\r\n";
	} else {
		text = "#k你已经吸收了 #b#e" + (list.length - 1) + "枚 #k#n勋章的力量。下面是所有的勋章记录：\r\n";
		list.forEach(function (item, index) {
			text += "#k#e[" + index + "] #n#i" + item + "##b#z" + item + "##k\r\n";
		});
	}
	cm.askMenu(text);
	cm.dispose(); // 结束
}

// 创建MYSQL表
function createTable() {
	var conn = cm.getConnection();
	var ps = conn.prepareStatement("CREATE TABLE IF NOT EXISTS `combine_medal` (" + "`id` int(11) NOT NULL AUTO_INCREMENT," + "`characterid` int(11) NOT NULL DEFAULT '0'," + "`medalid` int(11) NOT NULL DEFAULT '0'," + "`str` smallint(6) NOT NULL DEFAULT '0'," + "`dex` smallint(6) NOT NULL DEFAULT '0'," + "`int` smallint(6) NOT NULL DEFAULT '0'," + "`luk` smallint(6) NOT NULL DEFAULT '0'," + "`hp` smallint(6) NOT NULL DEFAULT '0'," + "`mp` smallint(6) NOT NULL DEFAULT '0'," + "`PAD` smallint(6) NOT NULL DEFAULT '0'," + "`MAD` smallint(6) NOT NULL DEFAULT '0'," + "`PDD` smallint(6) NOT NULL DEFAULT '0'," + "`speed` smallint(6) NOT NULL DEFAULT '0'," + "`jump` smallint(6) NOT NULL DEFAULT '0'," + "`BDR` int(3) NOT NULL DEFAULT '0' COMMENT 'BOSS伤害百分比'," + "`IMDR` int(3) NOT NULL DEFAULT '0' COMMENT '无视怪物防御百分比'," + "`DamR` int(3) NOT NULL DEFAULT '0' COMMENT '总伤害百分比增加'," + "`StatR` int(3) NOT NULL DEFAULT '0' COMMENT '所有属性百分比增加'," + "PRIMARY KEY (`id`)" + ") ;");
	ps.executeUpdate();
	ps.close();
	conn.close();
}

// 获取总属性
function getAttrSum() {
	// 先检查一遍创建了没
	createTable();

	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT SUM(str),SUM(dex),SUM(`int`),SUM(luk),SUM(hp),SUM(mp),SUM(PAD),SUM(MAD),SUM(PDD),SUM(speed),SUM(jump),SUM(BDR),SUM(IMDR),SUM(IMDR),SUM(DamR) FROM `combine_medal` WHERE `characterid`=" + cm.getPlayer().getId() + ";");
	var resultSet = ps.executeQuery();
	var attrSum = new Array();
	if (resultSet.next()) {
		for (i = 1; i <= 15; i++) {
			attrSum[i] = resultSet.getInt(i);
		}
	} else {
		for (i = 1; i <= 15; i++) {
			attrSum[i] = 0;
		}
	}
	resultSet.close();
	ps.close();
	conn.close();
	return attrSum;
}

// 获取融合总数
function getMedalCount() {
	// 先检查一遍创建了没
	createTable();

	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT count(*) FROM `combine_medal` WHERE `characterid`=" + cm.getPlayer().getId() + ";");
	var resultSet = ps.executeQuery();
	var count = resultSet.next() ? resultSet.getInt(1) : 0;
	resultSet.close();
	ps.close();
	conn.close();
	return count;
}

// 检查勋章是否存在
function findMedal(item) {
	// 先检查一遍创建了没
	createTable();

	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT count(*) FROM `combine_medal` WHERE `characterid`=" + cm.getPlayer().getId() + " AND `medalid`=" + item.getItemId() + ";");
	var resultSet = ps.executeQuery();
	var count = resultSet.next() ? resultSet.getInt(1) : 0;
	resultSet.close();
	ps.close();
	conn.close();
	return count;
}

// 添加新勋章
function addMedal(item) {
	// 先检查一遍创建了没
	createTable();

	var conn = cm.getConnection();
	var ps = conn.prepareStatement("INSERT INTO `combine_medal` (`characterid`,`medalid`,`str`,`dex`,`int`,`luk`,`hp`,`mp`,`PAD`,`MAD`,`PDD`,`speed`,`jump`,`BDR`,`IMDR`,`DamR`,`StatR`) VALUES (" + cm.getPlayer().getId() + "," + item.getItemId() + "," + item.getStr() + "," + item.getDex() + "," + item.getInt() + "," + item.getLuk() + "," + item.getMaxHP() + "," + item.getMaxMP() + "," + item.getPAD() + "," + item.getMAD() + "," + item.getPDD() + "," + item.getSpeed() + "," + item.getJump() + "," + item.getBDR() + "," + item.getIMDR() + "," + item.getDamR() + "," + item.getStatR() + ");");
	ps.executeUpdate();
	ps.close();
	conn.close();
}

// 获取所有融合的勋章
function getMedalList() {
	// 先检查一遍创建了没
	createTable();

	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT `medalid` FROM `combine_medal` WHERE `characterid`=" + cm.getPlayer().getId() + " order by `medalid` asc;");
	var resultSet = ps.executeQuery();
	var list = new Array();
	var index = 1;
	while (resultSet.next()) {
		list[index++] = resultSet.getInt(1);
	}
	resultSet.close();
	ps.close();
	conn.close();
	return list;
}

// 强行视为已经完成任务，获得勋章
function updateMedalRecord(item) {
	// 先检查一遍创建了没
	createTable();

	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT `questid` FROM `wz_questdata` WHERE `viewMedalItem`=" + item.getItemId() + " order by `questid` asc;");
	var resultSet = ps.executeQuery();
	var count = 0;
	while (resultSet.next()) {
		cm.startQuest(resultSet.getInt(1)); //开始任务
		cm.completeQuest(resultSet.getInt(1));
		count++;
	}
	resultSet.close();
	/*	好像不能这么玩，先不管了
	if (count == 0) { // 需要创建任务
		var conn = cm.getConnection();
		var ps = conn.prepareStatement("INSERT INTO `wz_questdata` (`questid`,`name`,`autoStart`,`autoPreComplete`,`viewMedalItem`,`selectedSkillID`,`blocked`,`autoAccept`,`autoComplete`,`selfStart`) VALUES (" + item.getItemId() + ",\"称号 - " + item.getItemId() + "\",1,0," + item.getItemId() + ",0,0,1,0,0);");
		ps.executeUpdate();
		cm.startQuest(item.getItemId()); //开始任务
		cm.completeQuest(item.getItemId());
	}*/
	ps.close();
	conn.close();
}
