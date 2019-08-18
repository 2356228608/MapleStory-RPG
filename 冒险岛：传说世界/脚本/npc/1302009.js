/* global ms */
var status = -1;

function action(mode, type, selection) {
	if (mode === 0) {
		status--;
	} else {
		status++;
	}
	var info = cm.getInfoQuest(30067);
	if (info != null && info.equals("clear")) {
		var map = cm.getMapId();
		if (map == 106031500) {
			cm.warp(106031501, 0);
		}
	} else {
		cm.effect_NormalSpeechBalloon("再，再往前走几步，就快到了！", 1, 0, 0, 2000, 0, 0);
	}
	cm.dispose();
}
