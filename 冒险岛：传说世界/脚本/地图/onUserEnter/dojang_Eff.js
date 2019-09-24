// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		if (ms.getMapId() == 925070100) {
			ms.getMap().startSimpleMapEffect("限制时间是15分钟，要尽早打倒怪物，到下一层去！", 5120024);
		} else {
			var eim = cm.getEventInstance();
			eim.restartEventTimer(eim.getTimeLeft());
		}
		var stage = (ms.getMapId() % 10000) / 100;
		// 进入地图有个几关显示的特效
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/Dojang/start");
		ms.fieldEffect_ScreenMsg("Map/Effect.img/dojang/start/stage");
		ms.fieldEffect_ScreenMsg("Map/Effect.img/dojang/start/number/" + stage);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
