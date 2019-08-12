﻿/* Dawnveil
[Ellinel Fairy Academy] Clue Number One
Hidey Hole
Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.askAcceptDecline("总觉得有个地方非常可疑。要去调查下吗？");
	} else if (status == 1) {
		qm.sendNextS("#v4033828#\r\n\r\n（发现了未知的演出剧本。要稍微读一下吗？）");
	} else if (status == 2) {
		qm.sendNext("[妖精的剧本]\r\n\r\n第3章\r\n\r\n帷幕升起，响起悲壮的音乐。\r\n\r\n幻影：（面对观众）啊啊，悲痛已经漫染了这个世界。你，恶毒的黑魔法师的军团长！我以怪盗的名义发誓，你将永无安宁之日。我怪盗幻影要取走的最后一件东西,既不是宝石，也不美术品，而是你那不值钱的贱命。", 1500022);
	} else if (status == 3) {
		qm.sendNextS("……？读读其他几页吧。");
	} else if (status == 4) {
		qm.sendNext("[妖精的剧本]\r\n\r\n战神：（豪迈地）光之守护者啊，你赶快去吧！这里有我守着，就算敌人如海啸般涌来，也休想过我这关。\r\n夜光法师：（感地）以神之名来讲，这天下再也找不到像你这么勇猛的战士了！你的勇猛可比天高。用你那斩杀了数千数万敌人的武器消灭黑魔法师吧。\r\n\r\n灯光暗了下来，弗里德和双弩精灵在舞台的一登场。\r\n\r\n弗里德：喔，精灵女王啊！在您那灿烂光辉的美丽面前，连凶猛的野兽都会俯首称臣！能与你站在同一战场上，是我无上的荣幸。\r\n双弩精灵：你，龙神啊！让我们一起消灭黑魔法师吧。我们的战斗就如同那离弦之箭一般，已经打响了。", 1500022);
	} else if (status == 5) {
		qm.sendNextS("孩子们怎么会有这种剧本……总之，先拿给库迪，看看他怎么说。\r\n（和#b魔法师库迪#k对话吧。）");
	} else if (status == 6) {
		qm.forceStartQuest();
		qm.gainItem(4033828, 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("你发现了剧本？让我看看。\r\n\r\n这不是有关将黑魔法师封印起来的冒险岛世界英雄们的故事吗？难怪台词如此教昂……不过，这种剧本为什么会在那些孩子手里呢？");
		} else if (status == 1) {
			qm.sendNextPrev("接下来调查3楼吧！我会在上面等着你。\r\n（在艾利涅3楼，与#b魔法师库迪#k对话吧。）");
		} else if (status == 2) {
			qm.removeAll(4033828);
			qm.forceCompleteQuest(32111);
			qm.forceCompleteQuest();
			qm.dispose();
		}
	}
}
