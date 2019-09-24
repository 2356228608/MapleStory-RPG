// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		cm.updateInfoQuest(3888, "dojangRankJob=0;dojangRank2=0");
		var date = new Date();
		var newStatus = cm.getQuestRecord(3846);
		newStatus.setCustomData((date.getYear() - 100) + "/" + (date.getMonth() + 1) + "/" + date.getDay());
		newStatus.setStatus(1);
		cm.getPlayer().updateQuest(newStatus, true);

		var newStatus = cm.getQuestRecord(7279);
		newStatus.setCustomData("0");
		newStatus.setStatus(1);
		cm.getPlayer().updateQuest(newStatus, true);

		cm.updateInfoQuest(14981, "PCAdvantage=0");
		ms.dispose();
	} else {
		ms.dispose();
	}
}
