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
		case 926110000:
			ms.getMap().startSimpleMapEffect("请找到隐藏的门，通过调查实验室!", 5120022);
			break;
		case 926110001:
			ms.getMap().startSimpleMapEffect("找到你的方式通过这黑暗!", 5120022);
			break;
		case 926110100:
			ms.getMap().startSimpleMapEffect("找到你的方式通过这黑暗!", 5120022);
			break;
		case 926110200:
			ms.getMap().startSimpleMapEffect("获取实验的文件通过每个门!", 5120022);
			break;
		case 926110203:
			ms.getMap().startSimpleMapEffect("请打败所有的怪物!", 5120022);
			break;
		case 926110300:
			ms.getMap().startSimpleMapEffect("找到你的方法通过实验室!", 5120022);
			break;
		case 926110401:
			ms.getMap().startSimpleMapEffect("请保护我的爱!", 5120022);
			break;
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
