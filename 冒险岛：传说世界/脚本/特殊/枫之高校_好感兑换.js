/*
 *  枫之高校_好感图腾
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
// 材料
var 好感材料 = 3800452;
var 好感图标 = 3800453;
// UI图片
var z = "#fEffect/ItemEff/1112811/0/0#"; //"+z+"//美化
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var itemIcon = "#fUI/Basic.img/Cursor/32/0#";
var itemBorder = "#fUI/UIWindow.img/Item/New/inventory/0#";
// 好感菜单
var totem = [[1202026, 1202025, 1202024, 1202023], [1202030, 1202029, 1202028, 1202027], [1202034, 1202033, 1202032, 1202031], [1202038, 1202037, 1202036, 1202035]];
// 好感度等级要求，够了才能解锁高级商店
var likeReq = [500, 1000, 2000, 3000, 4000];
// 好感商店
var shop = [[[1202026, 500, 500000], [1202025, 1000, 1000000], [1202024, 2000, 10000000], [1202023, 3000, 100000000], [1202042, 4000, 150000000], [1202086, 5000, 200000000]],
	[[1202030, 500, 500000], [1202029, 1000, 1000000], [1202028, 2000, 10000000], [1202027, 3000, 100000000], [1202041, 4000, 150000000], [1202085, 5000, 200000000]],
	[[1202034, 500, 500000], [1202033, 1000, 1000000], [1202032, 2000, 10000000], [1202031, 3000, 100000000], [1202040, 4000, 150000000], [1202084, 5000, 200000000]],
	[[1202038, 500, 500000], [1202037, 1000, 1000000], [1202036, 2000, 10000000], [1202035, 3000, 100000000], [1202039, 4000, 150000000], [1202083, 5000, 200000000]]
];

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
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	// 初次对话
	if (status == 0) {
		好感菜单();
	} else {
		if (selectionLog[1] < 4) {
			提升好感();
		} else {
			兑换收藏();
		}
	}
}

function 好感菜单() {
	// 格式： 1;2;3;4
	var info = cm.getInfoQuest(52367);
	var likes = info ? info.split(';').map(function (item) {
			return parseInt(item, 10);
		}) : [0, 0, 0, 0];
	var likeLevel = getLikeLevel(likes, likeReq);
	text = "这里存放着四大天王珍藏的绝版图腾。但是只要与他们好感度提升到一定程度，就可以以巨资说服他们忍痛割爱了。\r\n\r\n如何提升#r#i" + 好感材料 + "#好感#k呢？自然是战斗了！友谊只有在对决中才能得到提升。\r\n\r\n";
	text += "#k#e┌\t\t        ─ " + "#b枫之高校 ─     \t\t     ┐#n\r\n\r\n";
	text += "    ";
	for (var i = 0; i < 4; i++) {
		text += "#i" + totem[i][Math.min(3, Math.max(0, likeLevel[i] - 1))] + "#\t\t";
	}
	text += "\r\n\t  ";
	text += "乔\t\t 海丽蜜\t\t   小龙\t\t    李卡司";
	text += "\r\n";
	var lens = [likes[0].toString().length, likes[1].toString().length, likes[2].toString().length, likes[3].toString().length];
	for (var i = 0; i < Math.max(0, 4 - Math.floor(lens[0] / 2)); i++)
		text += ' ';
	text += "#i" + 好感材料 + "# " + likes[0];
	for (var i = 0; i < 10 - Math.floor(lens[0] / 2) - lens[0] % 2 - Math.floor(lens[1] / 2); i++)
		text += ' ';
	text += "#i" + 好感材料 + "# " + likes[1];
	for (var i = 0; i < 10 - Math.floor(lens[1] / 2) - lens[1] % 2 - Math.floor(lens[2] / 2); i++)
		text += ' ';
	text += "#i" + 好感材料 + "# " + likes[2];
	for (var i = 0; i < 10 - Math.floor(lens[2] / 2) - lens[2] % 2 - Math.floor(lens[3] / 2); i++)
		text += ' ';
	text += "#i" + 好感材料 + "# " + likes[3];
	text += "\r\n";
	for (var i = 0; i < 4; i++) {
		text += "#b#L" + i + "#提升好感#l  ";
	}
	text += "\r\n";
	for (var i = 4; i < 8; i++) {
		text += "#r#L" + i + "#兑换收藏#l  ";
	}
	text += "#k#e\r\n\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
	cm.askMenu(text);
}

function 提升好感() {
	// 格式： 1;2;3;4
	var info = cm.getInfoQuest(52367);
	var likes = info ? info.split(';').map(function (item) {
			return parseInt(item, 10);
		}) : [0, 0, 0, 0];
	var likeLevel = getLikeLevel(likes, likeReq);

	if (status == 1) {
		text = "\r\n";
		text += "#k#e┌\t\t        ─ " + "#b提升好感 ─     \t\t     ┐#n\r\n\r\n";
		text += "   ";
		for (var i = 0; i < 4; i++) {
			if (i == selectionLog[1]) {
				text += "#i" + totem[i][Math.min(3, Math.max(0, likeLevel[i] - 1))] + "#\t\t";
			} else {
				text += itemBorder + "\t\t";
			}
		}
		text += "\r\n\t  ";
		text += "乔\t\t 海丽蜜\t\t   小龙\t\t    李卡司";
		text += "\r\n";
		var lens = [likes[0].toString().length, likes[1].toString().length, likes[2].toString().length, likes[3].toString().length];
		for (var i = 0; i < Math.max(0, 4 - Math.floor(lens[0] / 2)); i++)
			text += ' ';
		text += "#i" + (0 == selectionLog[1] ? 好感材料 : 好感图标) + "# " + likes[0];
		for (var i = 0; i < 10 - Math.floor(lens[0] / 2) - lens[0] % 2 - Math.floor(lens[1] / 2); i++)
			text += ' ';
		text += "#i" + (1 == selectionLog[1] ? 好感材料 : 好感图标) + "# " + likes[1];
		for (var i = 0; i < 10 - Math.floor(lens[1] / 2) - lens[1] % 2 - Math.floor(lens[2] / 2); i++)
			text += ' ';
		text += "#i" + (2 == selectionLog[1] ? 好感材料 : 好感图标) + "# " + likes[2];
		for (var i = 0; i < 10 - Math.floor(lens[2] / 2) - lens[2] % 2 - Math.floor(lens[3] / 2); i++)
			text += ' ';
		text += "#i" + (3 == selectionLog[1] ? 好感材料 : 好感图标) + "# " + likes[3];
		text += "#k#e\r\n\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
		var item = cm.getItemQuantity(好感材料);
		if (item > 0) {
			text += "\r\n要提升多少#r#i" + 好感材料 + "#好感#k呢？";
			cm.askNumber(text, 1, 1, item);
		} else {
			text += "\r\n但是身上没有任何的#r#i" + 好感材料 + "#好感#k，无法提升好感度。";
			cm.sendOk(text);
			cm.dispose();
		}
	} else if (status == 2) {
		text = "\r\n\r\n#r#i" + 好感材料 + "#好感#k提升成功了！";
		cm.sendOk(text);
	} else {
		cm.gainItem(好感材料, -selectionLog[2]);
		likes[selectionLog[1]] += selectionLog[2];
		cm.updateInfoQuest(52367, likes[0] + ";" + likes[1] + ";" + likes[2] + ";" + likes[3]);
		cm.dispose();
	}
}

function 兑换收藏() {
	// 格式： 1;2;3;4
	var info = cm.getInfoQuest(52367);
	var likes = info ? info.split(';').map(function (item) {
			return parseInt(item, 10);
		}) : [0, 0, 0, 0];
	var likeLevel = getLikeLevel(likes, likeReq);

	if (status == 1) {
		text = "\r\n";
		text += "#k#e┌\t\t        ─ " + "#b提升好感 ─     \t\t     ┐#n\r\n\r\n";
		text += "   ";
		for (var i = 0; i < 4; i++) {
			if (i == selectionLog[1]) {
				text += "#i" + totem[i][Math.min(3, Math.max(0, likeLevel[i] - 1))] + "#\t\t";
			} else {
				text += itemBorder + "\t\t";
			}
		}
		text += "\r\n\t  ";
		text += "乔\t\t 海丽蜜\t\t   小龙\t\t    李卡司";
		text += "\r\n";
		var lens = [likes[0].toString().length, likes[1].toString().length, likes[2].toString().length, likes[3].toString().length];
		for (var i = 0; i < Math.max(0, 4 - Math.floor(lens[0] / 2)); i++)
			text += ' ';
		text += "#i" + (0 == selectionLog[1] ? 好感材料 : 好感图标) + "# " + likes[0];
		for (var i = 0; i < 10 - Math.floor(lens[0] / 2) - lens[0] % 2 - Math.floor(lens[1] / 2); i++)
			text += ' ';
		text += "#i" + (1 == selectionLog[1] ? 好感材料 : 好感图标) + "# " + likes[1];
		for (var i = 0; i < 10 - Math.floor(lens[1] / 2) - lens[1] % 2 - Math.floor(lens[2] / 2); i++)
			text += ' ';
		text += "#i" + (2 == selectionLog[1] ? 好感材料 : 好感图标) + "# " + likes[2];
		for (var i = 0; i < 10 - Math.floor(lens[2] / 2) - lens[2] % 2 - Math.floor(lens[3] / 2); i++)
			text += ' ';
		text += "#i" + (3 == selectionLog[1] ? 好感材料 : 好感图标) + "# " + likes[3];

		text += "\r\n\r\n我们已经是这么熟悉的好朋友了，想必换取这些真贵的图腾收藏，他们也一定会同意的吧？！\r\n";
		shop[selectionLog[1]].forEach(function (e, index) {
			text += "#L" + index + "##b#i" + e[0] + "##z" + e[0] + "# · #r#i" + ((likes[selectionLog[1]] > e[1]) ? 好感材料 : 好感图标) + "#" + e[1] + "#k · 需要金币 #e" + e[2] + "#l\r\n";
		});
		text += "#k#e\r\n\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
	} else if (status == 2) {
		if (cm.getPlayer().getMeso() >= 800) {
			cm.gainMeso(-800);
			cm.sendOk("我们马上就要开船了。上来吧！");
		} else {
			cm.sendOk("船费是800金币，有足够的金币在来找我吧。");
			cm.dispose();
		}
		text = "\r\n\r\n#r#i" + 好感材料 + "#好感#k提升成功了！";
		cm.sendOk(text);
	} else {
		cm.gainItem(好感材料, -selectionLog[2]);
		likes[selectionLog[1]] += selectionLog[2];
		cm.updateInfoQuest(52367, likes[0] + ";" + likes[1] + ";" + likes[2] + ";" + likes[3]);
		cm.dispose();
	}
}

function getLikeLevel(value, goal) {
	var res = new Array();
	value.forEach(function (e) {
		for (var i = 0; i < goal.length; i++) {
			if (e < goal[i]) {
				res.push(Math.max(0, i));
				return;
			}
		}
		res.push(goal.length - 1);
	});
	return res;
}
