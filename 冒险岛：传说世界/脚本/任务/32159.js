/* Dawnveil
[Theme Dungeon] Ellinel Fairy Academy
通用 by jessefjxm
Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		qm.sendNext("喵~ 你就是前来解决妖精学院艾利涅里发生的骚乱的勇士吗，喵？");
	} else if (status == i++) {
		qm.sendNextPrevS("原……原来如此……不过你就是潘喜吗？", 15);
	} else if (status == i++) {
		qm.sendNextPrev("你看上去好像并没有想象中的那么强哦，喵。但既然是有名的勇士，我就相信你一次吧，喵。");
	} else if (status == i++) {
		qm.sendNextPrev("我介绍一下我的情况。我叫#b潘喜#k，大魔法师#b汉斯#k是我的第一位弟子……你那怀疑的目光是什么意思？没见过会说话的猫吗？会施法的猫也是头一次见吗？");
	} else if (status == i++) {
		qm.sendNextPrev("大魔法师 #b汉斯#k 的弟子可不是谁想做都能做的。只有对魔法拥有出众的领悟力以及强烈的热情的人，才有可能成为汉斯的弟子。我是不是很厉害？\r\n我先给你点时间，让你好好仰视一下我 #b潘喜#k吧。");
	} else if (status == i++) {
		qm.sendNextPrev("嗯？我想说什么来着？……喵！晕了，现在可不是说这些的时候！");
	} else if (status == i++) {
		qm.sendNextPrev("#fNpc/1500011.img/stand/0#\r\n我有一个叫#b魔法师库迪#k的朋友。他也跟我一样，是大魔法师汉斯的弟子，虽然年纪轻轻，但是头脑灵力，教什么都是举一反三。虽然也有点小缺点……");
	} else if (status == i++) {
		qm.sendNextPrev("#fNpc/1500000.img/stand/0##fNpc/1500002.img/stand/0#\r\n但是，不久之前，这个朋友发生了点事情。他被妖精们关起来了！罪名竟然是 #e#r妖精绑架犯#k#n。这其中肯定是有什么误会。");
	} else if (status == i++) {
		qm.sendNextPrev("我现在没时间解释。以后我会告诉你的，你先帮帮我吧！\r\n#b（※ #r妖精学院艾利涅#b是特殊主题副本。最大使用等级为#r59级#b，可获得与勇士等级相符的怪物和任务经验值。）");
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.forceStartQuest(32156);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.forceStartQuest(32156);
	qm.dispose();
}
