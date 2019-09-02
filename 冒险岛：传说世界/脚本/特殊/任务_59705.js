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
		cm.inGameDirectionEvent_Monologue("[事件日志2]", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("贴完传单已经过了一段时间，但是我没有收到任何情报啊……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("不能灰心！在这段时间里，嘟嘟……！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("既然如此……进入第2阶段！如果没有情报，那就得实地调查！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("我得去村子里面到处搜查一下！", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.forceStartQuest();
		cm.forceCompleteQuest(59705);
		cm.fieldEffect_KinesisEXP(cm.getPlayer().getLevel() * 10000);
		cm.updateInfoQuest(59761, "1=1;2=1;3=1;4=1;5=1;6=1");
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
