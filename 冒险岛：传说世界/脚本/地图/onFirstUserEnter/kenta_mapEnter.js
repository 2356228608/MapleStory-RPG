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
		switch ((ms.getMapId() / 100) % 10) {
		case 1:
			ms.getMap().startMapEffect("Eliminate all the monsters!", 5120052);
			break;
		case 2:
			ms.getMap().startMapEffect("Get me 20 Air Bubbles for me to survive!",
				5120052);
			break;
		case 3:
			ms.getMap().startMapEffect("Help! Make sure I live for three minutes!",
				5120052);
			break;
		case 4:
			ms.getMap().startMapEffect("Eliminate the two Pianus!", 5120052);
			break;
		} // TODOO find out which one it really is, lol
		ms.dispose();
	} else {
		ms.dispose();
	}
}
