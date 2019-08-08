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
	var id = cm.getNpc();
	if (id < 0 || id > 2) {
		cm.dispose();
		return;
	}
	var em = cm.getEventManager("Map_TowerOfOz");
	em.setProperty("stage23_stage", id + 1);
	cm.addPopupSay(2540000, 4000, "？？怎么回事？为什么这里的魔法失效了？糟糕了……恐怕这次只能靠你自己摸索过去了。");
	cm.dispose();
}
