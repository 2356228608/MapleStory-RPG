// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("[事件日志4]", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("这是大新闻啊！真是大新闻！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("根据明明女士的情报……有人在勇士部落贩卖珍稀动物！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("他应该不会要把我们的嘟嘟卖了吧，呜呜……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("而且，在射手村有人像我一样丢了乌龟！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("既然玛亚知道，那我就去找她吧。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.forceCompleteQuest(59709);
		cm.fieldEffect_KinesisEXP(cm.getPlayer().getLevel() * 10000);
		cm.updateInfoQuest(59761, "10=1;1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
		cm.inGameDirectionEvent_AskAnswerTime(2200);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.setInGameDirectionMode(false, false, false);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
