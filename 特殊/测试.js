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
/* 起源之塔
Made by Jessefjxm
 */
var status = -1;

// 主体

// 剧情专用单向事件
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		//cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.getMap().startMapEffect(""+5120001+status,5120001+status,1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		// 收尾
		//cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.dispose();
	} else {
		cm.dispose();
	}
}