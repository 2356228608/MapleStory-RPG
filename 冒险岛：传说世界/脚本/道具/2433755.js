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
		// 显示文字：字体，大小 [刷字时间] [持续时间] [位置（0=左上，1=中上，2=右上，3=左中，4=正中，5=右中，6=左下，7=中下，8=右下 ）]
		// ... [X] [Y] [?] [?] [?] [淡入时间（立刻刷新所有字）] [淡入时间（立刻刷新所有字）]
		im.effect_Text("   ", 500, 0, 4, -50, -50, 1, 4, 0, 0, 0); //334 0x3D
		im.inGameDirectionEvent_AskAnswerTime(0);
	} else if (status === i++) {
		im.effect_Text("   ", 500, 0, 4, -150, -150, 1, 4, 0, 0, 0); //334 0x3D
		im.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		// 收尾
		im.fieldEffect_ProcessOnOffLayer("0", "", 2, 0, 0, 0, 0, 0, 0);
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

function action(mode, type, selection) {
	im.playerMessage(5, im.getPlayer().getPosition());
		im.fieldEffect_ScreenMsg("Effect/Direction1.img/effect/aran/finishLilin/0");
	im.dispose();
}
function actionQuest(mode, type, selection) {
	var qid = 32163;
	im.forceStartQuest(qid);
	im.playerMessage(5, "getQuest - " + im.getQuest(qid));
	im.playerMessage(5, "getQuestRecord - " + im.getQuestRecord(qid));
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
