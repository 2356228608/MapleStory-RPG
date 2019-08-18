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
	var em = cm.getEventManager("副本_蘑菇城_Boss");
	var state = parseInt(em.getProperty("state"));
	if (state < 10) {
		cm.sendOkS("战斗还没结束，还不能离开。");
	} else if (!cm.isQuestFinished(30070)) {
		if (cm.isQuestActive(30070)) {
			cm.warp(106030000, 0);
		} else {
			cm.sendOkS("我得把蘑菇大臣带回去才行。");
		}
	} else {
		cm.warp(106030600, 0);
	}
	cm.dispose();
}
