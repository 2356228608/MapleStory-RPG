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
		cm.onScriptMessage(3, 0, 0, 1540446, "一旦进行初始化，在完全完成Act 1.5#b之前无法重新初始化，从初始化那一刻开始，一周内只能进行一次#k，确定要初始化吗？", 0, 3, 4, 0, 0, 1540446); // [类型] 是/否
	} else if (status === i++) {
		var newStatus = cm.getQuestRecord(33911);
		newStatus.setStatus(0);
		cm.getPlayer().updateQuest(newStatus);
		cm.updateInfoQuest(33911, "");
		cm.updateInfoQuest(33952, "");
		cm.updateInfoQuest(33907, "");
		cm.updateInfoQuest(33961, "");
		cm.updateInfoQuest(33918, "1_5=19/09/06;1=17/05/21;2=17/05/22");
		cm.updateInfoQuest(33919, "1_5=2;1=1;2=1");
		cm.updateInfoQuest(33961, "");
		cm.dispose();
		cm.playerMessage(1, "初始化成功,请下线后再上游戏.");
	} else {
		cm.dispose();
	}
}
