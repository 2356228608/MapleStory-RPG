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
		case 920010000:
			ms.getMap().startSimpleMapEffect("请通过收集云碎片来拯救我!", 5120019);
			break;
		case 920010100:
			ms.getMap().startSimpleMapEffect("把所有的作品都带到这里来拯救米勒娃!", 5120019);
			break;
		case 920010200:
			ms.getMap().startSimpleMapEffect("摧毁怪物和收集雕像碎片!", 5120019);
			break;
		case 920010300:
			ms.getMap().startSimpleMapEffect("摧毁每一个房间的怪物和收集雕像碎片!", 5120019);
			break;
		case 920010400:
			ms.getMap().startSimpleMapEffect("玩正确的唱片的一天!", 5120019);
			break;
		case 920010500:
			ms.getMap().startSimpleMapEffect("找到正确的组合!", 5120019);
			break;
		case 920010600:
			ms.getMap().startSimpleMapEffect("摧毁怪物和收集雕像碎片!", 5120019);
			break;
		case 920010700:
			ms.getMap().startSimpleMapEffect("一旦你到达了顶部，你就得到了正确的组合!", 5120019);
			break;
		case 920010800:
			ms.getMap().startSimpleMapEffect("召唤并击败精灵爸爸的!", 5120019);
			break;
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
