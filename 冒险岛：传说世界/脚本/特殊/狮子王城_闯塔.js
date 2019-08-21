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
	if (cm.isQuestActive(3138)) {
		action1(mode, type, selection);
	} else if (cm.isQuestActive(3139)) {
		action2(mode, type, selection);
	} else if (cm.isQuestActive(3140)) {
		action3(mode, type, selection);
	} else if (cm.isQuestActive(3141)) {
		action4(mode, type, selection);
	} else {
		cm.dispose();
	}
}

function action1(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.sendNext("哦，好久没有人能进到城里来了……冒险家，这里非常危险，你还是快离开吧。", 2161002);
	} else if (status == i++) {
		cm.sendNextS("……谁……？！是鬼魂吗？？？");
	} else if (status == i++) {
		cm.sendNext("抱歉吓到你了。我是守护城堡的骑士#b鲁丹#k。很久以前就死了，但是却变成了幽灵，在城里游荡。", 2161002);
	} else if (status == i++) {
		cm.sendNextS("为什么变成了幽灵还留在城里呢？有什么必须守护的东西吗？");
	} else if (status == i++) {
		cm.sendNext("详细的情况我们见面之后再说。首先，你必须穿过这扇门，消灭守护第一座塔的邪恶的#r红色鳄鱼兵#k，解开封印。我曾经在周围见到过一位优秀的锁匠，请你让他帮你制作第一座塔楼的钥匙。", 2161002);
	} else {
		cm.forceCompleteQuest(3138);
		cm.forceStartQuest(3139);
		cm.dispose();
	}
}

function action2(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var info = cm.getInfoQuest(3139);
		if (info != null && info.equals("clear")) {
			cm.sendNext("你击退了红色鳄鱼兵，解开了第一个封印。你好像比我想象的更强。但是后面还需要解开两个这样的封印，才能到达我所在的地方。现在回头还来得及，怎么样？", 2161002);
		} else {
			cm.sendNext("要想穿过这扇门，必须把第一座塔的#r红色鳄鱼兵#k全部消灭掉。", 2161002);
			cm.dispose();
		}
	} else if (status == i++) {
		cm.sendNextS("听你这么一说，我反而更有斗志了。你等着，我马上过去。");
	} else if (status == i++) {
		cm.sendNext("那我就祝你能够获胜。希望你能打败那帮邪恶的家伙。", 2161002);
	} else {
		cm.forceCompleteQuest(3139);
		cm.gainItem(4032832, -1);
		cm.dispose();
	}
}

function action1(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.sendNext("哦，好久没有人能进到城里来了……冒险家，这里非常危险，你还是快离开吧。", 2161002);
	} else if (status == i++) {
		cm.sendNextS("……谁……？！是鬼魂吗？？？");
	} else if (status == i++) {
		cm.sendNext("抱歉吓到你了。我是守护城堡的骑士#b鲁丹#k。很久以前就死了，但是却变成了幽灵，在城里游荡。", 2161002);
	} else if (status == i++) {
		cm.sendNextS("为什么变成了幽灵还留在城里呢？有什么必须守护的东西吗？");
	} else if (status == i++) {
		cm.sendNext("详细的情况我们见面之后再说。首先，你必须穿过这扇门，消灭守护第一座塔的邪恶的#r红色鳄鱼兵#k，解开封印。我曾经在周围见到过一位优秀的锁匠，请你让他帮你制作第一座塔楼的钥匙。", 2161002);
	} else {
		cm.forceCompleteQuest(3138);
		cm.forceStartQuest(3139);
		cm.dispose();
	}
}