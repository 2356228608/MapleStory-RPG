var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.forceStartQuest();
		if (!qm.haveItem(2430159))
			qm.gainItem(2430159, 1);
		qm.dispose();
	}
}
function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
			qm.sendNext("是你啊……你把我的信交给阿尔卡斯特了吗？");
	} else if (status == i++) {
		qm.sendNext("什么？我的诅咒解开了？怎么会……");
	} else if (status == i++) {
		qm.sendNext("咦……是真的啊……现在我不觉得冷了！也不疼了！可以自由地移动了！哈哈哈……真是谢谢你……");
	} else if (status == i++) {
		qm.sendNext("我欠了阿尔卡斯特一个人情……当然也欠你一个人情……作为答谢，如果你能搜集到#b#t4310009##k和#b#t4310010##k，我就用在城里找到的#b装备#k和#b武器#k跟你交换。");
	} else if (status == i++) {
		qm.sendOk("什么？能不能免费送给你？世界上哪里有免费的午餐啊？");
	} else if (status == i++) {
		qm.gainItem(4032859, -1);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
