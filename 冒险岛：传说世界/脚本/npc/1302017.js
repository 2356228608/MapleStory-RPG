/* global ms */
var status = -1;

function action(mode, type, selection) {
	if (mode === 0) {
		status--;
	} else {
		status++;
	}
	var info = qm.getInfoQuest(30062);
	if (info != null && info.equals("NpcSpeech=13020161/13020072/13020183")) {
		cm.sendOk("我，我说！我全说！");
	} else {
		cm.sendOk("我是骄傲的大海盗！我是绝对不会开口的！");
	}
	cm.dispose();
}
