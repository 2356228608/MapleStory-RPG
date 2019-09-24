/*  This is mada by Jackson
 *  This source is made by Funms Team
 *
 *  功能：武陵道场 出去
 *
 *  @Author Jackson
 */

/* global cm */
var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		if (cm.getMapId() == 925080000) {
			var data = getData(cm, 18766, ["Time", "enterTime"]);
			cm.askYesNo("还没到出去的时间你就要走吗？\r\n现在还剩#r#e " + parseInt(parseInt(data[0][1])/60000) + " #k#n分钟。虽说剩下的时间下一次还可以继续使用，可这有点浪费吧？你好好考虑。");
		} else {
			var eim = cm.getEventInstance();
			var em = eim.getEventManager();
			if (em.getProperty("clear").equals("true")) {
				cm.askYesNo("怎么, 都打倒对方了你还想去哪儿? 现在直接进入下一个阶段就可以了吧? 难不成你是想起什么要紧事了吗?");
			} else {
				cm.askYesNo("呵! 怎么, 你现在就要放弃了吗? 所以我不是让你不要蛮干逞能了嘛, 你真的打算放弃之后出去吗?");
			}
		}
	} else {
		if (mode > 0) {
			if (cm.getMapId() == 925080000) {
				cm.warp(925020001, 0);
			} else {
				cm.warp(925020002, 0);
				var data = getData(cm, 3847, ["Time", "enter", "Floor", "Result"]);
				data[3][1] = "giveup";
				saveData(cm, 3847, data);
			}
		}
		cm.dispose();
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
