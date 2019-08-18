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
		qm.dispose();
		qm.openNpc(9900004,"我的小屋剧情1");
	}else if (status === i++) {
		qm.forceStartQuest();
		qm.forceCompleteQuest(500763);
		qm.forceCompleteQuest("name="+qm.getPlayer().getName());
		//qm.updateInfoQuest(500763, "name="+qm.getPlayer().getName());
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
