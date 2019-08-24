/*
 *  功能：装备觉醒
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1;
var lastSelection = -1;
// 前缀 ①②③④⑤⑥⑦⑧⑨⑩
var grade = Array(
		"『癸等▽平凡觉醒』",
		"『癸等◆精良觉醒』",
		"『壬等▽优质觉醒』",
		"『壬等◆进阶觉醒』",
		"『辛等▽稀有觉醒』",
		"『辛等◆英雄觉醒』",
		"『庚等▽超凡觉醒』",
		"『庚等◆史诗觉醒』",
		"『己等▽传说觉醒』",
		"『己等◆神话觉醒』",
		"『戊等▽永恒觉醒』",
		"『戊等◆星耀觉醒』",
		"『丁等▽月华觉醒』",
		"『丁等◆日曜觉醒』",
		"『丙等▽灵器觉醒』",
		"『丙等◆仙器觉醒』",
		"『乙等▽圣器觉醒』",
		"『乙等◆神器觉醒』",
		"『甲等▽太初觉醒』",
		"『甲等◆元一觉醒』");
// 材料
var 通用强化材料 = 4001878;
var 心 = [4001558,4001559,4001560,4001561,4001562];
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
	// 初始状态
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// 标准状态，交谈一次就会更新一次状态
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (selection > 0)
		lastSelection = selection;
	// 初次对话
	if (status == 0) {
		对话首页();
	} else { // 后续对话
		switch (lastSelection) {
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
	var itemId = item.getItemId();
	var toDrop = cm.getItemInfo().getEquipById(itemId);

	if (itemId >= 1140000 && itemId < 1150000) {
		if (status == 1) {
			text = "#k将勋章放在#r装备栏第一格#k，我就可以帮助你吸收它的力量。\r\n";
			text += "#k勋章的力量会继续存留在你的身体里，直到你将它们注入到#b另一枚勋章上#k才会发挥效力。\r\n";
			if(findMedal(item)>0){	// 已经有了					
				text += "#k看上去你已经吸收过#i" + toDrop.getItemId() + "##e#r#z" + toDrop.getItemId() + "##n#k的力量了。每一枚勋章只能吸收一次\r\n";
				cm.askMenu(text);
				cm.dispose(); // 结束
				return;
			}
			var attrSum = getAttrSum();
			text += "吸收#i" + toDrop.getItemId() + "##e#r#z" + toDrop.getItemId() + "##n#k的力量可以为你带来这些额外力量：\r\n";
			if (toDrop.getWatk() > 0) {
				text += "#r◆攻击力 #k- " + attrSum[7] + "#e -> " + (toDrop.getWatk() + attrSum[7]) + "#g\t↑" + toDrop.getWatk() + "#n#k\r\n";
			}
			if (toDrop.getMatk() > 0) {
				text += "#r◆魔法力 #k- " + attrSum[8] + "#e -> " + (toDrop.getMatk() + attrSum[8]) + "#g\t↑" + toDrop.getMatk() + "#n#k\r\n";
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
			if (toDrop.getHp() > 0) {
				text += "#b◇ 生命值 #k- " + attrSum[5] + "#e -> " + (toDrop.getHp() + attrSum[5]) + "#g\t↑" + toDrop.getHp() + "#n#k\r\n";
			}
			if (toDrop.getMp() > 0) {
				text += "#b◇ 魔法值 #k- " + attrSum[6] + "#e -> " + (toDrop.getMp() + attrSum[6]) + "#g\t↑" + toDrop.getMp() + "#n#k\r\n";
			}
			if (toDrop.getWdef() > 0) {
				text += "#b◇ 防御  #k- " + attrSum[9] + "#e -> " + (toDrop.getWdef() + attrSum[9]) + "#g\t↑" + toDrop.getWdef() + "#n#k\r\n";
			}
			if (toDrop.getSpeed() > 0) {
				text += "#b◇ 速度  #k- " + attrSum[10] + "#e -> " + (toDrop.getSpeed() + attrSum[10]) + "#g\t↑" + toDrop.getSpeed() + "#n#k\r\n";
			}
			if (toDrop.getJump() > 0) {
				text += "#b◇ 跳跃  #k- " + attrSum[11] + "#e -> " + (toDrop.getJump() + attrSum[11]) + "#g\t↑" + toDrop.getJump() + "#n#k\r\n";
			}
			if (toDrop.getBossDamage() > 0) {
				text += "#b◇首领伤害#k- " + attrSum[12] + "#e -> " + (toDrop.getBossDamage() + attrSum[12]) + "#g\t↑" + toDrop.getBossDamage() + "#n#k\r\n";
			}
			if (toDrop.getIgnorePDR() > 0) {
				text += "#b◇无视防御#k- " + attrSum[13] + "#e -> " + (toDrop.getIgnorePDR() + attrSum[13]) + "#g\t↑" + toDrop.getIgnorePDR() + "#n#k\r\n";
			}
			if (toDrop.getTotalDamage() > 0) {
				text += "#b◇整体伤害#k- " + attrSum[14] + "#e -> " + (toDrop.getTotalDamage() + attrSum[14]) + "#g\t↑" + toDrop.getTotalDamage() + "#n#k\r\n";
			}
			if (toDrop.getAllStat() > 0) {
				text += "#b◇所有属性#k- " + attrSum[15] + "#e -> " + (toDrop.getAllStat() + attrSum[15]) + "#g\t↑" + toDrop.getAllStat() + "#n#k\r\n";
			}
			cm.askMenu(text);
		} else if (status == 2) {
			// 添加记录，删除道具
			addMedal(toDrop);
			cm.removeSlot(1, 1, 1);
			var count = getMedalCount();
			text = "#k勋章吸收成功了！现在你已经吸收了 #b#e" + count + "枚 #k#n勋章的力量。\r\n";
			cm.askMenu(text);
			cm.dispose(); // 结束
		}
	} else {
		text += "嘿，看起来#i" + toDrop.getItemId() + "##e#r#z" + toDrop.getItemId() + "##n#k不是勋章，你无法吸收它。";
		cm.askMenu(text);
		cm.dispose(); // 结束
	}
}

function 勋章注灵() {
	var item = cm.getInventory(1).getItem(1);
	var itemId = item.getItemId();

	if (itemId >= 1140000 && itemId < 1150000) {
		if (status == 1) {
			var count = getMedalCount();
			var attrSum = getAttrSum();
			text = "#k我可以帮你把你所吸收过的勋章的力量可以注入到#b任意一枚勋章#k上，让它拥有额外的属性。\r\n";
			text += "#k将准备注灵的勋章放在#r装备栏第一格#k，我就可以帮助你注入力量。\r\n";
			text += "#k你已经吸收了 #b#e" + count + "枚 #k#n勋章的力量。\r\n";
			text += "为#i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k注灵后将获得这些额外属性：\r\n";
			if (item.getWatk() < attrSum[7]) {
				text += "#r◆攻击力 #k- " + item.getWatk() + "#e -> " + (attrSum[7]) + "#g\t↑" + (item.getWatk() - attrSum[7]) + "#n#k\r\n";
			}
			if (item.getMatk() < attrSum[8]) {
				text += "#r◆魔法力 #k- " + item.getMatk() + "#e -> " + (attrSum[8]) + "#g\t↑" + (item.getMatk() - attrSum[8]) + "#n#k\r\n";
			}
			if (item.getStr() < attrSum[1]) {
				text += "#b◇ 力量  #k- " + item.getStr() + "#e -> " + (attrSum[1]) + "#g\t↑" + (item.getStr() - attrSum[1]) + "#n#k\r\n";
			}
			if (item.getDex() < attrSum[2]) {
				text += "#b◇ 敏捷  #k- " + item.getDex() + "#e -> " + (attrSum[2]) + "#g\t↑" + (item.getDex() - attrSum[2]) + "#n#k\r\n";
			}
			if (item.getInt() < attrSum[3]) {
				text += "#b◇ 智力  #k- " + item.getInt() + "#e -> " + (attrSum[3]) + "#g\t↑" + (item.getInt() - attrSum[3]) + "#n#k\r\n";
			}
			if (item.getLuk() < attrSum[4]) {
				text += "#b◇ 幸运  #k- " + item.getLuk() + "#e -> " + (attrSum[4]) + "#g\t↑" + (item.getLuk() - attrSum[4]) + "#n#k\r\n";
			}
			if (item.getHp() < attrSum[5]) {
				text += "#b◇ 生命值 #k- " + item.getHp() + "#e -> " + (attrSum[5]) + "#g\t↑" + (item.getHp() - attrSum[5]) + "#n#k\r\n";
			}
			if (item.getMp() < attrSum[6]) {
				text += "#b◇ 魔法值 #k- " + item.getMp() + "#e -> " + (attrSum[6]) + "#g\t↑" + (item.getMp() - attrSum[6]) + "#n#k\r\n";
			}
			if (item.getWdef() < attrSum[9]) {
				text += "#b◇ 防御  #k- " + item.getWdef() + "#e -> " + (attrSum[9]) + "#g\t↑" + (item.getWdef() - attrSum[9]) + "#n#k\r\n";
			}
			if (item.getSpeed() < attrSum[10]) {
				text += "#b◇ 速度  #k- " + item.getSpeed() + "#e -> " + (attrSum[10]) + "#g\t↑" + (item.getSpeed() - attrSum[10]) + "#n#k\r\n";
			}
			if (item.getJump() < attrSum[14]) {
				text += "#b◇ 跳跃  #k- " + item.getJump() + "#e -> " + (attrSum[11]) + "#g\t↑" + (item.getJump() - attrSum[11]) + "#n#k\r\n";
			}
			if (item.getBossDamage() < attrSum[12]) {
				text += "#b◇首领伤害#k- " + item.getBossDamage() + "#e -> " + (attrSum[12]) + "#g\t↑" + (item.getBossDamage() - attrSum[12]) + "#n#k\r\n";
			}
			if (item.getIgnorePDR() < attrSum[13]) {
				text += "#b◇无视防御#k- " + item.getIgnorePDR() + "#e -> " + (attrSum[13]) + "#g\t↑" + (item.getIgnorePDR() - attrSum[13]) + "#n#k\r\n";
			}
			if (item.getTotalDamage() < attrSum[14]) {
				text += "#b◇整体伤害#k- " + item.getTotalDamage() + "#e -> " + (attrSum[14]) + "#g\t↑" + (item.getTotalDamage() - attrSum[14]) + "#n#k\r\n";
			}
			if (item.getAllStat() < attrSum[15]) {
				text += "#b◇所有属性#k- " + item.getAllStat() + "#e -> " + (attrSum[15]) + "#g\t↑" + (item.getAllStat() - attrSum[15]) + "#n#k\r\n";
			}
			cm.askMenu(text);
		} else if (status == 2) {
			// 覆盖属性
			var toDrop = item.copy();
			toDrop.setWatk(Math.max(item.getWatk(), attrSum[7]));
			toDrop.setMatk(Math.max(item.getMatk(), attrSum[8]));
			toDrop.setStr(Math.max(item.getStr(), attrSum[1]));
			toDrop.setDex(Math.max(item.getDex(), attrSum[2]));
			toDrop.setInt(Math.max(item.getInt(), attrSum[3]));
			toDrop.setLuk(Math.max(item.getLuk(), attrSum[4]));
			toDrop.setHp(Math.max(item.getHp(), attrSum[5]));
			toDrop.setMp(Math.max(item.getMp(), attrSum[6]));
			toDrop.setWdef(Math.max(item.getWdef(), attrSum[9]));
			toDrop.setSpeed(Math.max(item.getSpeed(), attrSum[10]));
			toDrop.setJump(Math.max(item.getJump(), attrSum[11]));
			toDrop.setBossDamage(Math.max(item.getBossDamage(), attrSum[12]));
			toDrop.setIgnorePDR(Math.max(item.getIgnorePDR(), attrSum[13]));
			toDrop.setTotalDamage(Math.max(item.getTotalDamage(), attrSum[14]));
			toDrop.setAllStat(Math.max(item.getAllStat(), attrSum[15]));
			cm.removeSlot(1, 1, 1);
			cm.addFromDrop(cm.getC(), toDrop, false);
			text = "#k为#i" + toDrop.getItemId() + "#注灵成功了！查看一下它的新力量吧。\r\n";
			cm.askMenu(text);
			cm.dispose(); // 结束
		}
	} else {
		text += "嘿，看起来#i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k不是勋章，你无法往里面注入勋章的力量。";
		cm.askMenu(text);
		cm.dispose(); // 结束
	}
}

function 勋章记录() {
	text = "#k你已经吸收了 #b#e" + count + "枚 #k#n勋章的力量。下面是所有的勋章记录：\r\n";
	var num = 2; // 每行 2 个勋章
	var list = getMedalList();
	list.forEach(function (item, index, array) {
		text += "#k#e[" + index + "]#n#i" + toDrop.getItemId() + "##b#z" + toDrop.getItemId() + "##k";
		if (index % num == 0) {
			text += "\r\n";
		} else {
			text += "\t" + tz12 + "\t";
		}
	});
	cm.askMenu(text);
	cm.dispose(); // 结束
}

// 获取总属性
function getAttrSum() {
	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT SUM(str),SUM(dex),SUM(`int`),SUM(luk),SUM(hp),SUM(mp),SUM(watk),SUM(matk),SUM(wdef),SUM(speed),SUM(jump),SUM(bossDamage),SUM(ignorePDR),SUM(ignorePDR),SUM(totalDamage) FROM `combine_medal` WHERE `characterid`=" + cm.getPlayer().getId() + ";");
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
	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT count(*) FROM `combine_medal` WHERE `characterid`=" + cm.getPlayer().getId() + " AND `medalid`="+item.getItemId()+";");
	var resultSet = ps.executeQuery();
	var count = resultSet.next() ? resultSet.getInt(1) : 0;
	resultSet.close();
	ps.close();
	conn.close();
	return count;
}

// 添加新勋章
function addMedal(item) {
	var conn = cm.getConnection();
	var ps = conn.prepareStatement("INSERT INTO `combine_medal` (`characterid`,`medalid`,`str`,`dex`,`int`,`luk`,`hp`,`mp`,`watk`,`matk`,`wdef`,`speed`,`jump`,`bossDamage`,`ignorePDR`,`totalDamage`,`allStat`) VALUES (" + cm.getPlayer().getId() + "," + item.getItemId() + "," + item.getStr() + "," + item.getDex() + "," + item.getInt() + "," + item.getLuk() + "," + item.getHp() + "," + item.getMp() + "," + item.getWatk() + "," + item.getMatk() + "," + item.getWdef() + "," + item.getSpeed() + "," + item.getJump() + "," + item.getBossDamage() + "," + item.getIgnorePDR() + "," + item.getTotalDamage() + "," + item.getAllStat() + "," + ");");
	ps.executeUpdate();
	ps.close();
	conn.close();
}

// 获取所有融合的勋章
function getMedalList() {
	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT `medalid` FROM `combine_medal` WHERE `characterid`=" + cm.getPlayer().getId() + " order by `medalid` desc;");
	var resultSet = ps.executeQuery();
	var list = new Array(),
		index = 1;
	while (resultSet.next()) {
		list[index++] = resultSet.getInt(1);
	}
	resultSet.close();
	ps.close();
	conn.close();
	return list;
}
