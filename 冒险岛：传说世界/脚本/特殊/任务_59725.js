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
		cm.inGameDirectionEvent_Monologue("[事件日志10]", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("橡果侦探团!", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("代号剑斗和杰特虽然似乎不是很满意，不过我很喜欢！", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("而且橡果真的很好吃，嘿嘿。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("现在真的要去对付APORD了！跟着动物的毛发走吧！", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.updateInfoQuest(16157, "point=264");
		cm.forceCompleteQuest(59725);
		cm.fieldEffect_KinesisEXP(2447700);
		cm.updateInfoQuest(59763, "1=1;2=1;3=1;4=1;5=1;6=1");
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
