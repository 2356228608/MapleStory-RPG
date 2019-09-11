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
		cm.fieldEffect_Unew150("Map/Effect2.img/Blizzard/skeleton", "normal", "", 257, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 0, 0, "你肯定是这个方向吗？", 256, 0, 37, 0, 1, 1540805); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "很肯定！\r\n#b现在就立刻过去吧？#l", 0, 3, 37, 0, 1, 1540807); // [类型] 是/否
	} else if (status === i++) {
		cm.updateInfoQuest(33901, "rp=4");
		// [2019/9/2 22:36:29] 当前所在地图: cm.warp(350110010) - 即将切换地图，请检查是否有应属于下一地图的指令被错误分配
		cm.warp(350110050);
		cm.dispose();
		// [2019/9/2 22:37:26] 之前所在地图: cm.warp(350110050) - 当前进入地图: cm.warp(350110010)
		cm.npc_ChangeController(1540795, "oid=56823", -10, 399, 1);
		cm.forceStartQuest(33900, "4");
		cm.fieldEffect_Unew150("Map/Effect2.img/Blizzard/skeleton", "normal", "", 257, 0, 0, 0, 0);
		ms.dispose();
		cm.warp(350110050);
	} else {
		ms.dispose();
	}
}
