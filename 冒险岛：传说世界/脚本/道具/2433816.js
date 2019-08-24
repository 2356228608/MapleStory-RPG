/*  This is mada by 娜娜
 *  This source is made by BMS Team
 *  脚本功能：
 *  @Author 娜娜
 */
var status = -1;

function start() {
	if (randomNum(1, 2) == 1) {
		im.sendOkS("这本书都写了些啥啊……糟糕，好像是损坏了。");
		im.gainItem(im.getItemId(), -1);
		im.dispose();
		return;
	}
	var menu = im.getSkillMenu(30, im.getPlayer().getJob());
	if (menu == "") {
		im.sendOkS("看来你不需要其他能手册啊。", 4, 2080009);
		im.dispose();
	} else {
		im.askMenu("你可以提升的技能目录如下。\r\n" + menu + "\r\n\r\n#r#L0# #fn黑体##fs14##e取消使用能手册。#n#fs##fn##l", 5, 2080009);
	}
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
