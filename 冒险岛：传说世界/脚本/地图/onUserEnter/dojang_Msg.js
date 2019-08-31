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
		var mulungEffects = [
			"我等你！ 还有勇气的话，欢迎再来挑战！",
			"想挑战武陵道场…还真有勇气！",
			"挑战武陵道场的家伙，我一定会让他(她)後悔！！",
			"真是胆大包头！ 勇敢和无知请不要搞混了！！",
			"想被称呼为失败者吗？欢迎来挑战！"
		];
		ms.getMap().startSimpleMapEffect(
			mulungEffects[randomNum(0, mulungEffects.length - 1)], 5120024);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
