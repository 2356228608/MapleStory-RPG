var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

var itemIcon = "#fUI/Basic.img/Cursor/32/0#";
// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.askMenu("不知道今天水晶球里会出现什么。\r\n\r\n#b#L0#我想知道最近正在进行的活动。#l", 9010010);
	} else if (status === i++) {
		// 读取新闻
		var str = cm.getrizhi();
		var logs = str.split("\n"); //以逗号作为分隔字符串
		var text1 = "";
		for (var i = 0; i < logs.length; i++) {
			if (logs[i].indexOf("更新日志") > 0) {
				text1 += itemIcon + "#k#e" + logs[i] + "\r\n";
			} else {
				text1 += "#k#n" + logs[i].replace("[主题副本]", "#e#b[#n主题副本#e]#n#k").replace("修复", "#r修复#k").replace("更新", "#g更新#k").replace("添加", "#g添加#k") + "\r\n";
			}
		}
		cm.sendOk(text1, 2140003);
	} else if (status == i++) {
		cm.dispose();
	}
}
