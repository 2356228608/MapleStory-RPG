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
		case 103000800:
			ms.getMap().startSimpleMapEffect("解决问题并收集通行证的数量!", 5120017);
			break;
		case 103000801:
			ms.getMap().startSimpleMapEffect("上绳索，揭开正确的组合!", 5120017);
			break;
		case 103000802:
			ms.getMap().startSimpleMapEffect("在平台上推出正确的组合!", 5120017);
			break;
		case 103000803:
			ms.getMap().startSimpleMapEffect("在桶上，揭开正确的组合!", 5120017);
			break;
		case 103000804:
			ms.getMap().startSimpleMapEffect("打败史莱姆王和他的爪牙!", 5120017);
			break;
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
