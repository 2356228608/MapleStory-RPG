var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;
	var data = getData(cm, 18838, ["count", "stageT", "hack", "stage", "mode"]);
	var pass = parseInt(data[3][1]);
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.askMenu("在#b<操作之神>#k中展现你的#e#b韧性#k#n吧！\r\n\r\n在<操作之神>中#b通关20关以上#k，可以获得#b#t2630132:##k！\r\n\r\n#e[通关关数]#n\r\n#b" + pass + " / 20关#k\r\n\r\n#e[通关20关以上奖励]#n\r\n#b#i2630132:# #t2630132:##k\r\n\r\n#b#L0# 查看每周通关记录详情#k#l", 9062148);
	} else if (status === i++) {
		var text = "#e[通关记录]#n\r\n\r\n通关：" + pass + "关";
		var info = qm.getInfoQuest(500651);
		if (pass < 20) {
			text += "#r（未达成）#k\r\n";
		} else if (info == null || info.index("clear") < 0) {
			qm.gainItem(2630132, 1);
			text += "#g（已达成）#k\r\n";
			text += "\r\n恭喜你通过了#b操作之神20关#k！这是你的奖励！";
			text += "\r\n#i2630132:# #t2630132:#";
		} else {
			text += "#b（已领取）#k\r\n";
			text += "\r\n你已经领取过奖励了哦。";
		}
		qm.sendOk(text, 9062148);
	} else if (status == i++) {
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

function getData(manager, quest, name) {
	var str = manager.getInfoQuest(quest);
	var data = new Array();
	for (var i = 0; i < name.length; i++) {
		data.push([name[i], " 0 "]);
	}
	if (str == null)
		return;
	str.split(";
		").forEach(function (e, i) {
		if (e.length <= 1) {
			return;
		}
		var v = e.split(" = ");
		if (typeof(v) == " undefined " || v.length != 2)
			return;
		data[i][1] = isNaN(v[1]) ? 0 : v[1];
	});
	return data;
}

function saveData(manager, quest, data) {
	var str = " ";
	data.forEach(function (e, i) {
		str += e[0] + " = " + e[1] + ((i < data.length - 1) ? ";
			" : " ");
	});
	manager.updateInfoQuest(quest, str);
}
