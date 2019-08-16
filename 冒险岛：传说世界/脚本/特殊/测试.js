/*
 *  功能：测试
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
// UI图片
var z = "#fEffect/ItemEff/1112811/0/0#"; //"+z+"//美化

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
cm.fieldEffect_ScreenMsg("Effect/Direction2.img/flowervioleta/opennig/0");
	cm.dispose();
}

function actionPos(mode, type, selection) {
	cm.playerMessage(5, cm.getPlayer().getPosition());
	cm.dispose();
}

function actionMovie(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.inGameDirectionEvent_AskAnswerTime(0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 收尾
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}

function action缩放(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.inGameDirectionEvent(14, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// [移动耗时] [缩放比例，标准1000，越大越放大] [动画耗时] [x] [y] 单独占用一次迭代
		cm.inGameDirectionEvent_PushScaleInfo(1000, 500, 1000, 1000, -620);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -162, 264);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function actionQuest(mode, type, selection) {
	var qid = 37169;
	//cm.forceStartQuest(qid, "1");
	//cm.updateInfoQuest(qid, "value=9");
	var newStatus = cm.getQuestNoRecord(qid);
	newStatus.setCustomData("9");
	//newStatus.setStatus(1);
	// 这样才能有效更新
	cm.getPlayer().updateQuest(newStatus, true);
	cm.playerMessage(5, "getQuest - " + cm.getQuest(qid));
	cm.playerMessage(5, "getQuestRecord - " + cm.getQuestRecord(qid));
	cm.playerMessage(5, "getQuestCustomData - " + cm.getQuestCustomData(qid));
	// getQuestStatus 0：没开始 1：开始了 2：结束了
	cm.playerMessage(5, "getQuestStatus - " + cm.getQuestStatus(qid));
	cm.playerMessage(5, "getInfoQuest - " + cm.getInfoQuest(qid));
	cm.dispose();
}

function actionMob(mode, type, selection) {
	var em = cm.getEventManager("副本_起源之塔");
	var map = em.getMapFactoryMap(cm.getMapId());
	map.killMonster(9309046);
	cm.dispose();
}

var count = 30;
var start = 1000; // 阿丽莎呢？？？？
var end = 1000;
var level = [5, 15, 25, 35, 45, 10, 20, 30, 40, 50];
function actionMapEffect(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	if (status < 0) {
		cm.dispose();
	} else if (status < end) {
		var now = start + 5120000 + status;
		cm.warp(992000000 + level[status % 10] * 1000, 0);
		cm.getMap().startMapEffect("startMapEffect Code " + now, now);
		cm.askMenu("NEXT CODE : " + now);
	} else {
		cm.dispose();
	}
}

function start黑屏放动画(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/birdgrow/0", 0, 2000, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/birdgrow/0", 2, 1000, 0, 0, 0, 4, 1);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0); //创建一个遮布 0x10
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
	}
}
