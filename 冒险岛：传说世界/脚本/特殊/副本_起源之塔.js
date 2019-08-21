var status = 0;
// 名称
var eventType = "副本";
var eventName = "起源之塔";
// 难度等级
var difficulty = ["普通"];
// 限制等级
var minLevel = [140, 180]; //最低等级
var maxLevel = [999, 999]; //最高等级
// 限制人数
var minPlayers = 1;
var maxPlayers = 1;
// 怪物最大等级设置
var moblevel = 300;
// 副本开关 开启、true 关闭、false
var open = true;
// 配置文件名称
var eventname = ["Map_TowerOfOz"];
// 设置每日次数
var maxenter = [200, 200];
// 地图名称
var mapName = "起源之塔";
// 其他
var timeBonus = [2 * 60 * 1000, 4 * 60 * 1000, 8 * 60 * 1000, 13 * 60 * 1000, 16 * 60 * 1000, 2 * 60 * 1000, 4 * 60 * 1000, 6 * 60 * 1000, 8 * 60 * 1000, 10 * 60 * 1000];

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (status >= 1 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		var msg = "#b#e[" + mapName + "]#n\r\n\r\n";
		for (var i = 0; i < difficulty.length; i++) {
			var em = cm.getEventManager(eventname[i]);
			var prop = em == null ? null : em.getProperty("state");
			var state = (prop == null || prop.equals("0")) ? "#r空闲#k" : "#b占用#k";
			msg += "#k今天已探索#b" + difficulty[i] + "模式 #e" + cm.getPQLog(difficulty[i] + eventName) + " #n/ " + maxenter[i] + " 层\t\t状态：" + state + "\r\n";
		}
		for (var i = 0; i < difficulty.length; i++) {
			msg += "#L" + i + "#挑战" + difficulty[i] + "模式的" + eventName + "。（" + minLevel[i] + "级以上）#l\r\n";
		}
		cm.askMenu(msg);
	} else if (status == 1) {
		var em = cm.getEventManager(eventname[selection]);
		if (cm.getPQLog(difficulty[selection] + eventName) >= maxenter[selection]) {
			cm.sendOk("你今天的挑战层数已经用完了，请明天在来吧！");
			cm.dispose();
		} else if (em == null || open == false) {
			cm.askMenu("配置文件不存在,请联系管理员。");
			cm.dispose();
		} else if (cm.getParty() == null || !cm.isLeader() || cm.getParty().getMembers().size() != 1) { //判断组队
			cm.sendOk("你需要创建一个#b只有你一人的队伍#k才能进入。");
		} else {
			var prop = em.getProperty("state");
			if (prop == null || prop.equals("0")) {
				cm.setPQLog(difficulty[selection] + eventName);
				// 消耗朦胧石
				var stones = getStone();
				var validTime = 10 * 60 * 1000;
				for (var i = 1; i <= 5; i++) {
					validTime += (stones == null || stones.length == 0 || stones[0][i] == 0) ? 0 : timeBonus[stones[0][i] - 2432438];
				}
				em.setProperty("time", validTime);
				clearStones();
				em.startInstance(cm.getParty(), cm.getMap(), moblevel);
			} else {
				cm.askMenuS("看来已经有人在挑战" + eventName + "，去其他频道看看吧。");
			}
			cm.dispose();
		}
	} else if (status == 2) {
		cm.dispose();
	} else if (mode == 0) {
		cm.dispose();
	}
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

// 更新石头，注意输入index有效值为1~5
function clearStones() {
	var stones = [0, 0, 0, 0, 0, 0];
	var sql = "INSERT INTO `oz_tower`(`characterid`,`charactername`";
	for (var i = 1; i <= 5; i++) {
		sql += ",`slot_stone_" + i + "`";
	}
	sql += ") VALUES(" + cm.getPlayer().getId() + ",'" + cm.getPlayer().getName() + "'";
	for (var i = 1; i <= 5; i++) {
		sql += "," + stones[i];
	}
	sql += ") ON DUPLICATE KEY UPDATE `charactername`=VALUES(charactername) ";
	for (var i = 1; i <= 5; i++) {
		sql += ",`slot_stone_" + i + "`=VALUES(" + "slot_stone_" + i + ")";
	}
	sql += ";";
	var conn = cm.getConnection();
	var ps = conn.prepareStatement(sql);
	ps.executeUpdate();
	ps.close();
	conn.close();
}
