/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		var map = cm.readQuestInfo(500773);
		var manager = parseInt(map.getOrDefault("manager", "0"));
		cm.onScriptMessage(3, 0, 0, 0, "#face1##b要去哪儿？\r\n#L0#前往广场#l\r\n#L9#离开我的小屋#l", 0, 6, 36, 0, 1, 9400920 + manager); // [类型] 选择菜单
	} else if (status === i++) {
		cm.dispose();
		if (selection == 0) {
			if (cm.getQuestStatus(64595) == 1) {
				cm.warp(871000012, 1);
			} else {
				cm.warp(871000000, 1);
			}
		} else {
			var data = getData(cm, 64590, ["rMap"]);
			cm.warp(parseInt(data[0][1]));
		}
	}
}

// getData(cm, 18766, ["Time", "enterTime"]);
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
