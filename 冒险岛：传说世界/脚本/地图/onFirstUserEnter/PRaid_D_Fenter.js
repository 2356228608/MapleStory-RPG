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
		switch (ms.getMapId() % 10) {
		case 0:
			ms.getMap().startSimpleMapEffect("Eliminate all the monsters!", 5120033);
			break;
		case 1:
			ms.getMap().startSimpleMapEffect("Break the boxes and eliminate the monsters!", 5120033);
			break;
		case 2:
			ms.getMap().startSimpleMapEffect("Eliminate the Officer!", 5120033);
			break;
		case 3:
			ms.getMap().startSimpleMapEffect("Eliminate all the monsters!", 5120033);
			break;
		case 4:
			ms.getMap().startSimpleMapEffect("Find the way to the other side!", 5120033);
			break;
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
