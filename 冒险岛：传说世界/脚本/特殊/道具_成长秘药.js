/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var item = cm.getNpc();
	if (cm.haveItem(item, 1)) {
		var level = cm.getChar().getLevel();
		var neededEXP = cm.getChar().getNeededExp();
		switch (item) {
		case 2436617: // 低级联盟成长秘药
		case 2450150: // 低级联盟成长秘药
			if (notValidLevel(100, 129))
				return;
			cm.getChar().gainExp(neededEXP / 2, true, true, true);
			// TODO 加三倍经验buff
			cm.useItem(2450154);
			break;
		case 2436618: // 中级联盟成长秘药
		case 2450151: // 中级联盟成长秘药
			if (notValidLevel(130, 159))
				return;
			cm.getChar().gainExp(neededEXP / 2, true, true, true);
			// TODO 加三倍经验buff
			cm.useItem(2450154);
			break;
		case 2436619: // 高级联盟成长秘药
		case 2450152: // 高级联盟成长秘药
			if (notValidLevel(160, 179))
				return;
			cm.getChar().gainExp(neededEXP / 2, true, true, true);
			// TODO 加三倍经验buff
			cm.useItem(2450154);
			break;
		case 2439267: // 联盟成长秘药I
		case 2439560: // 联盟成长秘药I
			if (notValidLevel(200, 99999))
				return;
			if (level <= 209)
				cm.getChar().levelUp();
			else
				cm.getChar().gainExp(6120258214, true, true, true);
			break;
		case 2439268: // 联盟成长秘药II
			if (notValidLevel(200, 99999))
				return;
			if (level <= 219)
				cm.getChar().levelUp();
			else
				cm.getChar().gainExp(33644667337, true, true, true);
			break;
		case 2439269: // 联盟成长秘药III
			if (notValidLevel(200, 99999))
				return;
			if (level <= 229)
				cm.getChar().levelUp();
			else
				cm.getChar().gainExp(120751015801, true, true, true);
			break;
		}
		cm.gainItem(item, -1);
	}
	cm.dispose();
}

function notValidLevel(min, max) {
	var level = cm.getChar().getLevel();
	if (level < min || level > max) {
		cm.sendOkS("我已经无法再使用这瓶秘药了。", 0);
		cm.dispose();
		return true;
	} else {
		return false;
	}
}
