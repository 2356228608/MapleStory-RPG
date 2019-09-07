// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		cm.npc_ChangeController(1540795, "oid=56823", -10, 399, 1);
		cm.updateInfoQuest(33915, "act1=350110010");
		cm.forceStartQuest(33900, "4");
		cm.fieldEffect_Unew150("", "Map/Effect2.img/Blizzard/skeleton", "normal", 1, 1, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Ambience.img/blizzard_soft")
		cm.sendNextNoESC_Bottom("你肯定是这个方向吗？", 1540805);
	} else if (status === i++) {
		cm.askYesNoNoESC_Bottom("很肯定！\r\n#b现在就立刻过去吧？#l", 1540807);
	} else if (status === i++) {
		cm.updateInfoQuest(33901, "rp=4");
		// cm.warp(1266352137);
		cm.npc_ChangeController(1540795, "oid=56823", -10, 399, 1);
		cm.forceStartQuest(33900, "4");
		cm.fieldEffect_Unew150("", "Map/Effect2.img/Blizzard/skeleton", "normal", 1, 1, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Ambience.img/blizzard_soft")
		ms.dispose();
		cm.warp(350110050);
	} else {
		ms.dispose();
	}
}
