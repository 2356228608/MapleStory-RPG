var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择
var tier = ["初级", "中级", "高级", "资深", "精英", "大师"];
var reward = [2450141, 5], [2023654, 5], [2023672, 5], [2436078, 5], [2435924, 1], [2434921, 1], [2434288, 5], [4001864, 5], [2434917, 5], [2630181, 50], [1712001, 10], [1712002, 10], [1712003, 10], [1712004, 10], [1712005, 10], [1712006, 10];

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;
	var data = getData(qm, 100114, ["time", "reward", "finished"]);
	var rewardLeft = parseInt(data[1][1]);

	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		var info = qm.getInfoQuest(100161);
		if (info == null || info.length < 4) {
			var level = 1;
			qm.updateInfoQuest(100161, "lv=1");
		} else {
			var level = parseInt(info.substr(3));
		}
		var text = "#b#e<大冒险等级>每周奖励！#n#k\r\n\r\n- 当前<大冒险等级>：#b" + tier[level - 1] + "（" + (7 - level) + "级）#k\r\n#r（每周奖励从中级（5级）以上开始可以获得）#k\r\n#L1# #b查看<大冒险等级>每周奖励列表#l#k";
		if (!isSameWeek(new Date().getTime(), Number(data[0][1]))) {
			data[0][1] = new Date().getTime();
			data[1][1] = level;
			rewardLeft = data[1][1];
			qm.saveData(qm, 100114, data);
		}
		if (rewardLeft > 0) {
			text += "\r\n\r\n#b※ 本周还可以领取 #e" + rewardLeft + "#n 件奖励#n\r\n#b";
		} else {
			text += "\r\n\r\n#b※ 需要等到下星期才能再次领取<大冒险等级>的每周奖励#k";
		}
		qm.askMenu(text, 9062143);
	} else if (status === i++) {
		var text = "\r\n#e<大冒险等级>每周奖励列表#n\r\n#b";
		if (rewardLeft > 0) {
			text += "\r\n#b※ 本周还可以领取 #e" + rewardLeft + "#n 件奖励#n\r\n#b";
		}
		reward.forEach(function (e, index) {
			text += "\r\n  ";
			if (rewardLeft > 0)
				text += "#L" + index + "#";
			text += "#i" + e[0] + ":#  #t" + e[0] + ":# " + e[1] + "个";
			if (rewardLeft > 0)
				text += "#l";
		});
		qm.sendOk(text, 9062143);
	} else if (status === i++) {
		var text = "恭喜！这是你的奖励！";
		text += "\r\n  #i" + reward[selection][0] + ":#  #t" + reward[selection][0] + ":# " + reward[selection][1] + "个";
		qm.sendOk(text, 9062143);
		qm.gainItem(reward[selection][0], reward[selection][1]);
		data[1][1] = parseInt(data[1][1]) - 1;
		qm.saveData(qm, 100114, data);
	} else {
		qm.dispose();
	}
}

function isSameWeek(old, now) {
	var oneDayTime = 1000 * 60 * 60 * 24;
	var old_count = parseInt(+old / oneDayTime);
	var now_other = parseInt(+now / oneDayTime);
	return parseInt((old_count + 4) / 7) == parseInt((now_other + 4) / 7);
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
