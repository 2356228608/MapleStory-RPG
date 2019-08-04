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
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("#fs22#地下44楼是一片游乐场，让怪物们可以奔跑游玩的游乐场。 \r\n\r\n现在没有什么剩下的怪物了。毕竟站在侵入者的立场大概会认为要跨越这个地方是很困难的。 \r\n\r\n不过你现在就像是起源之塔的侵入者。你到现在都做得很好，应该可以跨越的。", 30000);
	} else if (status === i++) {	// 上右镰刀 右上角 右下出口
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		cm.inGameDirectionEvent_PushMoveInfo(0, 750, 200, -800);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(0, 750, 4000, -1500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(0, 750, 5000, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
		// 收尾
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
		em.setProperty("stage" + level, "start");
		cm.addPopupSay(2540000, 6000, "请突破至44楼吧。");
		cm.warp(992043000, 1);
	} else {
		cm.dispose();
	}
}
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
