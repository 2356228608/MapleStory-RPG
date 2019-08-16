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
		if (cm.isQuestActive(32160) || cm.isQuestFinished(32160)) {
			text += "#L1##b移动到#e主题副本：列娜海峡#n。（费用：0金币)\r\n#l";
		}
		text += "#L2##b移动到金银岛。（费用：800金币)#l";
		cm.askYesNo(text);
	} else if (status === i++) {
		if (selectionLog[1] == 1) {
			cm.sendOk("哦哦，你想成为穿越冰川的航海家啊？好吧，那就免费载你去列海峡吧！快上来。");
		} else {
			if (cm.getPlayer().getMeso() >= 800) {
				cm.gainMeso(-800);
				cm.sendOk("我们马上就要开船了。上来吧！");
			} else {
				cm.sendOk("船费是800金币，有足够的金币在来找我吧。");
				cm.dispose();
			}
		}
	} else if (status === i++) {
		cm.dispose();
		if (selectionLog[1] == 1) {
			cm.warp(141000100, 0);
		} else {
			cm.warp(104000000, 0);
		}
	} else {
		cm.dispose();
	}
}
