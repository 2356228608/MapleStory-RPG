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
		if (info.equals("chk1=1")) {
			cm.updateInfoQuest(59746, "chk1=1;chk2=1");
			cm.forceCompleteQuest(59748);
			cm.npc_ChangeController(9400060, "oid=116639", 2564, 574, 1);
			cm.npc_LeaveField("oid=116638");
		} else if (info.isEmpty()) {
			cm.sendOkSNoESC_Bottom("先去其他地方张贴吧。待会再来看看这里。");
		} else {
			cm.sendOkSNoESC_Bottom("这里已经张贴好了。去其他地方看看吧。");
		}
		cm.dispose();
	} else {
		cm.dispose();
	}
}
