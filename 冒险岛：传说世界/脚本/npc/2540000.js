/*
 *  阿丽莎的思念体
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
var timeBonus = [2 * 60 * 1000, 4 * 60 * 1000, 8 * 60 * 1000, 13 * 60 * 1000, 16 * 60 * 1000, 2 * 60 * 1000, 4 * 60 * 1000, 6 * 60 * 1000, 8 * 60 * 1000, 10 * 60 * 1000];
// 材料
var 通用强化材料 = 4036455;
var 朦胧石升级消耗 = [8000, 28000, 55000, 80000];
// UI
var itemBorder = "#fUI/UIWindow.img/Item/New/inventory/0#";
var lock = "#v2200001#";

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
			扩展朦胧石栏位();
			break;
		case 2:
			灵魂连接器();
			break;
		case 3:
			查看排行榜();
			break;
		default:
			cm.askMenu("啊你说什么？没听清楚。");
			cm.dispose(); // 结束
			break;
		}
	}
}

function 对话首页() {
	var text = "有什么可以帮你的吗？\r\n\r\n";
	text += "#L1##b我想扩展我的朦胧石栏位\r\n#l";
	text += "#L2##b我弄丢了我的灵魂连接器\r\n#l";
	text += "#L3##b我想查看起源之塔排行榜#l";
	cm.askMenu(text);
}

function 扩展朦胧石栏位() {
	var myInfo = getMyInfo();
	var slots = (myInfo == null || myInfo.length == 0) ? 1 : myInfo[0][2];
	var stones = getStone();
	if (status == 1) {
		var text = "你现在已经开启了 #b" + slots + "个 #k朦胧石栏位。\r\n\r\n";
		text = 查看朦胧石(text, stones, slots);
		if (slots == 5) {
			text += "因为力量的限制，这已经是我能为你开启的最大数量的栏位了。相信这些也足够你挑战到最后一层了吧。";
			cm.askMenu(text);
			cm.dispose(); // 结束
		} else {
			text += "\r\n\r\n想要开启下一个栏位，需要消耗#r由起源点数转换成的#k：\r\n";
			text += "#v" + 通用强化材料 + "##b#z" + 通用强化材料 + "##e #k× " + 朦胧石升级消耗[slots - 1] + " / #n现有 #c" + 通用强化材料 + "# 个\r\n\r\n";
			cm.askYesNo(text);
		}
	} else if (status == 2) {
		if (cm.haveItem(通用强化材料, 朦胧石升级消耗[slots - 1])) {
			var count = 朦胧石升级消耗[slots - 1];
			while (count > 30000) {
				cm.gainItem(通用强化材料, -30000);
				count -= 30000;
			}
			cm.gainItem(通用强化材料, -朦胧石升级消耗[slots - 1]);
			updateMyInfo(-1, -1, slots + 1);
			text = "朦胧石栏位扩充成功了！现在你有 #b" + (slots + 1) + "个 #k朦胧石栏位了。\r\n\r\n";
			text = 查看朦胧石(text, stones, slots + 1);
		} else {
			text = "#k怎么回事？你的#v" + 通用强化材料 + "##b#z" + 通用强化材料 + "##k不够啊。\r\n\r\n";
		}
		cm.askMenu(text);
		cm.dispose(); // 结束
	} else {
		cm.dispose(); // 结束
	}
}

function 灵魂连接器() {
	if (cm.haveItem(2432461, 1)) {
		var text = "#b灵魂连接器#k不是在你的包里吗？";
	} else {
		var text = "#b灵魂连接器#k可是很重要的东西。没有它在塔内我就无法和你联络了。这回一定要保管好！";
		cm.gainItem(2432461, 1);
	}
	cm.askMenu(text);
	cm.dispose(); // 结束
}

function 查看排行榜() {
	var text = "左边就是起源之塔的排行榜了。你去看看吧。\r\n\r\n";
	cm.askMenu(text);
	cm.dispose(); // 结束
}

// 时间转换
function toTime(time) {
	var hours = parseInt((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = (time % (1000 * 60)) / 1000;
	var h = (hours >= 10 ? hours : '0' + hours) + ':';
	var m = (minutes >= 10 ? minutes : '0' + minutes) + ':';
	var s = (seconds >= 10 ? seconds : '0' + seconds);
	return h + m + s;
}

// 搜索自己
function getMyInfo() {
	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT `maxlevel`,`time`,`slots` FROM `oz_tower` WHERE `characterid`=" + cm.getPlayer().getId() + " ;");
	var resultSet = ps.executeQuery();
	var myInfo = new Array();
	if (resultSet.next()) {
		myInfo.push([resultSet.getInt(1), resultSet.getInt(2), resultSet.getInt(3)]);
	}
	resultSet.close();
	ps.close();
	conn.close();
	return myInfo;
}

// 更新数据
function updateMyInfo(maxlevel, time, slots) {
	var sql = "INSERT INTO `oz_tower`(`characterid`,`charactername`";
	if (maxlevel > 0) {
		sql += ",`maxlevel`";
	}
	if (time > 0) {
		sql += ",`time`";
	}
	if (slots > 0) {
		sql += ",`slots`";
	}
	sql += ") VALUES(" + cm.getPlayer().getId() + ",'" + cm.getPlayer().getName() + "'";
	if (maxlevel > 0) {
		sql += "," + maxlevel;
	}
	if (time > 0) {
		sql += "," + time;
	}
	if (slots > 0) {
		sql += "," + slots;
	}
	sql += ") ON DUPLICATE KEY UPDATE `charactername`=VALUES(charactername) ";
	if (maxlevel > 0) {
		sql += ",`maxlevel`=VALUES(maxlevel)";
	}
	if (time > 0) {
		sql += ",`time`=VALUES(time)";
	}
	if (slots > 0) {
		sql += ",`slots`=VALUES(slots)";
	}
	sql += ";";
	var conn = cm.getConnection();
	var ps = conn.prepareStatement(sql);
	ps.executeUpdate();
	ps.close();
	conn.close();
}

function 查看朦胧石(text, stones, maxSlots) {
	var validTime = 10 * 60 * 1000;
	text += "   ";
	for (var i = 1; i <= maxSlots; i++) {
		var icon = (stones == null || stones.length == 0 || stones[0][i] == 0) ? itemBorder : ("#v" + stones[0][i] + "#");
		validTime += (stones == null || stones.length == 0 || stones[0][i] == 0) ? 0 : timeBonus[stones[0][i] - 2432438];
		text += "\t" + icon;
	}
	for (var i = maxSlots + 1; i <= 5; i++) {
		text += "\t" + lock;
	}
	text += "\r\n\t\t\t\t#e#b[可用时间] #k#n" + toTime(validTime);
	text += "\r\n\r\n";
	return text;
}

// 检查朦胧石
function getStone() {
	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT `slots`,`slot_stone_1`,`slot_stone_2`,`slot_stone_3`,`slot_stone_4`,`slot_stone_5` FROM `oz_tower` WHERE `characterid`=" + cm.getPlayer().getId() + " ;");
	var resultSet = ps.executeQuery();
	var myInfo = new Array();
	if (resultSet.next()) {
		myInfo.push([resultSet.getInt(1), resultSet.getInt(2), resultSet.getInt(3), resultSet.getInt(4), resultSet.getInt(5), resultSet.getInt(6)]);
	}
	resultSet.close();
	ps.close();
	conn.close();
	return myInfo;
}
