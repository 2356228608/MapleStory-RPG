/*
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var level = (ms.getMapId() - 993001000) / 10;
	var data = getData(ms, 18838 + level, ["isClear", "br", "cs", "first"]);
	if (parseInt(data[3][1]) == 0) {
		action0(mode, type, selection, level, data);
	} else {
		start(level);
	}
}

function action0(mode, type, selection, level, data) {
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
	} else if (status === i++) {
		ms.sendNext_Bottom("这是你在本性森林的第一次挑战呢！幸会！\r\n\r\n我是#b比光还要快的树懒#k，#g闪电箭#k！", 9070203);
	} else if (status === i++) {
		ms.sendNext_Bottom("这里类似于进入本性森林的走廊，你会学会有关#g冲锋#k的使用方法。", 9070203);
	} else if (status === i++) {
		ms.sendNext_Bottom("你问要怎么冲锋吗？#g连续朝你想要奔跑的方向按下两次方向键#k就可以了。", 9070203);
	} else if (status === i++) {
		ms.sendNext_Bottom("这里只要跑到右侧尽头就可以了，希望你能够尽情奔跑！当然你是赶不上我的速度的……呵呵。", 9070203);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();

		data[3][1] = 1;
		saveData(pi, 18838 + level, data);
	} else {
		ms.dispose();
	}
}

function start(level) {
	ms.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/start");
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
	ms.getWeatherEffectNotice(startInfo[level - 1][1], startInfo[level - 1][0], 5000, 1);
	ms.addPopupSay(startInfo[level - 1][2], 2000, startInfo[level - 1][3]);
	ms.dispose();
}

var startInfo = [215, "用冲锋到终点！", 9070203, "冲锋就是朝着想去的方向连续！按两次！方向键……呵呵。"];

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
