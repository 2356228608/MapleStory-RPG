var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.askAcceptDecline("请帮我清理玫瑰花园吧！\r\n\r\n#e玫瑰花园：每日任务#n\r\n - 消灭普通怪物：3分\n - 绽放玫瑰花/解放灵魂：10分\n - 消灭黄金蜜蜂：25分\n - 消灭城堡石头人王：50分\r\n#r目标分数：300分#k");
	} else if (status == i++) {
		qm.sendOk("谢谢你，这次先完成#r目标分数：300分#k吧！");
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.askAcceptDecline("真是太感谢你了！不过好像玫瑰花园还没完全清理干净，能再帮我一个忙吗？");
	} else if (status == i++) {
		qm.sendOk("谢谢你，这次先完成#r目标分数：500分#k吧！");
	} else if (status == i++) {
		qm.gainItem(2432206, 1);
		qm.dispose();
		qm.forceCompleteQuest();
		qm.forceStartQuest(31045);

		var data = getData(qm, 31035, ["score", "total"]);
		data[0][1] = 0;
		data[1][1] = parseInt(data[1][1]) + 5;
		saveData(qm, 31035, data);
	}
}

function getData(manager, quest, name) {
	var str = manager.getInfoQuest(quest);
	var data = new Array();
	for (var i = 0; i < name.length; i++) {
		data.push([name[i], "0"]);
	}
	if (str == null)
		return;
	str.split(";").forEach(function (e, i) {
		if (e.length <= 1) {
			return;
		}
		var v = e.split("=");
		if (typeof(v) == "undefined" || v.length != 2)
			return;
		data[i][1] = isNaN(v[1]) ? 0 : v[1];
	});
	return data;
}

function saveData(manager, quest, data) {
	var str = "";
	data.forEach(function (e, i) {
		str += e[0] + "=" + e[1] + ((i < data.length - 1) ? ";" : "");
	});
	manager.updateInfoQuest(quest, str);
}
