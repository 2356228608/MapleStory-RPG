var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择
var tier = ["初级", "中级", "高级", "资深", "精英", "大师"];

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		qm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;
	var data = getData(qm, 100114, ["time", "finished"]);

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
		if (timeDiff > 7 * 24 * 3600 * 1000) {
			text += "\r\n#L2# #b领取<大冒险等级>的本周奖励#l#k";
		} else {
			var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
			var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
			var hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
			text += "\r\n #k还需要等待#b " + dayDiff + "天" + hours + "小时 #k才能领取<大冒险等级>的本周奖励#l#k";
		}
		qm.askMenu(text, 9062143);
	} else if (status === i++) {
		var timeDiff = new Date().getTime() - Number(data[1][1]);
		if (selectionLog[1] == 1) {
			var text = "\r\n#e<大冒险等级>每周奖励列表#n\r\n#b";
			text += "\r\n  #i2450141:#  #t2450141:# 5个（7天）";
			text += "\r\n  #i2023654:#  #t2023654:# 5个（7天）";
			text += "\r\n  #i2023672:#  #t2023672:# 5个（7天）";
			text += "\r\n #i2436078:# #t2436078:# 5个（7天）";
			text += "\r\n  #i2435924:#  #t2435924:# 1个（7天）";
			text += "\r\n  #i2434921:#  #t2434921:# 1个（7天）";
			text += "\r\n #i2434288:#  #t2434288:# 5个（7天）";
			text += "\r\n #i4001864:#  #t4001864:# 5个（7天）";
			text += "\r\n  #i2434917:#   #t2434917:# 5个（7天）";
			text += "\r\n  #i2630181:#   #t2630181:# 50个（7天）";
			text += "\r\n  #i1712001:#  #t1712001:# 10个";
			text += "\r\n  #i1712002:#  #t1712002:# 10个";
			text += "\r\n  #i1712003:#  #t1712003:# 10个";
			text += "\r\n  #i1712004:#  #t1712004:# 10个";
			text += "\r\n  #i1712005:#  #t1712005:# 10个";
			text += "\r\n  #i1712006:#  #t1712006:# 10个";
			qm.sendOk(text, 9062143);
		} else {
			qm.sendOk("恭喜！这是你的奖励！", 9062143);
			// TODO 领奖励
			data[1][1] = new Date().getTime();
			qm.saveData(qm, 100114, data);
		}
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
