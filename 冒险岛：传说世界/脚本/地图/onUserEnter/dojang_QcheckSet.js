// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var eim = cm.getEventInstance();
	var em = eim.getEventManager();
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		var data = getData(cm, 3847, ["Time", "enter", "Floor", "Result"]);
		data[3][1] = "complete";
		saveData(cm, 3847, data);

		var data3850 = getData(cm, 3850, ["Time", "Scr", "Floor"]);
		data3850[0][1] = 900 - parseInt(eim.getTimeLeft() / 1000);
		data3850[1][1] = 1;
		var lastBestStage = parseInt(data3850[2][1]);
		if (stage > lastBestStage) {
			cm.getTopMsgFont("- 达成最高纪录 -", 3, 25, 4, 0);
			data3850[2][1] = parseInt(em.getProperty("stage"));
		}
		saveData(cm, 3850, data3850);
		if (cm.getMapId() == 925020003) {
			cm.getPlayer().dropMessage(-1, "恭喜，你已经通关了武陵道场的所有关卡.");
		}

		cm.onScriptMessage(3, 0, 0, 0, "辛苦啦。再接再厉继续挑战。\r\n\r\n<最近记录信息>\r\n#b  - 排名区间：精通\r\n  - 通关层数：" + data[2][1] + "层\r\n  - 花费时间：" + data[0][1] + "秒#k\r\n\r\n如果达成较之前记录更好的成就，将自动录入#r武陵排名榜#k。\r\n注意，录入时间可能会有延迟。", 0, 0, 5, 0, 0, 2091011); // [类型] 普通对话
		ms.dispose();
	} else {
		ms.dispose();
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
