/*
Made by jessefjxm
 */
//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["小游戏_控制之神"];
//记录次数名称
var PQLog = ["小游戏_控制之神"];
//开始的地图
var startmap = 993001000;
//等级限制
var minLevel = [0];
var maxLevel = [999];
//次数限制
var maxenter = [1000];
//几天一次
var interval = [1000];
var status = -1;
//限制人数
var minPlayers = 1;
var maxPlayers = 1;
//怪物最大等级设置
var moblevel = 255;
/*var questID = 31732;*/
var chs = 0;
var level = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	status++;
	if (cm.getMapId() != startmap) {
		cm.warp(startmap, 0);
		cm.dispose();
		return;
	}
	var data = getData(cm, 18838, ["count", "stageT", "hack", "stage", "mode"]);
	data[4][1] = 1;
	var timeDiff = new Date().getTime() - Number(data[1][1]);
	if (timeDiff > 7 * 24 * 3600 * 1000) {
		cm.playerMessage(5, "一星期过去了，又可以继续尽情挑战控制之神了。");
		data[0][1] = 99;
		data[1][1] = new Date().getTime();
		saveData(cm, 18838, data);
	}
	var count = parseInt(data[0][1]);
	if (count <= 0) {
		cm.sendOk_Bottom("啊呀，这星期已经没有挑战次数了呀？下周再试试吧~", 9070200);
		cm.dispose();
		return;
	}

	if (level < 0)
		level = cm.getNpc();
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		var datalevel = getData(cm, 18838 + level, ["isClear", "br", "cs", "first"]);
		if (parseInt(datalevel[0][1]) == 1) {
			cm.askYesNoNoESC_Bottom("该关卡已通关，\r\n你要用中了陷阱之时剩余挑战次数会减少1次、计时器会重置的\r\n#b<挑战模式>#k入场吗？", 9070200);
		} else {
			startEvent(data, count);
		}
	} else if (status === i++) {
		if (mode == 1) {
			data[4][1] = 2; // 挑战模式
		}
		startEvent(data, count);
	} else {
		cm.dispose();
	}
}

function startEvent(data, count) {
	var em = cm.getEventManager(PQname[chs]);
	if (em == null || open == false) {
		cm.sendOk_Bottom("配置文件不存在,请联系管理员。", 9070200);
	} else {
		var mapid = 993001000 + level * 10;
		if (em.getPlayersInMap(mapid).size() == 0) {
			// 当前选择关卡
			cm.updateInfoQuest(18837, "visit=1;" + level);
			// 扣除闯关次数
			data[0][1] = count - 1;
			saveData(cm, 18838, data);
			// 开工
			em.startInstance(cm.getPlayer());
			em.setProperty("PQLog", PQLog[chs]); // 务必放在加载事件下方
		} else {
			cm.sendOk_Bottom("这一关已经有人在尝试挑战了，换其他频道尝试吧。", 9070200);
		}
	}
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
