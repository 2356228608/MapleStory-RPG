/* Dawnveil
Simpler Scrolls and Better Cubes
Maple Administrator
Made by Daenerys
Made by Jessefjxm
 */
var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.sendNext("想了解冒险岛世界改善过的强化方式吗？很简单，现在只需要点击物品栏的强化按钮，或者双击卷轴等，即可强化装备。");
	} else if (status == 1) {
		qm.sendNextS("这样吗？真是好方便啊。");
	} else if (status == 2) {
		qm.sendNext("是的，点击装备栏的强化按钮，就可以查看可适用的卷轴及潜能道具。此时只要双击卷轴,即可应用到装备。好好体验吧！");
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
		qm.gainExp(500);
	}

}
