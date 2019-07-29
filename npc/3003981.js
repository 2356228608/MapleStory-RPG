/*  This is mada by 娜娜函数整合
 *  This source is made by BMS Team
 *  脚本功能：创世武器强化升级
 *  感谢@Author[王水灌 QQ:124439607 ]提供
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array();	// 记录每一轮的选择
// 支持武器列表
var 创世武器 = [1212129, 1222122, 1232122, 1242139, 1242141, 1252106, 1262051, 1272040, 1282040, 1302355, 1312213, 1322264, 1332289, 1362149, 1372237, 1382274, 1402268, 1412189, 1422197, 1432227, 1442285, 1452266, 1462252, 1472275, 1482232, 1492245, 1522152, 1532157, 1542128, 1552130, 1582044, 1592022];
// 潜能
var SS潜能通用 = [40601, 40602, 40603, 40291, 40292, 40041, 40042, 40043, 40044, 40086, 42087, 40055, 40070, 40056, 40057];
var S潜能通用 = [30291, 30041, 30042, 30043, 30044, 30070];
var SS潜能主 = [60001, 60002, 60008, 60012, 60020, 60021];
var SS潜能攻击 = [30051, 40051];
var SS潜能魔攻 = [30052, 40052];
// 材料
var 通用强化材料 = 4001878;
var 升星材料 = 4036084;
var 超星强化材料 = [4001889, 4036457, 4001895, 4036458];
var 潜能魔方材料 = [5062010, 5062500];
var 卷轴材料 = [2613050, 2613051, 2612061, 2612062, 2613064, 2613065, 2612076, 2612077, 2613066, 2613067, 2612078, 2612079];
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
	// type: 0 = (sendNext, sendOk, sendNextPrev) 1 = (sendYesNo) 12 = (sendAcceptDecline) 3 = (sendGetNumber) 4 = (sendSimple)
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(sendSimple/sendGetNumber时，结束对话)
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	// 初次对话
	if (status == 0) {
		对话首页();
	} else {
		switch (selectionLog[1]) {
		case 1:
		case 4:
			星力注入();
			break;
		case 2:
			卷轴附魔();
			break;
		case 3:
			潜能激活();
			break;
		default:
			cm.askMenu("啊你说什么？没听清楚。");
			cm.dispose(); // 结束
			break;
		}
	}
}

function 对话首页() {
	text = "#k创世武器上拥有的力量太过强大，一般的强化手段已经无法对它们生效。我可以帮助你为它们附加更强大的力量，但是代价也比常规途径要大。\r\n";
	text += "#k#e┌\t\t         ─ " + "创世强化 ─   \t\t\t┐#n\r\n\r\n";
	var item = cm.getInventory(1).getItem(1);
	if (item != null && 创世武器.indexOf(item.getItemId()) > -1) {
		text += "             目前装备着  #i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k\r\n";
		text += "#L1#" + "#v4001839#" + "#b星力注入#l          ";
		text += "#L2#" + "#v2612076#" + "#b卷轴附魔\r\n#l";
		text += "#L3#" + "#v5062103#" + "#b潜能激活#l          ";
		text += "#L4#" + "#v4031515#" + "#b超星强化\r\n#l";
	} else {
		text += "#k将#b创世武器#k放在#r装备栏第一位#k，我可以帮你看看如何进一步强化。";
		cm.dispose(); // 结束
	}
	text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
	cm.askMenu(text);
}

function 星力注入() {
	var item = cm.getInventory(1).getItem(1);
	var level = item.getCHUC() + 1;
	var increase = Math.max(1, item.getCHUC() - 5);
	var increaseSmall = Math.max(1, Math.floor((item.getCHUC() - 5) / 2));
	var isWatk = item.getPAD() > item.getMAD();
	var isSuperEnhance = selectionLog[1] == 4;

	var star = Math.max(1, Math.floor(((item.getCHUC() + 1) * 3108 - 3000) / 1000));
	var mat = (item.getCHUC() + 1);
	var ownShinyStar = cm.getItemQuantity(升星材料);
	var ownStar = Math.floor(cm.getItemQuantity(4001839) / 1000);

	if (status == 1) {
		text = "#k我可以帮助你一次性注入星之力到达下一个等级，最高可以达到#r" + (isSuperEnhance ? 127 : 25) + "阶星之力#k。但是作为代价，你需要付出比一般装备所需更浓缩的星之力。\r\n\r\n";
		text += "#k只有由#b1000份#b#v4001839##k星星浓缩而成的#b#v" + 升星材料 + "#闪亮星星#k可以满足创世武器的要求。如果你还没来得及转换，我也可以帮你一并将背包里的星星浓缩成闪亮星星。\r\n\r\n";
		if (isSuperEnhance) {
			text += "#k#e┌\t\t       ─ " + "#v4031515#" + "#b超星强化 ─   \t\t  ┐#n\r\n\r\n";
		} else {
			text += "#k#e┌\t\t       ─ " + "#v4001839#" + "星力注入 ─   \t\t  ┐#n\r\n\r\n";
		}
		// 满级了
		if (!isSuperEnhance && level > 25) {
			endTalk(text, "#k#i" + item.getItemId() + "#这把武器已经强化到" + tz12 + "#r25阶星之力#k了。需要进行#r超星强化#k才能继续为它注入能量。\r\n");
			return;
		}
		if (isSuperEnhance && level <= 25) {
			endTalk(text, "#k#i" + item.getItemId() + "#这把武器现在只能进行标准的星力注入，还无法承受超星强化的力量。提升到#r25阶星之力#k之后再来找我吧。\r\n");
			return;
		}
		if (isSuperEnhance && level > 127) {
			endTalk(text, "#k#i" + item.getItemId() + "#这把武器已经强化到" + tz13 + "#r127阶星之力#k了。我无法再给它注入更强大的力量。\r\n");
			return;
		}
		text += "#k提升 #i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k 为 " + (isSuperEnhance ? tz13 : tz12) + "#d" + (level - 1) + "#e->" + level + "#n星#e#g ↑1#n#k 需要材料：\r\n";
		text += "#v" + 升星材料 + "#" + "#b#z" + 升星材料 + "##e #k× " + star + " / #n现有 " + ownShinyStar + " + " + ownStar + " 个\r\n";
		text += "#v" + 通用强化材料 + "#" + "#b#z" + 通用强化材料 + "##e #k× " + mat + " / #n现有 #c" + 通用强化材料 + "# 个\r\n";
		if (level > 25) {
			text += "#v" + 超星强化材料[0] + "##d#z" + 超星强化材料[0] + "##e #k× " + (mat - 25) + " / #n现有 #c" + 超星强化材料[0] + "# 个\r\n";
		}
		if (level > 50) {
			text += "#v" + 超星强化材料[1] + "##d#z" + 超星强化材料[1] + "##e #k× " + (mat - 50) + " / #n现有 #c" + 超星强化材料[1] + "# 个\r\n";
		}
		if (level > 75) {
			text += "#v" + 超星强化材料[2] + "##r#z" + 超星强化材料[2] + "##e #k× " + (mat - 75) + " / #n现有 #c" + 超星强化材料[2] + "# 个\r\n";
		}
		if (level > 100) {
			text += "#v" + 超星强化材料[3] + "##r#z" + 超星强化材料[3] + "##e #k× " + (mat - 100) + " / #n现有 #c" + 超星强化材料[3] + "# 个\r\n";
		}
		text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
		cm.askMenu(text);
	} else if (status == 2) {
		if ((ownShinyStar + ownStar) >= star && cm.haveItem(通用强化材料, mat)
			 && (level <= 25 || cm.haveItem(超星强化材料[0], mat - 25))
			 && (level <= 50 || cm.haveItem(超星强化材料[1], mat - 50))
			 && (level <= 75 || cm.haveItem(超星强化材料[2], mat - 75))
			 && (level <= 100 || cm.haveItem(超星强化材料[3], mat - 100))) {
			if (ownShinyStar >= star) { // 闪耀星星足够
				cm.gainItem(升星材料, -star);
			} else { // 帮忙浓缩星星
				浓缩星星(star, ownShinyStar);
			}
			cm.gainItem(通用强化材料, -mat);
			if (level > 25) {
				cm.gainItem(超星强化材料[0], -mat + 25);
			}
			if (level > 50) {
				cm.gainItem(超星强化材料[1], -mat + 50);
			}
			if (level > 75) {
				cm.gainItem(超星强化材料[2], -mat + 75);
			}
			if (level > 100) {
				cm.gainItem(超星强化材料[3], -mat + 100);
			}
			// 组装说明
			text = "#k升星成功了！查看一下你的武器吧。\r\n\r\n";
			text += "#i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k的属性得到如下强化：\r\n";
			if (isWatk) {
				text += "#r◆攻击力 #k- " + item.getPAD() + "#e -> " + (item.getPAD() + increase) + "#g\t↑" + increase + "#n#k\r\n";
			} else {
				text += "#r◆魔法力 #k- " + item.getMAD() + "#e -> " + (item.getMAD() + increase) + "#g\t↑" + increase + "#n#k\r\n";
			}
			text += "#b◇ 力量  #k- " + item.getStr() + "#e -> " + (item.getStr() + increaseSmall) + "#g\t↑" + increaseSmall + "#n#k\r\n";
			text += "#b◇ 敏捷  #k- " + item.getDex() + "#e -> " + (item.getDex() + increaseSmall) + "#g\t↑" + increaseSmall + "#n#k\r\n";
			text += "#b◇ 智力  #k- " + item.getInt() + "#e -> " + (item.getInt() + increaseSmall) + "#g\t↑" + increaseSmall + "#n#k\r\n";
			text += "#b◇ 幸运  #k- " + item.getLuk() + "#e -> " + (item.getLuk() + increaseSmall) + "#g\t↑" + increaseSmall + "#n#k\r\n";
			// 更新属性
			var toDrop = item.copy();
			toDrop.setCHUC(level); //星级
			if (isWatk) { // 区分物攻魔攻
				toDrop.setPAD(toDrop.getPAD() + increase);
			} else {
				toDrop.setMAD(toDrop.getMAD() + increase);
			}
			toDrop.setStr(toDrop.getStr() + increaseSmall);
			toDrop.setDex(toDrop.getDex() + increaseSmall);
			toDrop.setInt(toDrop.getInt() + increaseSmall);
			toDrop.setLuk(toDrop.getLuk() + increaseSmall);
			var prefix; // 添加标注说明
			if (level > 100) {
				prefix = "★★";
				text += "#b◇全体伤害 #k- " + item.getDamR() + "#e -> " + (item.getDamR() + 1) + "#g\t↑1#n#k\r\n";
				toDrop.setDamR(toDrop.getDamR() + 1);
			} else if (level > 75) {
				prefix = "★☆";
				text += "#b◇所有属性 #k- " + item.getStatR() + "#e -> " + (item.getStatR() + 1) + "#g\t↑1#n#k\r\n";
				toDrop.setStatR(toDrop.getStatR() + 1);
			} else if (level > 50) {
				prefix = "★";
				text += "#b◇无视防御 #k- " + item.getIMDR() + "#e -> " + (item.getIMDR() + 1) + "#g\t↑1#n#k\r\n";
				toDrop.setIMDR(toDrop.getIMDR() + 1);
			} else if (level > 25) {
				prefix = "☆";
				text += "#b◇首领伤害 #k- " + item.getBDR() + "#e -> " + (item.getBDR() + 1) + "#g\t↑1#n#k\r\n";
				toDrop.setBDR(toDrop.getBDR() + 1);
			}
			if (isSuperEnhance) { // 添加标注说明
				toDrop.setTitle(prefix + level + "阶");
				toDrop.setItemState(0);
			}
			cm.removeSlot(1, 1, 1);
			cm.addFromDrop(cm.getClient(), toDrop, false);
		} else {
			text = "#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n";
		}
		cm.askMenu(text);
		cm.dispose(); // 结束
	} else {
		cm.dispose(); // 结束
	}
}

function 浓缩星星(star, ownShinyStar) {
	cm.gainItem(升星材料, -ownShinyStar);
	var remain = star - ownShinyStar,
	multRate = 30;
	while (remain > 0) {
		while (remain >= multRate) {
			cm.gainItem(4001839, -1000 * multRate);
			remain -= multRate;
		}
		multRate = Math.max(1, Math.floor(multRate / 2));
	}
}

function 卷轴附魔() {
	var item = cm.getInventory(1).getItem(1);
	var isWatk = item.getPAD() > item.getMAD();
	var mat = (item.getCUC()+1);
	var matScroll = Math.max(1, Math.floor(mat / 10));

	if (status == 1) { // 选择卷轴类型
		text = "#k注入了星之力后，就可以将卷轴附魔到创世武器里了。每提高一阶星之力，都可以再附魔一次卷轴。\r\n";
		text += "#k只有足够强大的卷轴才能附魔到创世武器之上。但随着附魔次数的增加，对卷轴的要求也越高。\r\n";
		text += "#k#v2613064#系列的卷轴可以用于#r1~25级#k的附魔。\r\n";
		text += "#k#v2613050#系列的卷轴可以用于#r1~50级#k的附魔。\r\n";
		text += "#k#v2612078#系列的卷轴可以用于#r所有等级#k的附魔。\r\n";
		text += "另外，已使用卷轴附魔的次数越高，需要的材料也更多。\r\n";
		text += "把符合资助的卷轴放在#b消耗栏第一格#k，我们就可以开工了。\r\n";
		text += "#k#e┌\t\t     ─ " + "#v2612076#" + "卷轴附魔 ─   \t\t  ┐#n\r\n\r\n";
		if (mat > 127) {
			endTalk(text, "#k已经达到武器卷轴附魔次数的上限了。");
			return;
		}
		if (mat >= item.getCHUC()) { // 每提高一阶星之力，都可以再附魔一次卷轴
			endTalk(text, "#k已经达到现阶段可以进行卷轴附魔次数的上限。需要进一步提升武器的星之力等级才行。");
			return;
		}
		if (mat <= 25) {
			text += "#L1#使用" + "#v2613064##l\t" + "#L2#使用" + "#v2613050##l\t" + "#L3#使用" + "#v2612078##l\t";
		} else if (mat <= 50) {
			text += "不再适用#rV卷轴#k\t#L2#使用" + "#v2613050##l\t" + "#L3#使用" + "#v2612078##l\t";
		} else {
			text += "不再适用#rV卷轴#k\t不再适用#rX卷轴#k\t#L3#使用" + "#v2612078##l\t";
		}
		text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
		cm.askMenu(text);
	} else if (status == 2) { // 列出材料
		var startIndex = selectionLog[2] * 4 - 4;

		
		text = "#k#e┌\t\t     ─ " + "#v2612076#" + "卷轴附魔 ─   \t\t  ┐#n\r\n\r\n";
		text += "#k为 #i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k 进行#r第 " + mat + " #e/ " + item.getCHUC() + " #n次#k卷轴附魔需要材料：\r\n";
		text += "#v" + 通用强化材料 + "#" + "#b#z" + 通用强化材料 + "##e #k× " + mat + " / #n现有 #c" + 通用强化材料 + "# 个\r\n";
		text += "#v" + 卷轴材料[startIndex + (isWatk ? 0 : 1)] + "#" + "#b#z" + 卷轴材料[startIndex + (isWatk ? 0 : 1)] + "##e #k× " + matScroll + " / #n现有 #c" + 卷轴材料[startIndex + (isWatk ? 0 : 1)] + "# 个\r\n";
		text += "#v" + 卷轴材料[startIndex + (isWatk ? 0 : 1) + 2] + "#" + "#b#z" + 卷轴材料[startIndex + (isWatk ? 0 : 1) + 2] + "##e #k× " + matScroll + " / #n现有 #c" + 卷轴材料[startIndex + (isWatk ? 0 : 1) + 2] + "# 个\r\n";
		text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
		cm.askMenu(text);
	} else if (status == 3) { // 实现强化
		var startIndex = selectionLog[2] * 4 - 4;
		var bonus = selectionLog[2] == 1 ? [Math.random() * 3 + 9, 8, 8, 8, 8] : (selectionLog[2] == 2 ? [12, 10, 10, 10, 10] : [13, 11, 11, 11, 11]);
		if (cm.haveItem(通用强化材料, mat)
			 && cm.haveItem(卷轴材料[startIndex + (isWatk ? 0 : 1)], matScroll)
			 && cm.haveItem(卷轴材料[startIndex + (isWatk ? 0 : 1) + 2], matScroll)) {
			cm.gainItem(通用强化材料, -mat);
			cm.gainItem(卷轴材料[startIndex + (isWatk ? 0 : 1)], -matScroll);
			cm.gainItem(卷轴材料[startIndex + (isWatk ? 0 : 1) + 2], -matScroll);
			text = "#k卷轴附魔成功了！查看一下你的武器吧。\r\n\r\n";
			text += "#i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k的属性得到如下强化：\r\n";
			if (isWatk) {
				text += "#r◆攻击力 #k- " + item.getPAD() + "#e -> " + (item.getPAD() + bonus[0]) + "#g\t↑" + bonus[0] + "#n#k\r\n";
			} else {
				text += "#r◆魔法力 #k- " + item.getMAD() + "#e -> " + (item.getMAD() + bonus[0]) + "#g\t↑" + bonus[0] + "#n#k\r\n";
			}
			text += "#b◇ 力量  #k- " + item.getStr() + "#e -> " + (item.getStr() + bonus[1]) + "#g\t↑" + bonus[1] + "#n#k\r\n";
			text += "#b◇ 敏捷  #k- " + item.getDex() + "#e -> " + (item.getDex() + bonus[2]) + "#g\t↑" + bonus[2] + "#n#k\r\n";
			text += "#b◇ 智力  #k- " + item.getInt() + "#e -> " + (item.getInt() + bonus[3]) + "#g\t↑" + bonus[3] + "#n#k\r\n";
			text += "#b◇ 幸运  #k- " + item.getLuk() + "#e -> " + (item.getLuk() + bonus[4]) + "#g\t↑" + bonus[4] + "#n#k\r\n";
			var toDrop = item.copy();
			toDrop.setCUC(mat); //砸卷
			if (isWatk) { // 区分物攻魔攻
				toDrop.setPAD(toDrop.getPAD() + bonus[0]);
			} else {
				toDrop.setMAD(toDrop.getMAD() + bonus[0]);
			}
			toDrop.setStr(toDrop.getStr() + bonus[1]);
			toDrop.setDex(toDrop.getDex() + bonus[2]);
			toDrop.setInt(toDrop.getInt() + bonus[3]);
			toDrop.setLuk(toDrop.getLuk() + bonus[4]);
			cm.removeSlot(1, 1, 1);
			cm.addFromDrop(cm.getClient(), toDrop, false);
		} else {
			text = "#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n";
		}
		cm.askMenu(text);
		cm.dispose(); // 结束
	} else {
		cm.dispose(); // 结束
	}
}

function 潜能激活() {
	var item = cm.getInventory(1).getItem(1);
	var mat = (item.getCHUC() + 1);
	// 潜能激活菜单
	if (status == 1) {
		text = "#k只有足够强大的魔方#v" + 潜能魔方材料[0] + "#或#v" + 潜能魔方材料[1] + "#才能激活创世武器的潜能，因此激活后也必定会拥有S级至SS级的潜在能力。\r\n";
		text += "星之力强化阶数越高，激活SS级潜能的可能性越高，但是需要的材料也更多。\r\n";
		text += "#k#e┌\t\t      ─ " + "#v5062103#" + "潜能激活 ─  \t\t  ┐#n\r\n\r\n";
		text += "#k激活 #i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k 的潜在能力需要材料：\r\n";
		text += "#v" + 通用强化材料 + "#" + "#b#z" + 通用强化材料 + "##e #k× " + mat + " / #n现有 #c" + 通用强化材料 + "# 个\r\n";
		text += "#L101#" + "#v" + 潜能魔方材料[0] + "#" + "#b『激活潜在能力』#l\r\n";
		text += "#b#z" + 潜能魔方材料[0] + "##e #k× " + mat + " / #n现有 #c" + 潜能魔方材料[0] + "# 个\r\n";
		text += "#L102#" + "#v" + 潜能魔方材料[1] + "#" + "#d『激活附加潜能』#l\r\n";
		text += "#d#z" + 潜能魔方材料[1] + "##e #k× " + mat + " / #n现有 #c" + 潜能魔方材料[1] + "# 个\r\n";
		text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
		cm.askMenu(text);
		// 潜能激活具体
	} else if (status == 2) {
		var isBonus = selectionLog[2] == 102;
		var isWatk = item.getPAD() > item.getMAD();
		var cube = isBonus ? 潜能魔方材料[0] : 潜能魔方材料[1];
		if (cm.haveItem(cube, mat) && cm.haveItem(通用强化材料, mat)) {
			cm.gainItem(cube, -mat);
			cm.gainItem(通用强化材料, -mat);
			text = "#k潜能激活成功了！查看一下你的武器吧。\r\n\r\n";
			var toDrop = item.copy();
			toDrop.setOption(randomPot(isBonus, mat, isWatk), 1, isBonus);
			toDrop.setOption(Math.random() < (0.25 + mat / 400) ? toDrop.getOption(1, isBonus) : randomPot(isBonus, mat, isWatk), 2, isBonus);
			toDrop.setOption(Math.random() < (0.1 + mat / 1000) ? toDrop.getOption(1, isBonus) : randomPot(isBonus, mat, isWatk), 3, isBonus);
			cm.removeSlot(1, 1, 1);
			cm.addFromDrop(cm.getClient(), toDrop, false);
		} else {
			text = "#k你的材料不够啊。再去收集一些吧，强化武器可是非常重要的事情。\r\n\r\n";
		}
		cm.askMenu(text);
		cm.dispose(); // 结束
	} else {
		cm.dispose(); // 结束
	}
}

function randomPot(isBonus, level, isWatk) {
	var potentials = SS潜能通用.concat(isWatk ? SS潜能攻击 : SS潜能魔攻);
	if (isBonus)
		potentials = potentials.concat(SS潜能主);
	if (Math.random() > 0.5 + level / 200)
		potentials = potentials.concat(S潜能通用);
	return potentials[Math.floor(Math.random() * potentials.length)];
}

function endTalk(text, lastWord) {
	text += lastWord;
	text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
	cm.askMenu(text);
	cm.dispose(); // 结束
}
