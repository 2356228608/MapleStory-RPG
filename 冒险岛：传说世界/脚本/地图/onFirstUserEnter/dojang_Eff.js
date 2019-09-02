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
			ms.getMap().startSimpleMapEffect("别忘了限制时间是10分钟，只要在时间内打倒怪物，进入下一层就行", 5120024);
		}
		var stage = (ms.getMapId() % 10000) / 100;
		ms.getClock(120);
		for (var i = 0; i < 3; i++) {
			ms.updateInfoQuest(1213, "try=3");
		}
		if (stage % 6 > 0) { // 进入地图有个几关显示的特效
			ms.fieldEffect_PlayFieldSound("Sound/Field.img/Dojang/start");
			ms.fieldEffect_ScreenMsg("Map/Effect.img/dojang/start/stage");
			ms.fieldEffect_ScreenMsg("Map/Effect.img/dojang/start/number/" + (stage - Math.floor(stage / 7)));
		}
		//ms.fieldEffect_Tremble(0, 1, 30);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
