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
	var info = cm.getInfoQuest(18837);
	if (info != null && info.indexOf("visit=1") >= 0) {
		openUI();
		return;
	}
	(mode == 1) ? status++ : status--;
	var i = -1;
	selectionLog[status] = selection;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.sendNext_Bottom("你来了啊，能看到你是我的荣幸，操作已经堪比神的山羊……现在就像是个非常出色的人呢。", 9070200);
	} else if (status === i++) {
		cm.sendNext_Bottom("什么？你说你不是那种人？别谦虚了，谁都会有想要隐藏的秘密的。", 9070200);
	} else if (status === i++) {
		cm.sendNext_Bottom("其他动物那边，我会帮你保密的，真希望你能在这里给那些缺根筋的家伙好好做个表率。", 9070200);
	} else if (status === i++) {
		cm.sendNext_Bottom("还有变成人的身体之后，虽然实力不如从前……但我个人很想知道，当#g人的操作达到神的境界#k时会是什么样子。", 9070200);
	} else if (status === i++) {
		cm.sendNext_Bottom("那你只要做好羊的行动，当个挑战神操作的普通人类就好了，祝你好运。", 9070200);
		cm.updateInfoQuest(18837, "visit=1");
		var data = getData(cm, 18838, ["count", "stageT", "hack", "stage", "mode"]);
		data[0][1] = 99;
		data[1][1] = new Date().getTime();
		data[2][1] = 0;
		data[3][1] = 0;
		data[4][1] = 1;
		saveData(cm, 18838, data);
	} else if (status == i++) {
		openUI();
	}
}

function openUI() {
	cm.addPopupSay(9070200, 2000, "你要挑战“神操作”吗？");
	var data = getData(cm, 18838, ["count", "stageT", "hack", "stage", "mode"]);
	cm.openUIWithOption(1112, Math.floor(parseInt(data[3][1]-1) / 5));
	cm.dispose();
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
