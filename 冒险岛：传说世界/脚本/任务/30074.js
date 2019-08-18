/*
Made by Jessefjxm
 */
var status = -1;
var quest = 30074;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.dispose();
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
		qm.sendNext_Bottom("欢迎光临，客人你想买什么东西吗？告诉我的话，我可以慢慢给你介绍。", 1301000);
	} else if (status === i++) {
		qm.sendNextS_Bottom("我是来买蘑菇万能疗伤药的。听说这里有卖？");
	} else if (status === i++) {
		qm.sendNext_Bottom("哎呀，连你都听说了吗？是的，没错，我这里刚好有一瓶。这是非常珍贵的东西……总之，你知道这要卖多少钱吗？", 1301000);
	} else if (status === i++) {
		qm.sendNextS_Bottom("？？？");
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("原来的价格是20个月分期付款，每月5千金币。我感觉跟你很有缘分，所以就特别给你一个折扣，只要100.000金币就行！怎么样？你想买吗？", 1301000);
	} else if (status === i++) {
		if (qm.getPlayer().getMeso() >= 100000) {
			qm.gainMeso(-100000);
			qm.updateInfoQuest(quest, "NpcSpeech=13020211");
			qm.gainItem(4034113, 1);
			qm.sendNextNoESC_Bottom("啊，勇士，你帮我买到药了吗！用这个药，应该就能救活父亲！", 1302001);
		} else {
			qm.sendOkSNoESC_Bottom("啊呀，客人你的金币不够也。这样我可卖不了你哦。");
			qm.dispose();
		}
	} else if (status === i++) {
		qm.forceCompleteQuest(30074);
		qm.gainExp(42000);
		qm.gainItem(4034113, -1);
		qm.warp(106031003, 0);
		qm.dispose();
	}
}
