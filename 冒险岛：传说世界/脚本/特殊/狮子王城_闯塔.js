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
	if (cm.getQuestStatus(3139)==0) {
		action1(mode, type, selection);
	} else if (cm.isQuestActive(3139)) {
		action2(mode, type, selection);
	} else if (cm.getQuestStatus(3139) == 2 && cm.getQuestStatus(3140) == 0) {
		action3(mode, type, selection);
	} else if (cm.isQuestActive(3140)) {
		action4(mode, type, selection);
	} else if (cm.getQuestStatus(3140) == 2 && cm.getQuestStatus(3141) == 0) {
		action5(mode, type, selection);
	} else if (cm.isQuestActive(3141) && cm.isQuestActive(3167)) {
		action6(mode, type, selection);
	} else if (cm.isQuestActive(3141)) {
		action7(mode, type, selection);
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

function action3(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.sendNext("这么快就到达第二个关卡啦。我就长话短说了，必须消灭第二座塔楼里的#r看守波尔#k，第二个封印才会解开。", 2161002);
	} else if (status == i++) {
		cm.sendNextS("看守波尔……名字的意思好象是野猪吧？");
	} else if (status == i++) {
		cm.sendNext("没错。就像名字一样，他是个像野猪一样凶残、可怕的怪物。找到之前的那个锁匠，他就会为你制作第二座塔楼的钥匙。请你快去找他吧。", 2161002);
	} else {
		cm.forceStartQuest(3140);
		cm.dispose();
	}
}

function action4(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var info = cm.getInfoQuest(3140);
		if (info != null && info.equals("clear")) {
			cm.sendNext("看守波尔也消灭掉啦。虽然要想解开最后的封印，还需要克服更危险的难关，但是我相信你一定可以做到。", 2161002);
		} else {
			cm.sendNext("要想穿过这扇门，必须把第二座塔的#r看守波尔#k全部消灭掉。", 2161002);
			cm.dispose();
		}
	} else if (status == i++) {
		cm.sendNextS("是的，我马上就去找你，请你等着我。");
	} else if (status == i++) {
		cm.sendNext("那我就在第三个封印那边等着你。请一定要注意安全……", 2161002);
	} else {
		cm.forceCompleteQuest(3140);
		cm.gainItem(4032833, -1);
		cm.dispose();
	}
}

function action5(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.sendNext("终于到了最后一关。守护第三座塔楼的#r看守莱诺#k是比在城内徘徊的其他怪物更凶残的家伙。", 2161002);
	} else if (status == i++) {
		cm.sendNextS("把他们全部消灭掉，就能解开封印吗？");
	} else if (status == i++) {
		cm.sendNext("是的，虽然你之前一直做得很好，但这次绝对不能放松警惕。", 2161002);
	} else if (status == i++) {
		cm.sendNext("别担心。快去锁匠杰恩那里拿到钥匙，解开第三个封印。", 2161002);
	} else {
		cm.forceStartQuest(3141);
		cm.dispose();
	}
}

function action6(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.sendNextS("鲁丹，要想获得第三座塔楼的钥匙，必须消灭#r贝尔武夫#k。但是却找不到他，该怎么办呢？");
	} else if (status == i++) {
		cm.sendNext("嗯……贝尔武夫是在穿过门之后下一张地图#b城墙下4#k中的怪物。没办法，我会暂时削弱封印的力里。你趁这个机会去搜集钥匙的材料。", 2161002);
	} else {
		cm.warp(211060700, 1);
		cm.dispose();
	}
}

function action7(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var info = cm.getInfoQuest(3141);
		if (info != null && info.equals("clear")) {
			cm.sendNext("你真的……把第三个封印也解开了吗？经过漫长的等待，通往忠诚的誓言的路终于打开了。", 2161002);
		} else {
			cm.sendNext("要想穿过这扇门，必须把第三座塔的#r看守莱诺#k全部消灭掉。", 2161002);
			cm.dispose();
		}
	} else if (status == i++) {
		cm.sendNextS("忠诚的誓言……你是说狮子王的事情吗？");
	} else if (status == i++) {
		cm.sendNext("那我就在第三个封印那边等着你。请一定要注意安全……", 2161002);
	} else if (status == i++) {
		cm.sendNext("我在第四座塔中。现在已经没有封印阻挡你了，请过来找我，小心路上的怪物。希望能尽快亲眼见到你……", 2161002);
	} else {
		cm.forceCompleteQuest(3141);
		cm.gainItem(4032834, -1);
		cm.dispose();
	}
}