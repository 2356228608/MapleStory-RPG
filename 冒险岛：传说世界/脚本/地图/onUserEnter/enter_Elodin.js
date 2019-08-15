/*
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var map = ms.getMapId();
	if (map == 101080900 && ms.isQuestFinished(37157) && !ms.isQuestFinished(37158)) {
		action37157(mode, type, selection);
	} else if (map == 101084400 && ms.isQuestFinished(37166) && !ms.isQuestFinished(37167)) {
		ms.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h2;04=h1");
		ms.dispose();
	} else if (ms.isQuestActive(37169)) {
		action收集水1(mode, type, selection);
	} else if (ms.isQuestActive(37171)) {
		ms.setPartner(1, 1501010, 80002688, 0);
		ms.dispose();
	} else if (ms.isQuestActive(37173)) {
		action收集水2(mode, type, selection);
	} else if (ms.isQuestActive(37176)) {
		action收集水3(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action37157(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/forest");
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextS("呃啊啊啊……为什么……我到底干了什么，要把我困在这里，不让我出去……");
	} else if (status === i++) {
		ms.sendNextS("我想回去……");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_ChangeController(1501012, 473, 149, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(1501012, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 1, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.npc_LeaveField(1501012);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextS("……咦？");
	} else if (status === i++) {
		ms.sendNextS("那是那个……魔女？");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_far");
		ms.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/ddam", 0, 0, 0, 1, 0, 1, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextS("管不了那么多了！只要没把我变成青蛙，就是个好人！先跟上去再说！");
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(2750);
	} else if (status === i++) {
		ms.warp(101081300, 2);
		ms.dispose();
	}
}

function action收集水1(mode, type, selection) {
	var quest = 37169;
	var water = 4036503;
	var need = 9;
	var i = -1;
	var item = ms.getItemQuantity(water);
	if (item <= 0) {
		ms.dispose();
		return;
	}
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.askYesNoS("收集到一些#b#i" + water + "##z" + water + "##k了。要把它们倒入到瓶子里面吗？");
	} else if (status === i++) {
		var cur = parseInt(ms.getQuestCustomData(quest));
		var newStatus = ms.getQuestNoRecord(quest);
		var next = cur + item;
		newStatus.setCustomData("" + next);
		ms.removeAll(water);
		ms.getPlayer().updateQuest(Math.min(need, newStatus), true);
		if (next < need) {
			ms.sendOkS("已经往瓶子里倒入#b" + next + "滴#z4036503##k了。再收集#b" + (9 - next) + "滴就够了。");
		} else {
			ms.sendOkS("啊，这下满足要求了。拿给#b艾洛丁之鸟#k吧。");
		}
		ms.dispose();
	}
}

function action收集水2(mode, type, selection) {
	var quest = 37173;
	var water = 4036505;
	var need = 15;
	var i = -1;
	var item = ms.getItemQuantity(water);
	if (item <= 0) {
		ms.dispose();
		return;
	}
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.askYesNoS("收集到一些#b#i" + water + "##z" + water + "##k了。要把它们倒入到瓶子里面吗？");
	} else if (status === i++) {
		var cur = parseInt(ms.getQuestCustomData(quest));
		var newStatus = ms.getQuestNoRecord(quest);
		var next = cur + item;
		newStatus.setCustomData("" + next);
		ms.removeAll(water);
		ms.getPlayer().updateQuest(Math.min(need, newStatus), true);
		if (next < need) {
			ms.sendOkS("已经往瓶子里倒入#b" + next + "滴#z4036503##k了。再收集#b" + (9 - next) + "滴就够了。");
		} else {
			ms.sendOkS("啊，这下满足要求了。拿给#b艾洛丁之鸟#k吧。");
		}
		ms.dispose();
	}
}

function action收集水3(mode, type, selection) {
	var quest = 37176;
	var water = 4036506;
	var need = 21;
	var i = -1;
	var item = ms.getItemQuantity(water);
	if (item <= 0) {
		ms.dispose();
		return;
	}
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		var cur = parseInt(ms.getQuestCustomData(quest));
		var newStatus = ms.getQuestNoRecord(quest);
		var next = cur + item;
		newStatus.setCustomData("" + next);
		ms.removeAll(water);
		ms.getPlayer().updateQuest(Math.min(need, newStatus), true);
		if (next < need) {
			ms.sendOkS("已经往瓶子里倒入#b" + next + "滴#z4036503##k了。再收集#b" + (9 - next) + "滴就够了。");
		} else {
			ms.sendOkS("啊，这下满足要求了。拿给#b艾洛丁之鸟#k吧。");
		}
		ms.dispose();
	}
}
