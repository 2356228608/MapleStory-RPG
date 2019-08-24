/*  This is mada by 娜娜
 *  This source is made by BMS Team
 *  脚本功能：
 *  @Author 娜娜
 */
var status = -1;

function start() {
	im.gainItem(2431790, 10);
	im.dispose();
	im.gainItem(im.getItemId(), -1);
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;

	if (status == 0) {
		if (selection > 0 && im.canUseSkillBook(selection, 30)) {
			im.useSkillBook(selection, 30);
			im.gainItem(im.getItemId(), -1);
		} else if (selection != 0) {
			im.sendOkS("看来你不需要其他能手册啊,请先把技能点加好后再来用吧.", 4, 2080009);
		}
		im.dispose();
	} else {
		im.dispose();
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
