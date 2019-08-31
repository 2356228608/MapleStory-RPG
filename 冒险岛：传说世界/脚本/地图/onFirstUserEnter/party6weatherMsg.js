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
		case 930000000:
			ms.getMap().startSimpleMapEffect("在门户中的一步被改变.", 5120023);
			break;
		case 930000100:
			ms.getMap().startSimpleMapEffect("打败中毒的怪物!", 5120023);
			break;
		case 930000200:
			ms.getMap().startSimpleMapEffect("通过净化毒物，消灭孢子!", 5120023);
			break;
		case 930000300:
			ms.getMap().startSimpleMapEffect("哦哦！森林太混乱！找到我，快!", 5120023);
			break;
		case 930000400:
			ms.getMap().startSimpleMapEffect("从我得到净化的大理石上净化这些怪物!", 5120023);
			break;
		case 930000500:
			ms.getMap().startSimpleMapEffect("找到紫色魔法石!", 5120023);
			break;
		case 930000600:
			ms.getMap().startSimpleMapEffect("把魔法石放在祭坛上!", 5120023);
			break;
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
