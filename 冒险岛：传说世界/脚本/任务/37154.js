/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("啊……其他地方的森林都很开阔。我从没去过南边，还挺想去看看的。");
	} else if (status === i++) {
		qm.sendNext("那个嘛……南边没什么阳光，我们一般也不会过去。");
	} else if (status === i++) {
		qm.sendNext("当然也有妖精喜欢那种地方……但我更喜欢这里。");
	} else if (status === i++) {
		qm.sendNext("虽然最近有人说在那边听到了奇怪的声音，但那个地方应该不会有什么问题的。");
	} else if (status === i++) {
		qm.sendNext("应该……不会出什么事……");
	} else if (status === i++) {
		qm.sendNext("请不要在那种地方制造问题。也许……会变得不可收拾……");
	} else if (status === i++) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.gainExp(3700);
		qm.dispose();
	}
}
