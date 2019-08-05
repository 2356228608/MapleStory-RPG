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
var start = 1000; // 阿丽莎呢？？？？
var end = 1000;
var level = [5, 15, 25, 35, 45, 10, 20, 30, 40, 50];
function action(mode, type, selection) {
	if (mode === 0) {
		status--;
	} else {
		status++;
	}

	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		//cm.effect_OnUserEff("UI/UIWindow3.img/aquarisTowerFrame/1366");
		//cm.fieldEffect_ProcessOnOffLayer(count, "UI/UIWindow3.img/aquarisTowerFrame/1366", 0, 500, 0, 00, 40,0, 0);
		//cm.fieldEffect_ScreenMsg("UI/UIWindow3.img/aquarisTowerFrame/1366");
		cm.inGameDirectionEvent_Effect("UI/UIWindow3.img/aquarisTowerFrame/1366", 3000, 0, 0, 10000000, 66666, 0, 2540000, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(00);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.dispose();
	} else {
		cm.dispose();
	}
}
var count = 30;
function bbbaction(mode, type, selection) {
	status++;
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
