/* [冒险岛联盟]冒险岛联盟的开端
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.askYesNo("你好，勇士！你想组建自己的#b冒险岛联盟#k吗？", 9010106);
	} else if (status === i++) {
		qm.sendOk("现在的冒险岛世界需要更强的力量来守护自己。我会指引你打造更强的#b冒险岛联盟#k。如果对此有什么问题，就来找我吧！", 9010106);
	} else if (status === i++) {
		qm.forceStartQuest();
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
