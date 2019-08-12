/* Dawnveil
[Ellinel Fairy Academy] Combing the Academy 1
Cootie
Made by Daenerys
 */
var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start(mode, type, selection) {
	if (mode == 0 && type == 0) {
		status--;
	} else if (mode == -1) {
		qm.dispose();
		return;
	} else {
		status++;
	}
	selectionLog[status] = selection;
	if (status == 0) {
		qm.sendNext("你来啦，#h #。那么开始搜索吧？");
	} else if (status == 1) {
		qm.sendNextPrevS("从哪里开始入手呢？");
	} else if (status == 2) {
		qm.sendNextPrev("你知道孩子们最喜欢什么吗？就是他们之间的秘密。我也常常背着师傅，偷偷和其他弟子交换纸条，然后偷偷地笑呢。有时也在秘密的地方藏东西。那种事情可是非常有趣的呢。");
	} else if (status == 3) {
		var text = "凭我的直觉，孩子们之间有个共同的秘密。那个秘密应该就是关键。不过现在的问题是，要怎样做才能找到孩子们的秘密呢？\r\n\r\n";
		text += "#L1##b先找到孩子们之后，再询问秘密。#l\r\n";
		text += "#L2##b寻找一下写有秘密的纸条如问？#l\r\n";
		text += "#L3##b我也不知道，你怎么看？#l\r\n";
		qm.askMenu(text);
	} else if (status == 4) {
		if (selectionLog[4] == 1) {
			qm.sendNext("问题是，我们现在不就是为了找到孩子们吗？发愁啊……");
			status -= 2;
		} else if (selectionLog[4] == 2) {
			qm.sendNext("这个想法不错。最好寻找一下孩子们在上课时偷偷交换的纸条。");
		} else {
			qm.sendNext("我也没有头绪。发愁啊……");
			status -= 2;
		}
	} else if (status == 5) {
		qm.askAcceptDecline("这些#r下级魔法书#k身上肯定有纸条。据我刚刚观察，你好像身手不错。那你应该能消灭#r下级魔法书#k，并找出#b男生们的纸条#k吧？");
	} else if (status == 6) {
		qm.sendNext("查看纸条时，上面会有有用的信息，当然也会有没用的信息。\r\n所以每次获得纸条的时候，必须对内容进行确认！\r\n（消灭#r下级魔法书#k，搜寻#b男生们的纸条#k，并确认内容。)");
	} else if (status == 7) {
		qm.forceStartQuest();
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	qm.dispose();
}
