var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		qm.askYesNo("#b#p2161004##k的信已经交给了他的家人。希望你能帮我一个忙……");
	} else if (status == i++) {
		qm.sendNext("现在#p2161004#的灵魂之所以会受到寒气的折磨，是因为狮子王向#p2161004#下了诅咒。要想解开那个诅咒，必须切断狮子王和#p2161004#之间的诅咒的力量……");
	} else if (status == i++) {
		qm.sendNext("你带着这个水晶过去。这个水晶里含有我的魔法的力量。在#p2161004#所在的地方使用水晶，狮子王施加在#p2161004#身上的诅咒就会解开。");
	} else if (status == i++) {
		if (!qm.haveItem(4032859))
			qm.gainItem(4032859, 1);
		var newStatus = qm.getQuestRecord(3182);
		newStatus.setStatus(1);
		qm.getPlayer().updateQuest(newStatus, true);
		qm.sendNext("这个水晶我就送给你，但是如果你弄丢了，重新制作就需要#r1000万金币#k。一定要记住。我会把你送到狮子王之城入口处，你快去找莫特吧。");
	} else if (status == i++) {
		qm.warp(211060000, 0);
		qm.OnStartNavigation(211060400, 1, "2161004", 3182);
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
