/*
传送NPC
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		var text = "你想离开这个地方吗？想去哪里？\r\n\r\n";
		text += "#L1##b移动到#e里恩#n。（费用：0金币)\r\n#l";
		cm.askYesNo(text);
	} else if (status === i++) {
		cm.sendOk("要回去里恩吗？刚好我们马上就要开船了。上来吧！");
	} else if (status === i++) {
		cm.dispose();
		cm.warp(141000200, 0);
	} else {
		cm.dispose();
	}
}
