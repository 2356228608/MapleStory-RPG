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
	if (im.getMapId() == 211060400) {
		im.playerMessage(5, "阿尔卡斯特的水晶发出光芒，然后消失了。同时，神秘地光芒包围住了莫特。");
		var newStatus = cm.getQuestRecord(3182);
		newStatus.setCustomData("211060400");
		im.getPlayer().updateQuest(newStatus, true);
		im.gainItem(im.getItemId(), -1);
	} else {
		im.sendOkS("这里还没到莫特附近，得小心点。要是一不小心使用掉了就麻烦了。");
	}
	im.dispose();
}
