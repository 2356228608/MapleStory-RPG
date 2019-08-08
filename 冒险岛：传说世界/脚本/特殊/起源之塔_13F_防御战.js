/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
// UI
var itemBorder = "#fUI/UIWindow.img/Item/New/inventory/0#";
var lock = "#v2200001#";

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var mobName = ["绿色花牛", "白刺熊", "褐刺熊", "蓝色花牛"];
	var id = cm.getNpc();
	if (id < 0 || id > mobName.length) {
		cm.dispose();
		return
	}
	if (id == 0) {
		cm.addPopupSay(2540000, 4000, "那边" + mobName[id] + "出现了。要将它们全部消灭，注意不要漏掉！");
	} else if (id == 1) {
		cm.addPopupSay(2540000, 4000, "这次出现的是" + mobName[id] + "。请将它们全部消灭，一个也不要漏掉。");
	} else if (id == 2) {
		cm.addPopupSay(2540000, 4000, mobName[id] + "也出现了。就要结束了，不要掉以轻心，将它们全部消灭。");
	} else {
		cm.addPopupSay(2540000, 4000, "所有的怪物全部出动了。这是最后一次了，再加把劲。");
	}
	cm.dispose();
}
