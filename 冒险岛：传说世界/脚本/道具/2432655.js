var status = -1; // status: 当前聊天交互轮数

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		im.dispose();
	} else if (status === i++) {
		// 初始化
		im.askYesNoS("你想去蘑菇城吗？\r\n\r\n#r（点击接受时，立即移动到蘑菇城入口。）");
	} else if (status === i++) {
		im.warp(106030100, 0);
		im.gainItem(2432655, -1);
		im.dispose();
	} else {
		im.dispose();
	}
}
