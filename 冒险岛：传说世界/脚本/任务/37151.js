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
		qm.sendNext("#fs10#喂……喂……", 1012110);
	} else if (status === i++) {
		qm.sendNextS("嗯？好像有人在叫我……");
	} else if (status === i++) {
		qm.sendNext("嗯……能听到我的声音吗……", 1012110);
	} else if (status === i++) {
		qm.sendNext("我是在魔法密林进行研究的巴缇博士的女儿桉。", 1012110);
	} else if (status === i++) {
		qm.sendNext("我有件事想请你帮忙…你能答应我吗？", 1012110);
	} else if (status === i++) {
		qm.askYesNo("那么…请过来找我……拜托了……\r\n#r（接受时，移动到魔法密林的桉的前面。）", 1012110);
	} else if (status === i++) {
		qm.sendNext("我在魔法密林等你。", 1012110);
	} else if (status === i++) {
		qm.warp(101000000, 4);
		qm.OnStartNavigation(101000000,1,"1012110",37151);
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	qm.dispose();
}
