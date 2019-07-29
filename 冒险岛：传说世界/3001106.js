/*
 *  功能：超星强化
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
// 装备
var 创世武器 = [1212129, 1222122, 1232122, 1242139, 1242141, 1252106, 1262051, 1272040, 1282040, 1302355, 1312213, 1322264, 1332289, 1362149, 1372237, 1382274, 1402268, 1412189, 1422197, 1432227, 1442285, 1452266, 1462252, 1472275, 1482232, 1492245, 1522152, 1532157, 1542128, 1552130, 1582044, 1592022];
var 超越证明 = [1113056, 1032201, 1122259, 1012414, 1022195];
// 材料
var 通用强化材料 = 4001878;
var 升星材料 = 4036084;
var 超星强化材料 = [4036518, 4031466, 4001879, 4001890];
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
	星力注入();
}

function 星力注入() {
	var item = cm.getInventory(1).getItem(1);
	var level = item.getCHUC() + 1;
	var maxLevel = (超越证明.indexOf(item.getItemId()) > -1) || (创世武器.indexOf(item.getItemId()) > -1) ? 127 : cm.getReqLevel(item.getItemId());
	var increase = Math.max(1, (item.getCHUC() - 5) / equipTypeMult(item.getItemId()));
	var increaseSmall = Math.max(1, Math.floor((item.getCHUC() - 5) / 2 / equipTypeMult(item.getItemId())));
	var isPAD = item.getPAD() > item.getMAD();

	var star = Math.max(1, Math.floor(((item.getCHUC() + 1) * 3108 - 3000) / 1000));
	var ownShinyStar = cm.getItemQuantity(升星材料);
	var ownStar = Math.floor(cm.getItemQuantity(4001839) / 1000);

	if (status == 0) {
		text = "#k我可以帮助你一次性注入星之力到达下一个等级，突破#r25阶星之力#k的极限。\r\n\r\n";
		text += "#e#r#z" + item.getItemId() + "##n#k最高可以强化到#r" + maxLevel + "阶星之力#k。但是作为代价，你需要付出比一般装备所需更浓缩的星之力。\r\n\r\n";
		text += "#k只有由#b1000份#b#v4001839##k星星浓缩而成的#b#v" + 升星材料 + "#闪亮星星#k可以满足创世武器的要求。如果你还没来得及转换，我也可以帮你一并将背包里的星星浓缩成闪亮星星。\r\n\r\n";
		text += "#k#e┌\t\t       ─ " + "#v4031515#" + "#b超星强化 ─   \t\t  ┐#n\r\n\r\n";
		// 现金道具
		if (cm.isCash(item.getItemId())) {
			endTalk(text, "#k我无法为现金道具注入星力。\r\n");
			return;
		}
		// 创世
		if (创世武器.indexOf(item.getItemId()) > -1) {
			endTalk(text, "#k为#i" + item.getItemId() + "##r创世武器#k进行强化实在是超出我能力了。去神秘河的#b前哨基地#k那里找#b贝尔德#k问问吧。\r\n");
			return;
		}
		// 满级了
		if (level > maxLevel) {
			endTalk(text, "#k#i" + item.getItemId() + "#这把武器已经强化到" + tz13 + "#r" + maxLevel + "阶星之力#k了。我无法再给它注入更强大的力量。\r\n");
			return;
		}
		if (level <= 25) {
			endTalk(text, "#k#i" + item.getItemId() + "#这把武器现在只能进行标准的星力注入，还无法承受超星强化的力量。提升到#r25阶星之力#k之后再来找我吧。\r\n");
			return;
		}
		text += "#k提升 #i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k 为 " + tz13 + "#d" + (level - 1) + "#e->" + level + "#n星#e#g ↑1#n#k 需要材料：\r\n";
		text += "#v" + 升星材料 + "#" + "#b#z" + 升星材料 + "##e #k× " + star + " / #n现有 " + ownShinyStar + " + " + ownStar + " 个\r\n";
		text += "#v" + 通用强化材料 + "#" + "#b#z" + 通用强化材料 + "##e #k× " + level + " / #n现有 #c" + 通用强化材料 + "# 个\r\n";
		if (level > 25) {
			text += "#v" + 超星强化材料[0] + "##d#z" + 超星强化材料[0] + "##e #k× " + (level - 25) + " / #n现有 #c" + 超星强化材料[0] + "# 个\r\n";
		}
		if (level > 50) {
			text += "#v" + 超星强化材料[1] + "##d#z" + 超星强化材料[1] + "##e #k× " + (level - 50) + " / #n现有 #c" + 超星强化材料[1] + "# 个\r\n";
		}
		if (level > 75) {
			text += "#v" + 超星强化材料[2] + "##r#z" + 超星强化材料[2] + "##e #k× " + (level - 75) + " / #n现有 #c" + 超星强化材料[2] + "# 个\r\n";
		}
		if (level > 100) {
			text += "#v" + 超星强化材料[3] + "##r#z" + 超星强化材料[3] + "##e #k× " + (level - 100) + " / #n现有 #c" + 超星强化材料[3] + "# 个\r\n";
		}
		text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
		cm.askMenu(text);
	} else if (status == 1) {
		if ((ownShinyStar + ownStar) >= star && cm.haveItem(通用强化材料, level)
			 && (level <= 25 || cm.haveItem(超星强化材料[0], level - 25))
			 && (level <= 50 || cm.haveItem(超星强化材料[1], level - 50))
			 && (level <= 75 || cm.haveItem(超星强化材料[2], level - 75))
			 && (level <= 100 || cm.haveItem(超星强化材料[3], level - 100))) {
			if (ownShinyStar >= star) { // 闪耀星星足够
				cm.gainItem(升星材料, -star);
			} else { // 帮忙浓缩星星
				浓缩星星(star, ownShinyStar);
			}
			cm.gainItem(通用强化材料, -level);
			if (level > 25) {
				cm.gainItem(超星强化材料[0], -level + 25);
			}
			if (level > 50) {
				cm.gainItem(超星强化材料[1], -level + 50);
			}
			if (level > 75) {
				cm.gainItem(超星强化材料[2], -level + 75);
			}
			if (level > 100) {
				cm.gainItem(超星强化材料[3], -level + 100);
			}
			// 组装说明
			text = "#k升星成功了！查看一下你的武器吧。\r\n\r\n";
			text += "#i" + item.getItemId() + "##e#r#z" + item.getItemId() + "##n#k的属性得到如下强化：\r\n";
			if (isPAD) {
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
			if (isPAD) { // 区分物攻魔攻
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
			toDrop.setTitle(prefix + level + "阶");
			toDrop.setItemState(0);
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

function endTalk(text, lastWord) {
	text += lastWord;
	text += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
	cm.askMenu(text);
	cm.dispose(); // 结束
}

function equipTypeMult(id) {
	if (id >= 1210000 && id < 1600000) { // 武器
		return 1;
	} else if (id >= 1040000 && id < 1110000) { // 防具
		return 3;
	} else { // 首饰
		return 4;
	}
}
