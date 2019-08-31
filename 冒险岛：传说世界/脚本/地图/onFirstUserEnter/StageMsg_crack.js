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
		switch (ms.getMapId()) {
		case 922010100:
			ms.getMap().startSimpleMapEffect("打败所有的黑鼠!", 5120018);
			break;
		case 922010200:
			ms.getMap().startSimpleMapEffect("收集所有的通行证!", 5120018);
			break;
		case 922010300:
			ms.getMap().startSimpleMapEffect("消灭怪物!", 5120018);
			break;
		case 922010400:
			ms.getMap().startSimpleMapEffect("消灭每一个房间里的怪物!", 5120018);
			break;
		case 922010500:
			ms.getMap().startSimpleMapEffect("收集从每个房间的通行证!", 5120018);
			break;
		case 922010600:
			ms.getMap().startSimpleMapEffect("到达顶部!", 5120018);
			break;
		case 922010700:
			ms.getMap().startSimpleMapEffect("破坏机器人!", 5120018);
			break;
		case 922010800:
			ms.getMap().startSimpleMapEffect("得到正确的组合!", 5120018);
			break;
		case 922010900:
			ms.getMap().startSimpleMapEffect("失败!", 5120018);
			break;
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
