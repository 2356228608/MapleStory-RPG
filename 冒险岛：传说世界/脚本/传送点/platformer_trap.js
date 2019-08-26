function enter(pi) {
	var pos = pi.getMap().getPortal(0).getPosition();
	pi.onTeleport(1, pi.getPlayer().getId(), pos.getX(), pos.getY());
	var rand = randomNum(0, say.length - 1);
	pi.addPopupSay(say[rand][0], 500, say[rand][1]);
	pi.fieldEffect_PlayFieldSound("Sound/Ambience.img/warning");
	pi.emotion(5, 2000);

	var data = getData(pi, 18877, ["trap", "trapSum", "T"]);
	data[0][1] = parseInt(data[0][1]);
	data[1][1] = parseInt(data[1][1]);
	data[2][1] = new Date().getTime();
	saveData(pi, 18877, data);
	return true;
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

var say = [[9070200, "别因为这种事就放弃。"],
	[9070200, "啧啧……要小心啊。"],
	[9070201, "该不会是努力得还不够吧？"],
	[9070200, "啊！嘤！哎！哈！没能成功突破！"],
	[9070202, "因为痛，所以叫青春。"],
	[9070203, "你也太慢腾腾了吧，就跟树懒似的。"],
	[9070201, "额啊……加油。"],
	[9070200, "我总觉得你还是得做200个深蹲才行。"],
	[9070201, "跳跃是艺术加技术~"]];

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
