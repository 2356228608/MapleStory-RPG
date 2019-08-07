/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var NPC = 2540000;
var timeBonus = [2 * 60 * 1000, 4 * 60 * 1000, 8 * 60 * 1000, 13 * 60 * 1000, 16 * 60 * 1000, 2 * 60 * 1000, 4 * 60 * 1000, 6 * 60 * 1000, 8 * 60 * 1000, 10 * 60 * 1000];
var mapHall = 992000000;
// UI
var itemBorder = "#fUI/UIWindow.img/Item/New/inventory/0#";
var lock = "#v2200001#";

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var item = cm.getNpc();
	if (cm.haveItem(item, 1) && item >= 2432438 && item <= 2432447) {
		if (cm.getMapId() != 992000000) {
			var text = "朦胧石只能在#b起源之塔大厅#k装备才能生效。在其他地方我无法转换它们的力量。\r\n\r\n";
			cm.askMenu(text, NPC);
		} else {
			addStone(item);
		}
	}
	cm.dispose();
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

// 创建MYSQL表
function createTable() {
	var conn = cm.getConnection();
	var ps = conn.prepareStatement("CREATE TABLE IF NOT EXISTS `oz_tower` ("
			 + "`characterid` int(11) NOT NULL DEFAULT '0' COMMENT '角色ID',"
			 + "`charactername` varchar(100) NOT NULL DEFAULT '无名' COMMENT '角色名称',"
			 + "`maxlevel` int(11) NOT NULL DEFAULT '0' COMMENT '最佳纪录通过层数',"
			 + "`time` int(11) NOT NULL DEFAULT '0' COMMENT '最佳纪录通过时间',"
			 + "`slots` int(11) NOT NULL DEFAULT '1' COMMENT '朦胧石栏位数量',"
			 + "`slot_stone_1` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.1',"
			 + "`slot_stone_2` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.2',"
			 + "`slot_stone_3` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.3',"
			 + "`slot_stone_4` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.4',"
			 + "`slot_stone_5` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.5',"
			 + "PRIMARY KEY (`characterid`)" + ") ;");
	ps.executeUpdate();
	ps.close();
	conn.close();
}

// 添加朦胧石
function addStone(item) {
	var stones = getStone();
	if (stones == null || stones.length == 0) {
		var slotForStone = 1;
	} else {
		var maxSlots = stones[0][0];
		var slotForStone = 0;
		for (var i = 1; i <= maxSlots; i++) {
			if (stones[0][i] == 0) {
				slotForStone = i;
				break;
			}
		}
		if (slotForStone == 0) {
			var text = "朦胧石栏位已经都装满了，无法再装备更多朦胧石。\r\n\r\n";
			text = 查看朦胧石(text, stones, maxSlots);
			cm.askMenu(text, NPC);
			return;
		}
	}
	// 更新栏位
	stones[0][slotForStone] = item;
	updateStones(stones[0]);
	var text = "成功装备上了#b#v" + item + "##z" + item + "##k。目前朦胧石栏位为：\r\n\r\n";
	text = 查看朦胧石(text, stones, maxSlots);
	cm.askMenu(text, NPC);
	cm.gainItem(item, -1);
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
	// 先检查一遍创建了没
	createTable();

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

// 更新石头，注意输入index有效值为1~5
function updateStones(stones) {
	// 先检查一遍创建了没
	createTable();

	var sql = "INSERT INTO `oz_tower`(`characterid`,`charactername`";
	for (var i = 1; i <= 5; i++) {
		if (stones[i] > 0) {
			sql += ",`slot_stone_" + i + "`";
		}
	}
	sql += ") VALUES(" + cm.getPlayer().getId() + ",'" + cm.getPlayer().getName() + "'";
	for (var i = 1; i <= 5; i++) {
		if (stones[i] > 0) {
			sql += "," + stones[i];
		}
	}
	sql += ") ON DUPLICATE KEY UPDATE `charactername`=VALUES(charactername) ";
	for (var i = 1; i <= 5; i++) {
		if (stones[i] > 0) {
			sql += ",`slot_stone_" + i + "`=VALUES(" + "slot_stone_" + i + ")";
		}
	}
	sql += ";";
	var conn = cm.getConnection();
	var ps = conn.prepareStatement(sql);
	ps.executeUpdate();
	ps.close();
	conn.close();
}
