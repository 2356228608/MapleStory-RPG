/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		if (cm.getNpc() == 0 || cm.getNpc() == cm.getPlayer().getAccountID()) {
			var text = "我";
		} else {
			var text = "别人";
		}
		var map = cm.readQuestInfo(500773);
		var manager = parseInt(map.getOrDefault("manager", "0"));
		cm.onScriptMessage(3, 0, 0, 0, "#face1#要现在进入" + text + "的小屋吗？", 0, 16, 36, 0, 1, 9400920 + manager); // [类型] 接受/拒绝
	} else if (status === i++) {
		cm.updateInfoQuest(64590, "rMap=" + cm.getMapId());
		cm.dispose();
		if (cm.getPlayer().getQuestStatus(64591) == 1) {
			cm.warp(871000011);
		} else if (cm.getNpc() == cm.getPlayer().getAccountID()) {
			cm.enterHome(0);
		} else {
			cm.enterHome(cm.getNpc());
		}
	}
}
