/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var NPC = 2540000;
// UI
var itemBorder = "#fUI/UIWindow.img/Item/New/inventory/0#";
var lock = "#v2200001#";

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var item = cm.getNpc();
	if (cm.haveItem(item, 1) && item >= 2432438 && item <= 2432447) {
		if (cm.getMapId() != 992000000) {
			var text = "朦胧石只能在#b起源之塔大厅#k装备才能生效。在其他地方我无法转换它们的力量。\r\n\r\n";
			cm.askMenu(text, NPC);
		} else {
			addStone(item);
		}
	}
	cm.dispose();
}

// 时间转换
function toTime(time) {
	var hours = parseInt((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = (time % (1000 * 60)) / 1000;
	var h = (hours >= 10 ? hours : '0' + hours) + ':';
	var m = (minutes >= 10 ? minutes : '0' + minutes) + ':';
	var s = (seconds >= 10 ? seconds : '0' + seconds);
	return h + m + s;
}
