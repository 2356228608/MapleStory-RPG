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
	var qid = 37176;
	//im.forceStartQuest(qid, "1");
	//im.updateInfoQuest(qid, "value=9");
	var newStatus = im.getQuestNoRecord(qid);
	newStatus.setCustomData("21");
	//newStatus.setStatus(1);
	// 这样才能有效更新
	im.getPlayer().updateQuest(newStatus, true);
	im.playerMessage(5, "getQuest - " + im.getQuest(qid));
	im.playerMessage(5, "getQuestRecord - " + im.getQuestRecord(qid));
	im.playerMessage(5, "getQuestCustomData - " + im.getQuestCustomData(qid));
	// getQuestStatus 0：没开始 1：开始了 2：结束了
	im.playerMessage(5, "getQuestStatus - " + im.getQuestStatus(qid));
	im.playerMessage(5, "getInfoQuest - " + im.getInfoQuest(qid));
	im.dispose();
}

function actionPos(mode, type, selection) {
	im.playerMessage(5, im.getPlayer().getPosition());
	im.dispose();
}

function actionMovie(mode, type, selection) {
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		im.dispose();
	} else if (status === i++) {
		// 初始化
		im.curNodeEventEnd(true);
		im.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		im.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		im.inGameDirectionEvent_AskAnswerTime(0);
	} else if (status === i++) {
		im.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 收尾
		im.curNodeEventEnd(true);
		im.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		im.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		im.dispose();
	} else {
		im.dispose();
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
	status++;
	var i = -1;
	if (status <= i++) {
		im.dispose();
	} else if (status === i++) {
		im.curNodeEventEnd(true);
		im.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		im.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		im.inGameDirectionEvent(14, 0);
		im.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// [移动耗时] [缩放比例，标准1000，越大越放大] [动画耗时] [x] [y] 单独占用一次迭代
		im.inGameDirectionEvent_PushScaleInfo(1000, 500, 1000, 1000, -620);
	} else if (status === i++) {
		im.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		im.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -162, 264);
	} else if (status === i++) {
		im.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		im.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		im.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		im.dispose();
	} else {
		im.dispose();
	}
}

function actionQuest(mode, type, selection) {
	var qid = 37169;
	//im.forceStartQuest(qid, "1");
	//im.updateInfoQuest(qid, "value=9");
	var newStatus = im.getQuestNoRecord(qid);
	newStatus.setCustomData("9");
	//newStatus.setStatus(1);
	// 这样才能有效更新
	im.getPlayer().updateQuest(newStatus, true);
	im.playerMessage(5, "getQuest - " + im.getQuest(qid));
	im.playerMessage(5, "getQuestRecord - " + im.getQuestRecord(qid));
	im.playerMessage(5, "getQuestCustomData - " + im.getQuestCustomData(qid));
	// getQuestStatus 0：没开始 1：开始了 2：结束了
	im.playerMessage(5, "getQuestStatus - " + im.getQuestStatus(qid));
	im.playerMessage(5, "getInfoQuest - " + im.getInfoQuest(qid));
	im.dispose();
}

function actionMob(mode, type, selection) {
	var em = im.getEventManager("副本_起源之塔");
	var map = em.getMapFactoryMap(im.getMapId());
	map.killMonster(9309046);
	im.dispose();
}

var count = 30;
var start = 1000; // 阿丽莎呢？？？？
var end = 1000;
var level = [5, 15, 25, 35, 45, 10, 20, 30, 40, 50];
function actionMapEffect(mode, type, selection) {
	status++;
	if (status < 0) {
		im.dispose();
	} else if (status < end) {
		var now = start + 5120000 + status;
		im.warp(992000000 + level[status % 10] * 1000, 0);
		im.getMap().startMapEffect("startMapEffect Code " + now, now);
		im.askMenu("NEXT CODE : " + now);
	} else {
		im.dispose();
	}
}

function start黑屏放动画(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		qm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/birdgrow/0", 0, 2000, 0, 0, 0, 4, 1);
		qm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		qm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/birdgrow/0", 2, 1000, 0, 0, 0, 4, 1);
		qm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0); //创建一个遮布 0x10
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.curNodeEventEnd(true);
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.dispose();
	}
}
