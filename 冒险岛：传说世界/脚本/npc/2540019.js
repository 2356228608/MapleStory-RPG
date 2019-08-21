/*
 *  起源之塔排名公告栏
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
// 材料
var 通用强化材料 = 4001878;

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
			起源之塔探险排名();
			break;
		case 2:
			我探险到的最深层();
			break;
		default:
			cm.askMenu("啊你说什么？没听清楚。");
			cm.dispose(); // 结束
			break;
		}
	}
}

function 对话首页() {
	var text = "\r\n#e[起源之塔排名公告栏]#n\r\n\r\n";
	text += "#b#L1#起源之塔探险排名\r\n#l";
	text += "#b#L2#我探险到的最深层\r\n#l";
	cm.askMenu(text);
}

function 起源之塔探险排名() {
	var text = "\r\n#e[起源之塔探险排名]#n\r\n\r\n";
	text += "#b[排名]\t\t[昵称]\t\t[层数]\t\t[剩余时间]#k\r\n";
	var topRank = getTopRank();
	if (topRank == null || topRank.length == 0) {
		text += "#e==#n #b目前起源之塔暂时还没有人挑战。#k #e=="
	} else {
		for (var i = 0; i < topRank.length; i++) {
			text += "#e[" + (i + 1) + "]#n\t\t" + topRank[i][0] + "\t\t" + topRank[i][1] + "层\t\t\t" + toTime(topRank[i][2]) + "\r\n";
		}
	}
	cm.askMenu(text);
	cm.dispose(); // 结束
}

function 我探险到的最深层() {
	var text = "\r\n#e[探险记录]#n\r\n\r\n";
	var myInfo = getMyInfo();
	if (myInfo == null || myInfo.length == 0) {
		text += "#e--#n #b目前还没有任何探险记录。#k #e--"
	} else {
		text += "#e#b[最深层数]#k#n " + myInfo[0][0] + "层\t#e#b[时间] #k#n" + toTime(myInfo[0][1]);
	}
	cm.askMenu(text);
	cm.dispose(); // 结束
}

// 时间转换
function toTime(time) {
	var hours = parseInt((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = parseInt((time % (1000 * 60)) / 1000);
	var h = (hours >= 10 ? hours : '0' + hours) + ':';
	var m = (minutes >= 10 ? minutes : '0' + minutes) + ':';
	var s = (seconds >= 10 ? seconds : '0' + seconds);
	return h + m + s;
}

// 搜索全体 TOP10
function getTopRank() {
	var conn = cm.getConnection();
	var ps = conn.prepareStatement("SELECT `charactername`,`maxlevel`,`time` FROM `oz_tower` ORDER BY `maxlevel` DESC, `time` ASC LIMIT 10;");
	var resultSet = ps.executeQuery();
	var topRank = new Array();
	while (resultSet.next()) {
		topRank.push([resultSet.getString(1), resultSet.getInt(2), resultSet.getInt(3)]);
	}
	resultSet.close();
	ps.close();
	conn.close();
	return topRank;
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
