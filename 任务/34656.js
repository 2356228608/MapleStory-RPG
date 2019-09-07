// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.sendNext("治疗应该结束了。现在我来教你影子商团的秘传技术。从现在起，你就是支部的正式成员了。", 3001200);
	} else if (status === i++) {
		cm.forceStartQuest(34656, "");
		cm.forceCompleteQuest(34656);
		cm.sendNextPrev("这段时间以来，你作为我的弟子展现出了优秀的战斗天赋，我认为你已经足够强大了。不过，如果能学会我刚才教给你的技术，你就会变得更加强大。", 3001200);
	} else if (status === i++) {
		cm.changeJob(6400);
		cm.forceStartQuest(34695, "");
		cm.forceCompleteQuest(34695);
		cm.openUIWithOption(3, 3);
		cm.sendNextPrev("我传授给了你影子商团成员的基本功，即讲价和返回商团技术。快去看看吧。使用返回商团，可以随时来到商团据点。", 3001200);
	} else if (status === i++) {
		cm.openUIWithOption(3, 3);
		cm.sendNextPrev("另外，这是你最喜欢的战斗技术。根据你的喜好分配SP，发展技能树吧。每次升级均可获得SP。", 3001200);
	} else if (status === i++) {
		cm.sendNextPrev("技能栏可以使用基本快捷键(K)打开。为方便使用，可将技能放入快捷栏。", 3001200);
	} else if (status === i++) {
		cm.openUI(2);
		cm.sendNextPrev("……还有，等级提高后能力值也会随之上升。点击基本快捷键(S)/选择型(C)分配能力点吧。", 3001200);
	} else if (status === i++) {
		cm.sendOk("希望你以后也能够继续脚踏实地，取得更大的进步。只要你不断磨练自己，终有一天所谓强大的技术都会变成无用之物的。", 3001200);
	} else if (status === i++) {
		cm.forceStartQuest(34604, "");
		cm.forceCompleteQuest(34604);
		cm.forceStartQuest(34605, "");
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		var id = qm.getQuest();
		qm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + id + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
