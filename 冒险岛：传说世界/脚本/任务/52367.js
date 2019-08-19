﻿var status = -1;

function start(mode, type, selection) {
	if (mode == 0) {
		if (status == 0) {
			qm.sendNext("需要好好做决定啊。");
			qm.safeDispose();
			return;
		}
		status--;
	} else {
		status++;
	}
	if (status == 0) {
		qm.sendNext("你到现在还不去学校，到底在做什么啊？");
	} else if (status == 1) {
		qm.sendNextPrev("老师在每个村庄待命，来找我，我会把你送往学校！");
	} else if (status == 2) {
		qm.sendNextPrev("今天来学校的话，特别……给你去其他教室巡回的钥匙！！！喔哈哈哈哈~");
	} else if (status == 3) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 0) {
		if (status == 0) {
			qm.sendNext("需要好好做决定啊。");
			qm.safeDispose();
			return;
		}
		status--;
	} else {
		status++;
	}
	if (status == 0) {
		qm.sendNext("嗯，虽然已经知道，但简单地复习一下吧？ 我们学校教室像迷宫一样，很杂乱地混在一起，进去后，就不知道会从哪一个教室出来。");
	} else if (status == 1) {
		qm.sendNextPrev("一直通过教室时，会渐渐得到更多的经验值和四大天王的友好度。");
	} else if (status == 2) {
		qm.sendNextPrev("当然要通过的教室也会渐渐变困难。不过，死亡的话，不会扣经验值，请不要担心。");
	} else if (status == 3) {
		qm.sendNextPrev("四大天王友好度提高的话，就可以购买寄物柜里的物品。");
	} else if (status == 4) {
		qm.sendNextPrev("最后，通过屋顶或是中途感到累了的时候，可以通过左边的门，随时回到教室。");
	} else if (status == 5) {
		qm.sendNextPrev("嗯~ #b#i5252017##z5252017##k拿着，这是打开右边门锁的钥匙，可以使用传送点。");
	} else if (status == 6) {
		if (qm.getPlayer().getLevel() <= 30) {
			qm.gainExp(15000 * 2);
		} else if (qm.getPlayer().getLevel() <= 70 && qm.getPlayer().getLevel() > 30) {
			qm.gainExp(30000 * 2);
		} else if (qm.getPlayer().getLevel() <= 120 && qm.getPlayer().getLevel() > 70) {
			qm.gainExp(60000 * 2);
		} else if (qm.getPlayer().getLevel() <= 200 && qm.getPlayer().getLevel() > 120) {
			qm.gainExp(120000 * 2);
		} else {
			qm.gainExp(240000 * 2);
		}
		qm.gainItem(5252017, 1);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
