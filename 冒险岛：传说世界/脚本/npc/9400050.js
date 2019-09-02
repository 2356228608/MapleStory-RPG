// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		var info = cm.getInfoQuest(59746);
		if (info.isEmpty()) {
			cm.updateInfoQuest(59746, "chk1=1");
			cm.forceCompleteQuest(59747);
			cm.npc_ChangeController(9400059, "oid=116638", 1939, 244, 1);
			cm.npc_LeaveField("oid=116637");
		} else {
			cm.sendOkSNoESC_Bottom("这里已经张贴好了。去其他地方看看吧。");
		}
		cm.dispose();
	} else {
		cm.dispose();
	}
}
