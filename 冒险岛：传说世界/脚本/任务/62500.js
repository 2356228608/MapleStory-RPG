var status = -1;
var itemIcon = "#fUI/Basic.img/Cursor/32/0#";

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.askYesNo("确定要去查看冒险岛新闻吗？");
	} else if (status === i++) {
		// 读取新闻
		var str = qm.getrizhi();
		var logs = str.split("\n"); //以逗号作为分隔字符串
		var text1 = "";
		for (var i = 0; i < logs.length; i++) {
			if (logs[i].indexOf("更新日志") > 0) {
				text1 += itemIcon+"#k#e" + logs[i] + "\r\n";
			} else {
				text1 += "#k#n" + logs[i].replace("[主题副本]","#e#b[#n主题副本#e]#n#k").replace("修复","#r修复#k").replace("更新","#g更新#k").replace("添加","#g添加#k") + "\r\n";
			}
		}
		qm.sendOk(text1, 2140003);
	} else if (status === i++) {
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.dispose();
	}
}
