/* Cygnus revamp
Noblesse tutorial
The Path of a Wind Archer
Made by Daenerys
 */

var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 0) {
		if (status == 0) {
			qm.sendNext("我等待你的决定...");
			qm.safeDispose();
			return;
		}
		status--;
	} else {
		status++;
	}
	if (status == 0) {
        qm.askYesNo("你做好了决定吗？一旦决定了就无法再更改，因此在确定职业道路之前要仔细考虑。 你确定要成为一名风灵使者吗？");
	} else if (status == 1) {
        qm.sendNext("我重塑了你的身体，使它能完美匹配风灵使者的道路。如果你希望变得更加强大, 在状态窗口里 (S) 提升能力点。如果你不知道如何搭配，就点击 #b自动#k。");
		if (qm.getJob() != 1300) {
			qm.gainItem(2060000, 2000);
			qm.gainItem(1452051, 1);
			qm.gainItem(1142066, 1);
			qm.expandInventory(1, 4);
			qm.expandInventory(4, 4);
			qm.changeJob(1300);
			qm.getPlayer().gainSP(5, 0);
			qm.gainExp(1242);
		}
	} else if (status == 2) {
        qm.sendNextPrev("我还扩展了你的装备栏和其他栏的格子数量。明智地使用这些空位，带上骑士团所应该携带的物品。");
	} else if (status == 3) {
        qm.sendNextPrev("我还给了你一些#b技能点#k，打开#b技能菜单#k来获得你的新技能。 当然，你无法一下子全部提高它们的等级，并且除非你先掌握了基本技能，否则一些技能你将无法学习。");
	} else if (status == 4) {
        qm.sendNextPrev("与你作为新手时不同，现在你成为了风灵使者，当你的生命值耗尽后，你将丢失一部分经验值，明白了吗？");
	} else if (status == 5) {
        qm.sendNextPrev("现在... 我希望你能离开这里，向世界展示我们骑士团的风范.");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
