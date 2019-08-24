function act() {
	if (rm.haveItem(4030036)) {
		rm.gainItem(4030036, -1);
		rm.dropSingleItem(4030035);
		var info = rm.getInfoQuest(31038);
		var count = (info ? parseInt(info.substr(6)) : 0) + 1;
		rm.updateInfoQuest(31038, "count=" + count);
		// 每日任务
		var data = getData(rm, 31035, ["score", "total"]);
		data[0][1] = parseInt(data[0][1]) + 10;
		saveData(rm, 31035, data);
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
