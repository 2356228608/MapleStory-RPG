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
		//cm.npc_ChangeController(1033211, "oid=1343", -177, -339, 1);
		cm.setInGameDirectionMode(false, false, false);
		cm.setStandAloneMode(false);
		while (ms.getLevel() < 10) {
			ms.levelUp();
		}
		if(ms.getLevel()==10){
			cm.changeJob(2300);
		}
		cm.forceStartQuest(24008);
		cm.forceCompleteQuest(24005);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
